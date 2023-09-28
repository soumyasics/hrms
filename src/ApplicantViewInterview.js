import React, { useEffect, useState } from "react";
import ApplicantNav from "./ApplicantNav/ApplicantNav";
import axiosInstance from "./baseUrl";

function ApplicantViewInterview() {
  const [value, setValue] = useState([]);
  const aid = localStorage.getItem("applicantId");

  useEffect(() => {
    axiosInstance.post(`/viewApplicantInterviewById/${aid}`)
    .then((res) => {
      console.log(res);
      setValue(res.data.data);
    });
  }, []);

  return (
    <div>
      <ApplicantNav />
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            {
                value.length?value.map((a)=>{
                    return(
                        <div className="col-md-5">
              <div className="profile-head">
                <div className="row">
                  <div className="col-md-6">
                    <label>Job title</label>
                  </div>
                  <div className="col-md-6">
                    <p>{a.jid.title}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Category</label>
                  </div>
                  <div className="col-md-6">
                    <p>{a.jid.category}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Scheduled date</label>
                  </div>
                  <div className="col-md-6">
                    <p><b>{a.date}</b></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Scheduled Time</label>
                  </div>
                  <div className="col-md-6">
                    <p><b>{a.time}</b></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Venue</label>
                  </div>
                  <div className="col-md-6">
                    <p><b>{a.venue}</b></p>
                  </div>
                </div>
                
                </div>
              </div>
           
                    )
                }):<h1 style={{textAlign:'center',padding:'25px'}} >No Interviews Scheduled</h1>
            }
            
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplicantViewInterview;
