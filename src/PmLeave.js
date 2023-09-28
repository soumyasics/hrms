import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from './baseUrl';
import { toast } from 'react-toastify';
import PmNav from './PmNav';

function PmLeave() {
    const [leave, setleave] = useState({from:'',to:'',type:'',comments:''});
    const id=localStorage.getItem('empId')
    const navigate=useNavigate();
    const onSubmit=(e)=>{
      e.preventDefault();
      axiosInstance.post(`/applyLeave/${id}`,leave)
      .then((response)=>{
          console.log(response);
          if(response.data.status==200){
              toast.success('Applied')
              navigate('/pm-profile')
          }
          // localStorage.setItem('jobapplcnt',response.data.data.aid._id)
          // setArray(response.data.data)
      })
      .catch((err)=>{
          console.log(err);
      })
      // console.log(interview);
  }
  return (
    <div>
      <PmNav/>
      <div class="contact mt-100">
        <div class="container">
          <div class="section-header">
            <h2>take a leave</h2>
          </div>
          <form className="form" onSubmit={onSubmit}>
            <div class="row ">
              <div class="col-3">
                <label>Leave Type</label>
              </div>
              <div class="col-9 mb-2">
                <select class="form-select" aria-label="Default select example" onChange={(e)=>{setleave({...leave,type:e.target.value})}} required>
                  <option selected>Open this select menu</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Flexi Leave">Flexi Leave</option>
                </select>
              </div>
            </div>
            <div class="row ">
              <div class="col-3">
                <label>From</label>
              </div>
              <div class="col-9 mb-2">
                <input
                  type="date"
                  class="form-control"
                  placeholder="First name"
                  onChange={(e)=>{setleave({...leave,from:e.target.value})}}
                required
                />
              </div>
            </div>
            <div class="row ">
              <div class="col-3">
                <label>To</label>
              </div>
              <div class="col-9 mb-2">
                <input
                  type="date"
                  class="form-control"
                  placeholder="First name"
                  onChange={(e)=>{setleave({...leave,to:e.target.value})}}
                  required
                />
              </div>
            </div>
            <div class="row ">
              <div class="col-3">
                <label>Comments</label>
              </div>
              <div class="col-9 mb-2">
              <textarea
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Comments"
                      onChange={(e)=>{setleave({...leave,comments:e.target.value})}}

                    />
              </div>
            </div>
            <div class="row ">
              <div class="col-3"></div>
              <div class="col-9 mb-2">
                <div>
                  <button class="btn" type="submit" style={{position:'relative',float:'right'}} >
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

export default PmLeave
