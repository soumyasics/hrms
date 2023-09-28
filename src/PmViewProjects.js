import React, { useEffect, useState } from 'react'
import PmNav from './PmNav'
import axiosInstance from './baseUrl';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function PmViewProjects() {

    const id=localStorage.getItem('empId')

    const [array,setArray]= useState([]);

    useEffect(()=>{
        axiosInstance.post(`/viewAllProjectforPm/${id}`)
        .then((response)=>{
            if(response.data.status==200){
                console.log(response);
            setArray(response.data.data)
            }
            
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const handleRemove = (id) => {
        axiosInstance.post(`/delProj/${id}`)
          .then((res) => {
            console.log(res);
            if(res.data.status==200){
                alert('Removed')
                setArray(prevArray => prevArray.filter(item => item._id !== id));
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
  return (
    <div>
      <PmNav/>
      <div class="pricing mt-100">
            <div class="container">
                <div class="section-header">
                    <h2>Projects</h2>
                    
                </div>
                <div class="row">
                    {
                        array?array.map((a)=>{
                            return(
                               <div class="col-md-4">
                        <div class="price-content">
                            <ul class="price-details pt-5 pb-3">
                                <li><h1>{a.title}</h1> </li>
                                <li>{a.technology}</li>
                                <li>Completed : {a.percentage}%</li>
                                
                            </ul>
                            <Link to={`/pm_view_singleprct/${a._id}`} class="btn btn-danger mian-btn price-btn" >View</Link>
                            <Link onClick={() => handleRemove(a._id)} class="btn btn-danger mian-btn price-btn" style={{background:'#dc3545'}} >Delete</Link>
                        </div>
                    </div> 
                            )
                        }):<h1 style={{textAlign:'center',padding:'25px'}} >No Projects found</h1>
                    }
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default PmViewProjects
