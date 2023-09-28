import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../baseUrl';
import { toast } from 'react-toastify';

function ApplicantNav() {
    const navigate=useNavigate();
    useEffect(() => {
        if(localStorage.getItem('applicantId')==null){
          navigate('/')
        }
      });

    // const [cat,setCategory]=useState('')
    // const [data,setdata]=useState([])
    

    // const searchfn=(e)=>{
    //     e.preventDefault();
    //     const category=cat
    //     console.log(category);

    //     axiosInstance.post(`/viewJobByCat/${category}`)
    //     .then((response)=>{

    //         console.log(response);
    //         setdata(response.data.data)
            
    //         // if (response.status===200) {
    //         //     localStorage.setItem("applicanttoken",response.data.token)
    //         //     localStorage.setItem("applicantId", response.data.user._id );
    //         //     toast.success("Loggedin Successfully")
    //         //     navigate('/applicant-home')
    //         // } 
    //     })
    //     .catch((err)=>{
    //         console.log('error',err);
    //         toast.error("Login Failed... Check your email/password")  
    //           })
    // }

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
                        {/* <form onSubmit={searchfn}  class='search d-flex'>
                                <input type="text" placeholder='search by category' name="category" value={cat} onChange={(e)=>{setCategory(e.target.value)}}/><Link to={{pathname:'/applicant_search_view',state:{data: data}}} ><button type="submit" class='btn btn-primary'  >search</button></Link>
                            </form  > */}
                            <Link to='/applicant-home' class="nav-item nav-link ">Home</Link>
                            <Link to='/applicant_search_view' class="nav-item nav-link ">Search</Link>
                            <Link to='/applicant_interview_view' class="nav-item nav-link ">My Interviews</Link>
                            <Link to="/applicant-profile" class="nav-item nav-link">Profile</Link>
                            
                            {/* <Link to='/employee-profile' class="nav-item nav-link">Profile</Link> */}
                            {/* <Link to='' class="nav-item nav-link">Contact</Link> */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  );
}

export default ApplicantNav;
