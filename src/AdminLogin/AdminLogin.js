import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let mail='admin';
    let pass='admin123'

    let navigate=useNavigate();

    const doLogin = (e) => {
        e.preventDefault();


        if (mail===email && pass===password) {
            toast.success("Loggedin Successfully")
            localStorage.setItem('adminlog',1)
            navigate('/admin-dashboard')
        }else{
            toast.error("Login Failed... Check your email/password")  
        }
      };
  return (
    <div>
     
    <div class="contact ">
            <div class="container p-5">
                <div class="section-header">
                    <h2>Admin Login</h2>
                </div>
                <div class="row">
                    <div class="col-md-12">
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
                                <div><button class="btn mt-2" type="submit">Login</button></div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6">   
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin
