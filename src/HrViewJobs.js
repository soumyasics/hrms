import React, { useEffect, useState } from 'react'
import HrNav from './HrNav'
import axiosInstance from './baseUrl';
import { toast } from 'react-toastify';

function HrViewJobs() {

    const [array,setArray]= useState([]);

    useEffect(()=>{
        axiosInstance.post("/viewJobs")
        .then((response)=>{
            console.log(response);
            setArray(response.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const handleRemove = (id) => {
        axiosInstance.post(`/deleteJobById/${id}`)
          .then((res) => {
            console.log(res);
            if(res.data.status==200){
                toast.success('Removed')
                setArray(prevArray => prevArray.filter(item => item._id !== id));
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <div>
      <HrNav/>
      <div class="pricing mt-100">
            <div class="container">
                <div class="section-header">
                    <h2>Jobs</h2>
                    
                </div>
                <div class="row">
                    {
                        array?array.map((a)=>{
                            return(
                               <div class="col-md-4">
                        <div class="price-content">
                            <ul class="price-details pt-5">
                                <li><strong>{a.title}</strong> </li>
                                <li><strong>{a.category}</strong></li>
                                <li><strong>{a.qualification+' '}</strong> </li>
                                <li><strong>{a.skills+' '}</strong> </li>
                                <li> <strong>{a.experience?`${a.experience} Year Experience`:''} </strong> </li>
                                <li><strong> {a.sal?`₹${a.sal}`:''}</strong></li>
                                <li><strong> {a.description}</strong></li>
                            </ul>
                            <a href="#" class="btn btn-danger mian-btn price-btn" onClick={() => handleRemove(a._id)} >Remove</a>
                        </div>
                    </div> 
                            )
                        }):<h1 style={{textAlign:'center',padding:'25px'}} >No Jobs found</h1>
                    }
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default HrViewJobs
