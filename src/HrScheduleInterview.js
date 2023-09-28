import React, { useEffect, useState } from 'react'
import HrNav from './HrNav'
import { json, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from './baseUrl';
import { toast } from 'react-toastify';

function HrScheduleInterview() {

  const {id} = useParams()
  const reqid = JSON.parse(id)
  const navigate=useNavigate();
  console.log(reqid.aid);

  
    const [interview, setsetInterview] = useState({aid:reqid.aid,jid:reqid.jid,time:'',venue:'',date:''});

    const onSubmit=(e)=>{
        e.preventDefault();
        axiosInstance.post(`/scheduleInterview`,interview)
    .then((response)=>{
        console.log(response);
        if(response.data.status==200){
            toast.success('Scheduled')
            navigate('/hr-view-applicant')
        }
        // localStorage.setItem('jobapplcnt',response.data.data.aid._id)
        // setArray(response.data.data)
    })
    .catch((err)=>{
        console.log(err);
    })
    }

  return (
    <div>
      <HrNav/>
      <div className="container-fluid py-5">
        <div className="container" style={{ marginTop: "5rem" }}>
          <div class="section-header">
            <h2>Add Interview Details</h2>
          </div>
          <div className="row gx-5">
            <div className="col-lg-12" style={{ paddingTop: "2rem" }}>
              <form onSubmit={onSubmit} >
                <div className="row g-3">
                  <div className="col-6">
                    <label>Time </label>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="eg: 10:00am"
                      style={{ height: "55px" }}
                      onChange={(e)=>{setsetInterview({...interview,time:e.target.value})}}
                      required
                    />
                    
                  </div>
                  <div className="col-6">
                    <label>Date </label>
                    <input
                      type="date"
                      className="form-control bg-light border-0 px-4"
                      placeholder="eg: 10:00am"
                      style={{ height: "55px" }}
                      onChange={(e)=>{setsetInterview({...interview,date:e.target.value})}}
                      required
                    />
                    
                  </div>
                  <div className="col-12">
                    <label>Venue </label>
                    <textarea
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Add Venue"
                      style={{ height: "75px" }}
                      onChange={(e)=>{setsetInterview({...interview,venue:e.target.value})}}
                        required
                    />
                    
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                      style={{ background: "#888888", border: "none" }}
                    >
                      Add
                    </button>
                    {/* <p className="mt-4 text-center">
                      Already have an account?{" "}
                      <Link to="/movers-login" className="text_dec">
                        Login
                      </Link>
                    </p> */}
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

export default HrScheduleInterview
