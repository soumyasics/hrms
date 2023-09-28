import React, { useEffect, useState } from 'react'
import HrNav from './HrNav'
import axiosInstance from './baseUrl';

function HrScheduledInterviews() {

    const [value, setValue] = useState([]);
//   const id=localStorage.getItem("empId")


  useEffect(()=>{
  axiosInstance.post(`/viewInterviews`)
  .then((res)=>{
    // console.log(res.data.desig);
    console.log(res);
    setValue(res.data.data)
    
  })

  },[])

  return (
    <div>
      <HrNav/>
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
                    <label>Applicant Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{a.aid.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>E-mail</label>
                  </div>
                  <div className="col-md-6">
                    <p>{a.aid.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Contact</label>
                  </div>
                  <div className="col-md-6">
                    <p>{a.aid.contact}</p>
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
  )
}

export default HrScheduledInterviews
