import React, { useEffect, useState } from "react";
import PmNav from "./PmNav";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./baseUrl";
import { toast } from "react-toastify";
import Select from "react-select";
import makeAnimated from "react-select/animated";

function PmAddProjects() {
  const animatedComponents = makeAnimated();

  const id = localStorage.getItem("empId");
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [value, setvalue] = useState({
    title: "",
    members: [],
    technology: "",
    deadline: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .post(`/viewEmployees`)
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          setMembers(response.data.data);
        }
        // localStorage.setItem('jobapplcnt',response.data.data.aid._id)
        // setArray(response.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelectChange = (selectedOptions) => {
    const selectedMemberIds = selectedOptions.map((option) => option.value);
    setSelectedMembers(selectedMemberIds);
    setvalue({ ...value, members: selectedMemberIds });
  };



  const onSubmit = (e) => {
    e.preventDefault();

    console.log(value);
    axiosInstance
      .post(`/addProject/${id}`,value)
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          toast.success("Applied");
        }
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(value);

  return (
    <div>
      <PmNav />
      <div class="contact mt-100">
        <div class="container">
          <div class="section-header">
            <h2>Add projects</h2>
          </div>
          <form className="form" onSubmit={onSubmit}>
            <div class="row ">
              <div class="col-3">
                <label>Project Name</label>
              </div>

              <div class="col-9 mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  onChange={(e) => {
                    setvalue({ ...value, title: e.target.value });
                  }}
                  required
                />
              </div>
            </div>


            
            <div class="row ">
              <div class="col-3">
                <label>Add members</label>
              </div>
              <div class="col-9 mb-2">
                <Select
                  options={members?members.map((e) => ({
                    value: e._id,
                    label: e.name,
                  })
                  ):''
                }
                  isMulti
                  components={animatedComponents}
                  onChange={handleSelectChange}
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
                  onChange={(e) => {
                    setvalue({ ...value, technology: e.target.value });
                  }}
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
                  type="date"
                  class="form-control"
                  placeholder="First name"
                  onChange={(e) => {
                    setvalue({ ...value, deadline: e.target.value });
                  }}
                  required
                />
              </div>
            </div>
            {/* <div class="row ">
              <div class="col-3">
                <label>Comments</label>
              </div>
              <div class="col-9 mb-2">
              <textarea
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Comments"
                      onChange={(e)=>{setvalue({...value,comments:e.target.value})}}

                    />
              </div>
            </div> */}
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
  );
}

export default PmAddProjects;
