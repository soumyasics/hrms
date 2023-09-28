import React, { useEffect, useState } from 'react'
import HrNav from './HrNav'
import axiosInstance from './baseUrl';
import { Link } from 'react-router-dom';

function HrViewComplaints() {

    const [array,setArray]= useState([]);

    useEffect(()=>{
        axiosInstance.post("/viewPendingComplaints")
        .then((response)=>{
            console.log(response);
           
            setArray(response.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <div>
      <HrNav/>
      <div class="container-fluid pt-4 px-4 p-5 mt-100" >
                <div class="bg-light text-center rounded p-5">
                <div class="section-header">
                    <h2>Complaints</h2>
                   
                </div>
                {
                                    array.length?array.map((a)=>{
                                        return(
                    <div class="table-responsive">
                   
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-dark">
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Complaint date</th>
                                    <th scope="col">Complaint</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                            <tr>
                                            <td>{a.empid.name}</td>
                                            <td>{a.empid.email}</td>
                                            <td>{a.empid.contact}</td>
                                            <td>{a.date.slice(0,10)}</td>
                                            <td>{a.complaint}</td>
                                            <td><Link to={`/hr-update-status/${a._id}`} ><button class='btn btn-success'>Update status</button></Link></td>
                                            
                                            
                                           
                                            {/* <td><button class="btn btn-sm btn-danger" onClick={() => handleRemove(a._id)} >Remove</button></td>                                         */}
                                            </tr>

                                        
                                
                                
                            </tbody>
                        </table>
                       
                    </div>
                     )
                                       

                    }):<h1 style={{textAlign:'center',padding:'25px'}} >No Complaints found</h1>
                }
                </div>
            </div>
    </div>
  )
}

export default HrViewComplaints
