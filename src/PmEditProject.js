import React, { useEffect, useState } from 'react'
import PmNav from './PmNav'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from './baseUrl';
import { toast } from 'react-toastify';
import Select from "react-select";
import makeAnimated from "react-select/animated";

function PmEditProject() {

  const [value, setvalue] = useState({
    title: "",
    members: [],
    technology: "",
    deadline: "",
  });
    const [totalMembers, settotalMembers] = useState([]);
    const [selectedMembersData, setSelectedMembersData] = useState([]);
    const [selectedMembersData1, setSelectedMembersData1] = useState([]);



    const animatedComponents = makeAnimated();


    const navigate = useNavigate();

    const {id}=useParams();



    useEffect(() => {
        axiosInstance
          .post(`/viewProjById/${id}`)
          .then((response) => {
            console.log(response);
            setvalue(response.data.data);
            // setSelectedMembers(response.data.data.members);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      useEffect(() => {
        axiosInstance
          .post(`/viewEmployees`)
          .then((response) => {
            console.log(response);
            if (response.data.status == 200) {
              settotalMembers(response.data.data);
            }
           
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

    

      // const handleSelectChange = (selectedOptions) => {
      //   const selectedMemberIds = selectedOptions.map((option) => {return option.value});
      //   // console.log(selectedMemberIds);
        
      //   setvalue({ ...value, members: [...value.members, selectedMemberIds[selectedMemberIds.length-1] ] });
      // };


      


      // Step 2: Update handleSelectChange function to update selectedMembersData
  const handleSelectChange = (selectedOptions) => {
    const selectedMemberData = selectedOptions.map((option) => option.value);
    setSelectedMembersData(selectedMemberData);
    setvalue({ ...value, members: [...value.members, ...selectedMemberData] });
  };

  // Step 3: Map selectedMembersData back to the format expected by the Select component
  const selectedMembersOptions = selectedMembersData.map((member) => ({
    value: member, // The entire member object
    label: member.name, // Assuming the member object has a "name" property
  }));

    
      

      useEffect(()=>{
        console.log(value,'original value');
      })

      const updatefcn = (e) => {
        e.preventDefault();

        console.log(value, 'submit value');
    
        axiosInstance
          .post(`/editProjyId/${id}`, value)
          .then((response) => {
            console.log(response);
            if (response.data.status == 200) {
              toast.success("Updated");
              navigate(`/pm_view_singleprct/${id}`);
            } else {
              toast.error("Updation Failed");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      const changefn = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value });
        console.log(value);

      };

     

  return (
    <div>
      <PmNav/>
      <div class="contact mt-100">
        <div class="container">
          <div class="section-header">
            <h2>Edit Project</h2>
          </div>
          <form className="form" onSubmit={updatefcn}>
            <div class="row ">
              <div class="col-3">
                <label>Project Name</label>
              </div>

              <div class="col-9 mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  name="title"
                  value={value.title}
                  onChange={changefn}
                  required
                />
              </div>
            </div>
            
            <div class="row ">
              <div class="col-3">
                <label>Technology</label>
              </div>

              <div class="col-9 mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  name="technology"
                  value={value.technology}
                  onChange={changefn}
                  required
                />
              </div>
            </div>
            <div class="row ">
              <div class="col-3">
                <label>Deadline</label>
              </div>
              <div class="col-9 mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  name="deadline"
                  value={value.deadline.slice(0,10)}
                  onChange={changefn}
                  required
                />
              </div>
            </div>
            <div class="row">
        <div class="col-3">
          <label>Existing Members</label>
        </div>
        <div class="col-9 mb-2">
          {/* Display the names of existing members in the input field */}
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            name="percentage"
            value={value.members.map((member) => member.name).join(', ')}
            readOnly // To prevent editing the input field manually
          />
        </div>
      </div>
            


            <div class="row ">
              <div class="col-3">
                <label>Add members</label>
              </div>
              <div class="col-9 mb-2">
                {/* <Select
                  options={totalMembers?totalMembers.map((e) => ({
                    value: e,
                    label: e.name,
                  })
                  ):''
                }
                  isMulti
                  components={animatedComponents}
                  value={value.members} 
                  onChange={handleSelectChange}
                  required
                /> */}

<Select
            options={totalMembers ? totalMembers.map((e) => ({
              value: e,
              label: e.name,
            })) : ''}
            isMulti
            components={animatedComponents}
            value={selectedMembersOptions} // Step 4: Pass selectedMembersOptions as the value prop
            onChange={handleSelectChange}
            required
          />

              
               
              </div>
            </div>

            
            <div class="row ">
              <div class="col-3"></div>
              <div class="col-9 mb-2">
                <div>
                  <button
                    class="btn"
                    type="submit"
                    style={{ position: "relative", float: "right" }}
                  >
                    Apply
                  </button>
                </div>{" "}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PmEditProject
