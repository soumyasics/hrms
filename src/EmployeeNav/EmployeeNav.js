import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
function EmployeeNav() {
    const navigate=useNavigate();
    useEffect(() => {
        if(localStorage.getItem('empId')==null){
          navigate('/')
        }
      });
  return (
    <div>
      <div id="nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md bg-dark navbar-dark" style={{marginLeft:'3rem'}}>
                    <a href="" class="navbar-brand mt-1">
                        <h1>HRMS</h1>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-around" id="navbarCollapse">
                        <div class="navbar-nav ml-auto " style={{marginLeft:'40rem'}}>
                            <Link to='/employee-home' class="nav-item nav-link ">Home</Link>
                            <Link to='/employee-projects' class="nav-item nav-link ">Projects</Link>
                            {/* <Link to='/about' href="about.html" class="nav-item nav-link">Projects</Link> */}
                            <Link to="/emp-payroll" class="nav-item nav-link">Payrolls</Link>
                            <Link to="/emp-complaints" class="nav-item nav-link">Add Complaints</Link>
                            <Link to="/emp-complaint-status" class="nav-item nav-link">View Complaint Status</Link>
                            <Link to='/employee-profile' class="nav-item nav-link">Profile</Link>
                            {/* <a href="pricing.html" class="nav-item nav-link">Pricing</a> */}
                            {/* <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Login</a>
                                <div class="dropdown-menu">
                                    <a href="" class="dropdown-ite">Skills</a>
                                    <a href="team.html" class="dropdown-item">Team Members</a>
                                    <a href="review.html" class="dropdown-item">Reviews</a>
                                    <a href="client.html" class="dropdown-item">Clients</a>
                                    <a href="single.html" class="dropdown-item">Single Page</a>
                                </div>
                            </div> */}
                            {/* <Link to='' class="nav-item nav-link">Contact</Link> */}
                            
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default EmployeeNav
