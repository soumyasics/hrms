import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function HrNav() {
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

                    <div class="collapse navbar-collapse justify-content-around "  id="navbarCollapse">
                        <div class="navbar-nav ml-auto " style={{marginLeft:'30rem'}}>
                            <Link to='/hr-home' class="nav-item nav-link ">Home</Link>
                            <Link to='/hr-view-employees' class="nav-item nav-link ">View Employees</Link>
                            <Link to='/hr-search-profiles' class="nav-item nav-link ">Search Profiles</Link>
                            {/* <Link to='/about' href="about.html" class="nav-item nav-link">Projects</Link> */}
                            <Link to="/hr-add-job" class="nav-item nav-link">Add Jobs</Link>
                            <Link to="/hr-view-job" class="nav-item nav-link">View Jobs</Link>
                            <Link to="/hr-view-applicant" class="nav-item nav-link">View Job Request</Link>
                            <Link to="/hr-view-complaints" class="nav-item nav-link">View Complaints</Link>
                            <Link to='/hr-profile' class="nav-item nav-link">Profile</Link>
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

export default HrNav
