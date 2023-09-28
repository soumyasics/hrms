import React, { useEffect, useState } from 'react'
import HrNav from './HrNav'
import { useNavigate } from 'react-router-dom';
import axiosInstance from './baseUrl';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { addJobScheme } from './Schemas/Schemas';

function HrAddJobs() {

    const [skill, setSkill] = useState([]);
    const [qualification, setqualification] = useState([]);
    const [coverage, setCoverage] = useState(false);
    const [er, setEr] = useState("");
  
    const navigate = useNavigate();
  
    const onSubmit = (e) => {
      e.preventDefault();
      values.skills = skill;
      values.qualification = qualification;
      console.log('iii',values);
  
      axiosInstance.post("/addJob",values)  
        .then((res) => {
          console.log("woking", res);
          console.log(res.data.status);
          if (res.data.status == 200) {
            // alert("Registration Successful")
            toast.success("Job added");
            // navigate("/applicant-login");
          } else {
            setEr(res.data.msg);
          }
        })
        .catch((err) => {
          console.log("error", err);
          // serEr(err.msg)
        });
    };
  
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
      useFormik({
        initialValues: {
            title:'',
            sal:'',
            experience:'',
            skills:'',
            qualification:'',
            description:'',
            category:''
        },
        validationSchema: addJobScheme,
        onSubmit,
      });
  
      useEffect(()=>{
        console.log('',values);
  })

  return (
    <div>
      <HrNav/>
      <div className="container-fluid py-5">
        <div className="container" style={{ marginTop: "5rem" }}>
          <div class="section-header">
            <h2>Add Jobs</h2>
          </div>
          <div className="row gx-5">
            <div className="col-lg-12" style={{ paddingTop: "2rem" }}>
              <form onSubmit={onSubmit}>
                <div className="row g-3">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Job Name"
                      style={{ height: "55px" }}
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="title"
                    />
                    {errors.title && touched.title && (
                      <p className="err">{errors.title}</p>
                    )}
                  </div>
                 
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Salary"
                      style={{ height: "55px" }}
                      value={values.sal}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="sal"
                    />
                    {errors.sal && touched.sal && (
                      <p className="err">{errors.sal}</p>
                    )}
                  </div>
                  <div className="col-5" style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Qualification"
                      style={{ height: "55px" }}
                      value={values.qualification}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="qualification"
                    />
                    <div>
                      <div className="container text-center">
                        <div className="row">
                          {coverage &&
                            qualification.map((data, index) => {
                              return (
                                <div className="col ">
                                  <p class="area_des">{data}</p>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1">
                    <button
                      type="button"
                      className="add_btn"
                      onClick={(e) => {
                        setCoverage(false);
                        const newIteam = [...qualification, values.qualification];
                        setqualification(newIteam);
                        setCoverage(true);
                      }}
                    >
                      <span>
                        <p style={{ color: "white", marginTop: "12px" }}>ADD</p>
                      </span>
                    </button>
                  </div>
                  {errors.language && touched.language && (
                    <p className="err">{errors.language}</p>
                  )}
                  
                  {/* <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Qualification"
                      style={{ height: "55px" }}
                      value={values.qualification}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="qualification"
                    />
                    {errors.qualification && touched.qualification && (
                      <p className="err">{errors.qualification}</p>
                    )}
                  </div> */}
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Experience"
                      style={{ height: "55px" }}
                      value={values.experience}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="experience"
                    />
                    {errors.experience && touched.experience && (
                      <p className="err">{errors.experience}</p>
                    )}
                  </div>

                  
                  
                  

                  
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Description"
                      style={{ height: "55px" }}
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="description"
                    />
                    {errors.description && touched.description && (
                      <p className="err">{errors.description}</p>
                    )}
                  </div>

                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Category"
                      style={{ height: "55px" }}
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="category"
                    />
                    {errors.category && touched.category && (
                      <p className="err">{errors.category}</p>
                    )}
                  </div>
                  <div className="col-10" style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Skills"
                      style={{ height: "55px" }}
                      value={values.skills}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="skills"
                    />
                    <div>
                      <div className="container text-center">
                        <div className="row">
                          {coverage &&
                            skill.map((data, index) => {
                              return (
                                <div className="col ">
                                  <p class="area_des">{data}</p>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                    {errors.skills && touched.skills && (
                      <p className="err">{errors.skills}</p>
                    )}
                  </div>
                  <div className="col-2">
                    <button
                      type="button"
                      className="add_btn"
                      onClick={(e) => {
                        setCoverage(false);
                        const newIteam = [...skill, values.skills];
                        setSkill(newIteam);
                        setCoverage(true);
                      }}
                    >
                      <span>
                        <p style={{ color: "white", marginTop: "12px" }}>ADD</p>
                      </span>
                    </button>
                  </div>
                  {/* <div className="col-5" style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Languages"
                      style={{ height: "55px" }}
                      value={values.language}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="language"
                    />
                    <div>
                      <div className="container text-center">
                        <div className="row">
                          {coverage &&
                            language.map((data, index) => {
                              return (
                                <div className="col ">
                                  <p class="area_des">{data}</p>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1">
                    <button
                      type="button"
                      className="add_btn"
                      onClick={(e) => {
                        setCoverage(false);
                        const newIteam = [...language, values.language];
                        setLanguage(newIteam);
                        setCoverage(true);
                      }}
                    >
                      <span>
                        <p style={{ color: "white", marginTop: "12px" }}>ADD</p>
                      </span>
                    </button>
                  </div>
                  {errors.language && touched.language && (
                    <p className="err">{errors.language}</p>
                  )} */}
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                      style={{ background: "#888888", border: "none" }}
                    >
                      Add
                    </button>
                    {/* <p className="mt-4 text-center">
                      Already have an account?{" "}
                      <Link to="/movers-login" className="text_dec">
                        Login
                      </Link>
                    </p> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HrAddJobs
