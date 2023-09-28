import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav/AdminNav";
import axiosInstance from "./baseUrl";
import { useNavigate, useParams } from "react-router-dom";

function AdminViewSingleEmploy() {

    const [array,setArray]= useState([]);
    const [leaves,setleaves]= useState([]);
    const {id}=useParams();

    const navigate=useNavigate()

    useEffect(() => {
      if(localStorage.getItem('adminlog')==null){
        navigate('/')
      }
    });

    useEffect(()=>{
        axiosInstance.post(`/viewComplaintStatus/${id}`)
        .then((response)=>{
            console.log(response);
            setArray(response.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })

        axiosInstance.post(`/viewLeavesByEmpid/${id}`)
        .then((response)=>{
            console.log(response);
            setleaves(response.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <div>
      <AdminNav />
      <div class="pricing mt-100">
        <div class="container">
          <div class="section-header">
            <h2>Complaints & Leaves</h2>
          </div>
          <div class="row">
            <div class="col-md-6">
                <h6>Complaints</h6>
                
                {
                    array.length?array.map((a)=>{
                        return(
                            <ul class="list-group mb-2">
                            <li class="list-group-item">Complaint : {a.complaint}</li>
                            <li class="list-group-item">Status : {a.status}</li>

                            </ul>

                        )
                    }):<li class="list-group-item">No Complaints</li>

                }
              
            </div>
            <div class="col-md-6">
                <h6>Leaves</h6>
                {
                    leaves.length?leaves.map((a)=>{
                        return(
                            <ul class="list-group mb-2">
                            <li class="list-group-item">From : {a.from.slice(0,10)}</li>
                            <li class="list-group-item">To : {a.to.slice(0,10)}</li>

                            </ul>

                        )
                    }):<li class="list-group-item">No Leaves taken</li>

                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminViewSingleEmploy;
