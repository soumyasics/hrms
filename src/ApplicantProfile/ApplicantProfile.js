import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApplicantNav from "../ApplicantNav/ApplicantNav";
import Lottie from 'lottie-react';
import applicantprof from '../applicantprof.json'
import axiosInstance from "../baseUrl";

function ApplicantProfile() {
  const [value, setValue] = useState({});
  const id = localStorage.getItem("applicantId");

  useEffect(() => {
    console.log(id);

    axiosInstance.post(`/viewApplicant/${id}`)
    .then((res) => {
      console.log(res);
      setValue(res.data.data);
    });
  }, []);



  return (
    <div>
      <ApplicantNav/>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              {/* <img src='' style={{ height: "400px" }} alt="" /> */}
              <Lottie animationData={applicantprof} style={{ height: "400px" }} />
            </div>
            <div className="col-md-5">
              <div className="profile-head">
                <h5 className=" text-uppercase">{value.name}</h5>
                <h6>{value.email}</h6>
                <p className="proile-rating"></p>
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
                    <label>Qualification</label>
                  </div>
                  <div className="col-md-6">
                    <p>{value.qualification}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div className="col-md-6">
                    <p>{value.experience} Years</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Skills</label>
                  </div>
                  <div className="col-md-6">
                    <p>{value.skills+" "}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Languages</label>
                  </div>
                  <div className="col-md-6">
                    <p>{value.language+" "}</p>
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
              </div>
            </div>
            <div className="col-md-3">
              <Link to="/applicant_edit_profile">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ marginRight: "3px" }}
                >
                  Edit
                </button>
              </Link>
             
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

export default ApplicantProfile;
