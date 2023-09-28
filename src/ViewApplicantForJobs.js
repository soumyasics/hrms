import React, { useEffect, useState } from 'react'
import HrNav from './HrNav'
import axiosInstance from './baseUrl';
import { Link } from 'react-router-dom';

function ViewApplicantForJobs() {

    const [array,setArray]= useState([]);

    useEffect(()=>{
        axiosInstance.post("/viewPendingApplns")
        .then((response)=>{
            console.log(response);
            // localStorage.setItem('jobapplcnt',response.data.data.aid._id)
            setArray(response.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])


  return (
    <div>
      <HrNav/>
      <div class="container-xxl py-5" style={{ marginTop: "6rem" }}>
        <div class="container">
          <div class="section-header">
            <h2>View applicant requests</h2>
          </div>
          {array?array.map((a) => {
                    return (
          <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
            <div class="tab-content">
              <div id="tab-1" class="tab-pane fade show p-0 active">
                {/* <div class="job-item p-4 mb-4"> */}
                <div class="job-item row g-4 p-4 mb-4">
                  
                      <>
                        <div class="col-sm-12 col-md-8  align-items-center">
                          <div class="text-start ps-4">
                            <h5 class="mb-3">Job type - {a.jid.title}</h5>
                            <span class="text-truncate me-3">
                              <i class="fa fa-map-marker-alt text-primary me-2"></i>
                              {a.jid.category}
                            </span>
                            <span class="text-truncate me-3">
                              <i class="far fa-clock text-primary me-2"></i>
                              {a.jid.experience} year experience
                            </span>
                            <span class="text-truncate me-0">
                              <i class="far fa-money-bill-alt text-primary me-2"></i>
                              Salary ₹{a.jid.sal}
                            </span>
                          </div>
                          <div class="text-start ps-4">
                            <span class="text-truncate me-3">
                              <i class="fa fa-map-marker-alt text-primary me-2"></i>
                              Qualification : {a.jid.qualification + " "}
                            </span>
                            <p class="text-truncate me-3">
                              <i class="far fa-clock text-primary me-2"></i>
                              Skills : {a.jid.skills + " "}
                            </p>
                            
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-8  align-items-center">
                          <div class="text-start ps-4">
                            <h5 class="mb-3">Applicant Name - {a.aid?a.aid.name:''}</h5>
                            <span class="text-truncate me-3">
                              <i class="fa fa-map-marker-alt text-primary me-2"></i>
                              {a.aid?a.aid.email:''}
                            </span>
                            <span class="text-truncate me-3">
                              <i class="far fa-clock text-primary me-2"></i>
                              {a.aid?a.aid.contact:''}
                            </span>
                            <span class="text-truncate me-0">
                              <i class="far fa-money-bill-alt text-primary me-2"></i>
                              {a.aid?a.aid.experience:''} Year experience
                            </span>
                            <span class="text-truncate me-0">
                              <i class="far fa-money-bill-alt text-primary me-2"></i>
                              {a.aid?a.aid.qualification + " ":''}
                            </span>
                          </div>
                          <div class="text-start ps-4">
                            
                            <p class="text-truncate me-3">
                              <i class="far fa-clock text-primary me-2"></i>
                              Skills : {a.aid?a.aid.skills + " ":''}
                            </p>
                            <p class="text-truncate me-3">
                              <i class="far fa-clock text-primary me-2"></i>
                              Languages : {a.aid?a.aid.language + " ":''}
                            </p>
                            
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                        <div class="d-flex mb-3">
                            <Link to={`/hr-schedule-interview/${JSON.stringify({aid:a.aid._id, jid:a.jid._id})}`} ><button
                              class="btn btn-sm btn-primary"
                              
                            >
                             Schedule interview
                            </button></Link>
                          </div>
                          <small class="text-truncate">
                            <i class="far fa-calendar-alt text-primary me-2"></i>
                            Posted on {a.date.slice(0, 10)}
                          </small>
                        </div>
                      </>
                  

                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>

);
}):<h1 style={{textAlign:'center',padding:'25px'}} >No new Jobs requests</h1>
}

        </div>
      </div>
    </div>
  )
}

export default ViewApplicantForJobs
