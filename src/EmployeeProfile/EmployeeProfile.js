import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeNav from "../EmployeeNav/EmployeeNav";
import img from "../Images/emplogin.jpg";
import axios from "axios";
import axiosInstance from "../baseUrl";

function EmployeeProfile() {


  const [value, setValue] = useState({designationid:{title:" "}});
  const id=localStorage.getItem("empId")
  console.log(id);

  useEffect(()=>{
  axiosInstance.post(`/viewEmpById/${id}`)
  .then((res)=>{
    // console.log(res.data.desig);
    console.log(res);
    setValue(res.data.data)
    
  })

  },[])



  return (
    <div>
      <EmployeeNav />
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            
            <div className="col-md-4">
              <img src={img} style={{ height: "400px" }} alt="" />
            </div>
            <div className="col-md-5">
              <div className="profile-head">
                <h5 className=" text-uppercase">{value.name}</h5>
                <h6>{value.email}</h6>
                <p className="proile-rating">
                </p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <p
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Details
                    </p>
                  </li>
                  <li className="nav-item"></li>
                </ul>

               
                      <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{value.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>E-mail</label>
                  </div>
                  <div className="col-md-6">
                    <p>{value.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Date of Join</label>
                  </div>
                  <div className="col-md-6">
                  {value && value.dateofjoin && (
                    <p>{value.dateofjoin.slice(0, 10)}</p>
                  )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Designation</label>
                  </div>
                  <div className="col-md-6">
                    <p> {value.designationid.title}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Contact</label>
                  </div>
                  <div className="col-md-6">
                    <p>{value.contact}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Gender</label>
                  </div>
                  <div className="col-md-6">
                    <p>{value.gender}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>City</label>
                  </div>
                  <div className="col-md-6">
                    <p>{value.city}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>District</label>
                  </div>
                  <div className="col-md-6">
                    <p>{value.district}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Pincode</label>
                  </div>
                  <div className="col-md-6">
                    <p>{value.pincode}</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="col-md-3">
              <Link to="/employee-edit-profile">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ marginRight: "3px" }}
                >
                  Edit
                </button>
              </Link>
              <Link to='/employee-leavepage' ><button
                type="button"
                class="btn btn-warning"
                style={{ marginRight: "3px", color: "white" }}
              >
                Apply Leave
              </button></Link>
              <Link to="/">
                <button type="button" className="btn btn-danger" onClick={()=>{localStorage.clear();}}>
                  
                  Logout
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeProfile;
