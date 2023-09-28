import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function PmNav() {
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
                        <div class="navbar-nav ml-auto " style={{marginLeft:'50rem'}}>
                            <Link to='/pm_home' class="nav-item nav-link ">Home</Link>
                            <Link to='/pm_add_project' class="nav-item nav-link ">Add Project</Link>
                            <Link to='/pm_view_project' class="nav-item nav-link ">View Projects</Link>
                            {/* <Link to='/hr-view-employees' class="nav-item nav-link ">Project Manager</Link>
                            <Link to="/hr-add-job" class="nav-item nav-link">Add Jobs</Link>
                            <Link to="/hr-view-job" class="nav-item nav-link">View Jobs</Link>
                            <Link to="/hr-view-applicant" class="nav-item nav-link">View Job Request</Link> */}
                            <Link to='/pm-profile' class="nav-item nav-link">Profile</Link>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default PmNav
