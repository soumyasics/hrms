import React, { useEffect, useState } from 'react'
import ApplicantNav from './ApplicantNav/ApplicantNav'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from './baseUrl';
import img from "./Images/empEdit.jpg";


function ApplicantEditProf() {

    const [value,setValue] = useState({});
  const navigate=useNavigate();


  const id=localStorage.getItem("applicantId")


  useEffect(() => {


    axiosInstance.post(`/viewApplicant/${id}`)
    .then((res)=>{
    console.log(res);
    setValue(res.data.data)
    
  })
  }, []);

  const updatefcn=(e)=>{
    e.preventDefault();

    axiosInstance.post(`/editApplicantsById/${id}`,value)
    .then((response)=>{
      console.log(response);
      if (response.data.status==200) {
        toast.success('Profile Updated')
        navigate('/applicant-profile')
      }else{
        toast.error('Updation Failed')
      }

    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const changefn = (e)=>{
setValue({...value, [e.target.name]:e.target.value})

  }

  return (
    <div>
      <ApplicantNav/>
      <div className="container-fluid py-5" style={{ marginTop: "5rem" }}>
        <div className="container">
          <div className=" border-5 border-primary ps-5 mb-5">
            <h1 className="display-5 text-uppercase mb-0">Edit Profile</h1>
          </div>
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src={img}
                  style={{
                    objectFit: "contain",
                    height: "400px",
                    width: "100px",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7" style={{ paddingTop: "2rem" }}>
              <form onSubmit={updatefcn} >
                <div className="row g-3">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Name"
                      style={{ height: "55px" }}
                      value={value.name}
                      name="name"
                      onChange={changefn}
                      id="name"
                    />
                  </div>
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="email"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                      value={value.email}
                      onChange={changefn}
                      name="email"
                      id="email"
                    />
                  </div>

                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Qualification"
                      style={{ height: "55px" }}
                      value={value.qualification}
                      onChange={changefn}
                      name="qualification"
                      id="qualification"
                    />
                  </div>
                  
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Experience"
                      style={{ height: "55px" }}
                      value={value.experience}
                      onChange={changefn}
                      name="experience"
                      id="experience"
                    />
                  </div>

                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Skills"
                      style={{ height: "55px" }}
                      value={value.skills}
                      onChange={changefn}
                      name="skills"
                      id="skills"
                    />
                  </div>
                  
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Languages"
                      style={{ height: "55px" }}
                      value={value.language}
                      onChange={changefn}
                      name="language"
                      id="language"
                    />
                  </div>

                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Phonenumber"
                      style={{ height: "55px" }}
                      value={value.contact}
                      onChange={changefn}
                      name="contact"
                      id="contact"
                    />
                  </div>
                 
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Age"
                      style={{ height: "55px" }}
                      value={value.age}
                      onChange={changefn}
                      name="age"
                      id="password"
                    />
                  </div>

                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4 py-3"
                      placeholder="City"
                      style={{ height: "55px" }}
                      value={value.city}
                      onChange={changefn}
                      name="city"
                      id="city"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4 py-3"
                      placeholder="District"
                      style={{ height: "55px" }}
                      value={value.district}
                      onChange={changefn}
                      name="district"
                      id="district"
                    />
                  </div>
                  
                  
                  <div className="col-12">
                    <button className="btn btn-dark w-100 py-3" type="submit">
                      Update Profile
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicantEditProf
