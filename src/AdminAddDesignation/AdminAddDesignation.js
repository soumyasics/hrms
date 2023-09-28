import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import AdminNav from "../AdminNav/AdminNav";
import img from '../Images/desig.jpg'
import { AdminDesignation } from "../Schemas/Schemas";
import { toast } from "react-toastify";
import axiosInstance from "../baseUrl";
import { useNavigate } from "react-router-dom";

function AdminAddDesignation() {

  const navigate=useNavigate()

  useEffect(() => {
    if(localStorage.getItem('adminlog')==null){
      navigate('/')
    }
  });

  const onSubmit=()=>{
    console.log(values);
    axiosInstance.post('/addDesignation',values)
    .then((res)=>{
      toast.success('Designation successfully added')
      console.log('working',res.data.msg);
    })
    .catch((err)=>{
      console.log('err',err);
    })
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
        initialValues: {
            title: "",
            bp: "",
            leaves: "",
            
          },
          validationSchema: AdminDesignation,
          onSubmit,
          
    })
  return (
    <div>
      <AdminNav />
      <div className="container-fluid py-5">
        <div className="container">
        
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight:'400px'}} >
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded" src={img} style={{objectFit:'contain', height:'400px', width:'100px'}} alt='' />
                    </div>
                </div>
            <div className="col-lg-7" style={{ paddingTop: "2rem" }}>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Job Title"
                      style={{ height: "55px" }}
                      value={values.title} onChange={handleChange} onBlur={handleBlur} id='title'
                    />
                    {errors.title && touched.title && (<p className="err">{errors.title}</p>)}

                  </div>
                  
                  
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Payment"
                      style={{ height: "55px" }}
                      value={values.bp} onChange={handleChange} onBlur={handleBlur} id='bp'

                    />
                    {errors.bp && touched.bp && (<p className="err">{errors.bp}</p>)}

                  </div>
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Leaves"
                      style={{ height: "55px" }}
                      value={values.leaves} onChange={handleChange} onBlur={handleBlur} id='leaves'

                    />
                     {errors.leaves && touched.leaves && (<p className="err">{errors.leaves}</p>)}

                  </div>
                  
                  <div className="col-12 mb-5">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAddDesignation;
