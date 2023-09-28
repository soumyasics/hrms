import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { applicantSchema } from "../Schemas/Schemas";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import axiosInstance from "../baseUrl";

function ApplicantSignup() {
  const [skill, setSkill] = useState([]);
  const [language, setLanguage] = useState([]);
  const [coverage, setCoverage] = useState(false);
  const [er, setEr] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    values.skills = skill;
    values.language = language;
    console.log('iii',values);

    axiosInstance.post("/registerApplicant",values)  
      .then((res) => {
        console.log("woking", res);
        console.log(res.data.status); 
        if (res.data.status == 200) {
          // alert("Registration Successful")
          toast.success("Registration Successful");
          navigate("/applicant-login");
        } else {
          setEr(res.data.msg);
          toast.error("Failed to Register");

        }
      })
      .catch((err) => {
        toast.error("Failed to Register");
        // serEr(err.msg)
      });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        age: "",
        contact: "",
        gender: "",
        experience: "",
        qualification: "",
        password: "",
        district: "",
        city: "",
        skills: "",
        language: "",
      },
      validationSchema: applicantSchema,
      onSubmit,
    });

    useEffect(()=>{
      console.log('',values);
})

  return (
    <div>
      <Navbar />
      <div className="container-fluid py-5">
        <div className="container" style={{ marginTop: "5rem" }}>
          <div class="section-header">
            <h2>Applicant Signup</h2>
          </div>
          <div className="row gx-5">
            <div className="col-lg-12" style={{ paddingTop: "2rem" }}>
              <form onSubmit={onSubmit}>
                <div className="row g-3">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Name"
                      style={{ height: "55px" }}
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="name"
                    />
                    {errors.name && touched.name && (
                      <p className="err">{errors.name}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      className="form-control bg-light border-0 px-4"
                      placeholder="E-mail"
                      style={{ height: "55px" }}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="email"
                    />
                    {errors.email && touched.email && (
                      <p className="err">{errors.email}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Age"
                      style={{ height: "55px" }}
                      value={values.age}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="age"
                    />
                    {errors.age && touched.age && (
                      <p className="err">{errors.age}</p>
                    )}
                  </div>
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Phonenumber"
                      style={{ height: "55px" }}
                      value={values.contact}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="contact"
                    />  
                    {errors.contact && touched.contact && (
                      <p className="err">{errors.contact}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <select
                      className="form-control bg-light border-0 px-4"
                      style={{ height: "55px" }}
                      name="gender"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && touched.gender && (
                      <p className="err">{errors.gender}</p>
                    )}
                  </div>
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
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
                  </div>
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
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
                      type="password"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Password"
                      style={{ height: "55px" }}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="password"
                    />
                    {errors.password && touched.password && (
                      <p className="err">{errors.password}</p>
                    )}
                  </div>
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="District"
                      style={{ height: "55px" }}
                      value={values.district}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="district"
                    />
                    {errors.district && touched.district && (
                      <p className="err">{errors.district}</p>
                    )}
                  </div>
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="City"
                      style={{ height: "55px" }}
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="city"
                    />
                    {errors.city && touched.city && (
                      <p className="err">{errors.city}</p>
                    )}
                  </div>

                  <div className="col-5" style={{ marginBottom: "1rem" }}>
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
                  <div className="col-1">
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
                  <div className="col-5" style={{ marginBottom: "1rem" }}>
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
                  )}
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                      style={{ background: "#888888", border: "none" }}
                    >
                      Sign Up
                    </button>
                    <p className="mt-4 text-center">
                      Already have an account?{" "}
                      <Link to="/movers-login" className="text_dec">
                        Login
                      </Link>
                    </p>
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

export default ApplicantSignup;
