import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import axiosInstance from "../baseUrl";

function ApplicantSignup() {
  const [skill, setSkill] = useState([]);
  const [language, setLanguage] = useState([]);
  const [coverage, setCoverage] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      values.skills = skill;
      values.language = language;
      axiosInstance
        .post("/registerApplicant", values)
        .then((res) => {
          if (res.data.status === 200) {
            toast.success("Registration Successful");
            navigate("/applicant-login");
          } else {
            setErrorMessage(res.data.msg);
            toast.error("Failed to Register");
          }
        })
        .catch((err) => {
          toast.error("Failed to Register");
        });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({
      ...values,
      [id]: value,
    });

    // Clear error message for the field if it has a value
    if (value.trim() !== "") {
      setErrors({
        ...errors,
        [id]: "",
      });
    }
  };

  const [values, setValues] = useState({
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
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validation for required fields
    const requiredFields = [
      "name",
      "email",
      "age",
      "contact",
      "gender",
      "experience",
      "qualification",
      "password",
      "district",
      "city",
      "skills",
      "language",
    ];
    requiredFields.forEach((field) => {
      if (!values[field]) {
        newErrors[field] = "Required*";
        isValid = false;
      } else {
        newErrors[field] = ""; // Clear the error message if field is not empty
      }
    });

    // Validation for specific formats
    if (values.contact && !/^\d{10}$/.test(values.contact)) {
      newErrors.contact = "Contact must be 10 numbers";
      isValid = false;
    }
    if (values.age && !/^\d{2}$/.test(values.age)) {
      newErrors.age = "Age must be 2 numbers";
      isValid = false;
    }

    if (
      values.password &&
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)
    ) {
      newErrors.password =
        "Password must be 6-16 characters, 1 uppercase, 1 number, 1 symbol";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid py-5">
        <div className="container" style={{ marginTop: "5rem" }}>
          <div className="section-header">
            <h2>Applicant Signup</h2>
          </div>
          <div className="row gx-5">
            <div className="col-lg-12" style={{ paddingTop: "2rem" }}>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Name"
                      style={{ height: "55px" }}
                      value={values.name}
                      onChange={handleChange}
                      id="name"
                    />
                    {errors.name && <p className="err">{errors.name}</p>}
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      className="form-control bg-light border-0 px-4"
                      placeholder="E-mail"
                      style={{ height: "55px" }}
                      value={values.email}
                      onChange={handleChange}
                      id="email"
                    />
                    {errors.email && <p className="err">{errors.email}</p>}
                  </div>
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Age"
                      style={{ height: "55px" }}
                      value={values.age}
                      onChange={handleChange}
                      id="age"
                    />
                    {errors.age && <p className="err">{errors.age}</p>}
                  </div>
                  <div className="col-6"
                    >
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Phonenumber"
                      style={{ height: "55px" }}
                      value={values.contact}
                      onChange={handleChange}
                      id="contact"
                    />
                    {errors.contact && <p className="err">{errors.contact}</p>}
                  </div>
                  <div className="col-6">
                    <select
                      className="form-control bg-light border-0 px-4"
                      style={{ height: "55px" }}
                      value={values.gender}
                      onChange={handleChange}
                      id="gender"
                    >
                      <option>Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && <p className="err">{errors.gender}</p>}
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Qualification"
                      style={{ height: "55px" }}
                      value={values.qualification}
                      onChange={handleChange}
                      id="qualification"
                    />
                    {errors.qualification && (
                      <p className="err">{errors.qualification}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Experience"
                      style={{ height: "55px" }}
                      value={values.experience}
                      onChange={handleChange}
                      id="experience"
                    />
                    {errors.experience && (
                      <p className="err">{errors.experience}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="password"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Password"
                      style={{ height: "55px" }}
                      value={values.password}
                      onChange={handleChange}
                      id="password"
                    />
                    {errors.password && (
                      <p className="err">{errors.password}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="District"
                      style={{ height: "55px" }}
                      value={values.district}
                      onChange={handleChange}
                      id="district"
                    />
                    {errors.district && (
                      <p className="err">{errors.district}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="City"
                      style={{ height: "55px" }}
                      value={values.city}
                      onChange={handleChange}
                      id="city"
                    />
                    {errors.city && <p className="err">{errors.city}</p>}
                  </div>

                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Skills"
                      style={{ height: "55px" }}
                      value={values.skills}
                      onChange={handleChange}
                      id="skills"
                    />
                    <div>
                      <div className="container text-center">
                        <div className="row">
                          {coverage &&
                            skill.map((data, index) => {
                              return (
                                <div className="col" key={index}>
                                  <p className="area_des">{data}</p>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                    {errors.skills && <p className="err">{errors.skills}</p>}
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
                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Languages"
                      style={{ height: "55px" }}
                      value={values.language}
                      onChange={handleChange}
                      id="language"
                    />
                    <div>
                      <div className="container text-center">
                        <div className="row">
                          {coverage &&
                            language.map((data, index) => {
                              return (
                                <div className="col" key={index}>
                                  <p className="area_des">{data}</p>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                    {errors.language && (
                      <p className="err">{errors.language}</p>
                    )}
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
                      <Link to="/applicant-login" className="text_dec">
                        Login
                      </Link>
                    </p>
                  </div>
                  {errorMessage && (
                    <div className="col-12 text-center">
                      <p className="err">{errorMessage}</p>
                    </div>
                  )}
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
