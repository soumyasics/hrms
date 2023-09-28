import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import axiosInstance from '../baseUrl'
import { toast } from 'react-toastify'

function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [array,setArray] = useState ([])


    const navigate=useNavigate();

   

    const doLogin=(e)=>{
        e.preventDefault();

        const values={email:email,password:password}
        console.log(values);

        axiosInstance.post("/loginEmployee",values)
        .then((response)=>{
            console.log(response);
            console.log(response.data.user.designationid.title);
            
            if (response.data.user.designationid.title=='HR') {
                // localStorage.setItem("token",response.data.token)
                localStorage.setItem("empId", response.data.user._id );
                toast.success("Loggedin Successfully")
                navigate("/hr-home")
                console.log(response.data.user._id);
            } else if(response.data.user.designationid.title=='Project Manager'){
                localStorage.setItem("empId", response.data.user._id );
                toast.success("Loggedin Successfully")
                navigate("/pm_home")
            }else if(response.data.status==500){
                toast.error("Login Failed... Check your email/password")  
            }else{
                localStorage.setItem("empId", response.data.user._id );
                toast.success("Loggedin Successfully")
                navigate("/employee-home")
            }
        })
        .catch((err)=>{
            console.log('error',err);
            toast.error("Login Failed... Check your email/password")  
              })

    }
    

  return (
    <div>
        <Navbar/>
        <div class="contact mt-100">
            <div class="container">
                <div class="section-header">
                    <h2> Employee Login</h2>
                   
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form">
                            <form onSubmit={doLogin} class="contactForm">
                                <div class="form-row">
                                    <div class="form-group col-sm-12">
                                        <input type="text" class="form-control" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                                    </div>
                                    <div class="form-group col-sm-12">
                                        <input type="password" class="form-control" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                                    </div>
                                </div>
                                
                                <div class='d-flex justify-content-between mt-2' >
                                    <button class="btn mt-2" type="submit">Login</button>
                                    <Link to='/emp_forgot_pass'> <p  className='text_dec mt-2' >Forgot password?</p> </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6 ">
                        
                    <p className='mt-100 text-center' >Don't have an account? <Link to='/employee-signup'> <p  className='text_dec' >Sign up</p> </Link> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
