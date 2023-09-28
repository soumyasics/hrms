import React, { useState } from 'react'
import EmployeeNav from './EmployeeNav/EmployeeNav'
import { useNavigate } from 'react-router-dom'
import axiosInstance from './baseUrl'
import { toast } from 'react-toastify'

function EmployeeComplaints() {

    const [complaint,setcomplaint] = useState("")
    const empid=localStorage.getItem('empId')


    const navigate=useNavigate();

   

    const doLogin=(e)=>{
        e.preventDefault();

        const values={complaint:complaint}
        console.log(values);

        axiosInstance.post(`/addComplaint/${empid}`,values)
        .then((response)=>{
            console.log(response);
            toast.success('Complaint Added')
        })
        .catch((err)=>{
            console.log('error',err);
            toast.error("Login Failed... Check your email/password")  
              })

    }

  return (
    <div>
      <EmployeeNav/>
      <div class="contact mt-100">
            <div class="container">
                <div class="section-header">
                    <h2>Add Complaints</h2>
                   
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="form">
                            <form onSubmit={doLogin} class="contactForm">
                                <div class="form-row">
                                    <div class="form-group col-sm-12">
                                    <textarea
                                        type="text"
                                        className="form-control bg-light border-0 px-4"
                                        placeholder="Add Complaints"
                                        value={complaint} onChange={(e)=>{setcomplaint(e.target.value)}}

                    />
                                    </div>
                                    
                                </div>
                               
                                <div class='d-flex justify-content-between mt-2' >
                                    <button class="btn mt-2" type="submit">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComplaints
