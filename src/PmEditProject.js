import React, { useEffect, useState } from "react";
import PmNav from "./PmNav";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "./baseUrl";
import { toast } from "react-toastify";
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

  const { id } = useParams();

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

  const handleSelectChange = (selectedOptions) => {
    const selectedMemberData = selectedOptions.map((option) => option.value);

    const updatedMembers = [...value.members, ...selectedMemberData];

    const uniqueMembers = Array.from(new Set(updatedMembers));

    setvalue({ ...value, members: uniqueMembers });

    setSelectedMembersData(uniqueMembers);
  };

  const handleSelectRemove = (removedOption) => {
    const removedMemberId = removedOption.value._id;

    const updatedMembers = value.members.filter(
      (member) => member._id !== removedMemberId
    );

    setvalue((prevValue) => ({
      ...prevValue,
      members: updatedMembers,
    }));

    setSelectedMembersData(updatedMembers);
  };

  const selectedMembersOptions = selectedMembersData.map((member) => ({
    value: member,
    label: member.name,
  }));

  useEffect(() => {
    console.log("Selected members options:", selectedMembersOptions);
  }, [selectedMembersOptions]);

  useEffect(() => {
    console.log(value, "original value");
  });

  const updatefcn = (e) => {
    e.preventDefault();

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
      <PmNav />
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
                  value={value.deadline.slice(0, 10)}
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
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  name="percentage"
                  value={value.members.map((member) => member.name).join(", ")}
                  readOnly
                />
              </div>
            </div>

            <div class="row ">
              <div class="col-3">
                <label>Add members</label>
              </div>
              <div class="col-9 mb-2">
              <Select
  options={
    totalMembers
      ? totalMembers
          .filter((member) => !value.members.find((m) => m._id === member._id))
          .map((e) => ({
            value: e,
            label: e.name,
          }))
      : ""
  }
  isMulti
  hideSelectedOptions={true}
  components={{
    ...animatedComponents,
    MultiValueRemove: () => null
  }}
  value={selectedMembersOptions}
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
  );
}

export default PmEditProject;
