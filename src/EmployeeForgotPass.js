import React from 'react'
import Navbar from './Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from './baseUrl';
import { forgotPasswordScheme } from './Schemas/Schemas';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

function EmployeeForgotPass() {

    const navigate=useNavigate();

    const onSubmit=(e)=>{


        axiosInstance.post("/forgotPwdEmployee",values)
        .then((response)=>{
            console.log(response);
            
            if (response.data.status===200) {
                toast.success("Updated Successfully")
                navigate("/login")
            }else{
                toast.error("Login Failed... Check your email/password")
            }
        })
        .catch((err)=>{
            console.log('error',err);
            alert("Login Failed... Check your email/password")  
              })

    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
        initialValues: {
            email: "",
            password: "",
          },
          validationSchema: forgotPasswordScheme,
          onSubmit,
          
    })

  return (
    <div>
      <Navbar/>
      <div class="contact mt-100">
            <div class="container">
                <div class="section-header">
                    <h2>Forgot Password</h2>
                   
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="form">
                            <form onSubmit={handleSubmit} class="contactForm">
                                <div class="form-row">
                                    <div class="form-group col-sm-12">
                                        <input type="text" class="form-control" placeholder="Your Email" value={values.email} onChange={handleChange} onBlur={handleBlur} id='email' />
                                        {errors.email && touched.email && (<p className="err">{errors.email}</p>)}

                                    </div>
                                    <div class="form-group col-sm-12">
                                        <input type="password" class="form-control" placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur} id="password"/>
                                        {errors.password && touched.password && (<p className="err">{errors.password}</p>)}

                                    </div>
                                </div>
                               
                                <div class='d-flex justify-content-between mt-2' >
                                    <button class="btn mt-2" type="submit">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <div class="col-md-6 ">
                        
                    <p className='mt-100 text-center' >Don't have an account? <Link to='/employee-signup'> <p  className='text_dec' >Sign up</p> </Link> </p>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeForgotPass
