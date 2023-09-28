import React, { useState } from 'react'
import HrNav from './HrNav'
import { toast } from 'react-toastify';
import axiosInstance from './baseUrl';
import { useNavigate, useParams } from 'react-router-dom';

function HrUpdateComplaintStatus() {

    const id =useParams();

    const [status, setStatus] = useState({status:''});
    const navigate=useNavigate();
  const searchfn = (e) => {
    e.preventDefault();
   console.log(id.id);

    axiosInstance
      .post(`/updateComplaintStatus/${id.id}`,status)
      .then((response) => {
        console.log(response);
        // setdata(response.data.data);
        navigate('/hr-view-complaints')
        toast.success('Status added')

      })
      .catch((err) => {
        console.log("error", err);
        toast.error("Failed");
      });
  };

  return (
    <div>
      <HrNav/>
      <div class="container-xxl py-5" style={{ marginTop: "6rem" }}>
        <div class="container">
          <div class="section-header">
            <h2>Update Status</h2>
          </div>
          <form onSubmit={searchfn} style={{ marginBottom: "3rem" }}>
            <div className="row g-3">
              <div className="col-5">
                <input
                  className="form-control bg-light border-0 px-4"
                  style={{ height: "55px" }}
                  type="text"
                  placeholder="write status"
                  name="category"
                 
                  onChange={(e) => {
                    setStatus({ ...status, status: e.target.value });
                  }}
                />
              </div>
              <div className="col-1">
                <button type="submit" class="btn btn-secondary">
                  Update
                </button>
              </div>
            </div>
            {/* <input type="text" placeholder='search by category' name="category" value={cat} onChange={(e)=>{setCategory(e.target.value)}}/><kbdink to={{pathname:'/applicant_search_view',state:{data: data}}} ></kbdink> */}
          </form>
         
        </div>
      </div>
    </div>
  )
}

export default HrUpdateComplaintStatus
