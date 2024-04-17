import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { toast } from "react-toastify";
import axiosInstance from "../baseUrl";

function EmpSignUp() {
  const [array, setArray] = useState([]);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.post("/viewAllDesginayions").then((res) => {
      setArray(res.data.data);
    });
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
  
    // Validation for required fields
    const requiredFields = [
      "name",
      "age",
      "city",
      "pincode",
      "district",
      "contact",
      "email",
      "password",
      "gender",
      "dateofjoin",
      "designation",
    ];
    requiredFields.forEach((field) => {
      if (!values[field]) {
        newErrors[field] = "This field is required";
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
    if (values.pincode && !/^\d{6}$/.test(values.pincode)) {
      newErrors.pincode = "Pincode must be 6 numbers";
      isValid = false;
    }
  
    // Password rule validation
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
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axiosInstance
        .post("/registerEmployee", values)
        .then((res) => {
          if (res.data.status === 200) {
            toast.success("Registration Successful");
            navigate("/login");
          } else {
            setErrorMessage(res.data.msg);
            toast.error("Registration Failed");
          }
        })
        .catch((err) => {
          console.error("Error:", err);
          toast.error("Registration Failed");
        });
    }
  };

  // const handleChange = (e) => {
  //   setValues({
  //     ...values,
  //     [e.target.id]: e.target.value,
  //   });
  // };

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
    age: "",
    city: "",
    pincode: "",
    district: "",
    contact: "",
    email: "",
    password: "",
    gender: "",
    dateofjoin: "",
    designation: "",
  });

  return (
    <div>
      <Navbar />
      <div className="container-fluid py-5" style={{ marginTop: "10rem" }}>
        <div className="container">
          <div className="section-header">
            <h2>Employee Signup</h2>
          </div>
          <div className="row gx-5">
            <div className="col-lg-12" style={{ paddingTop: "2rem" }}>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Name"
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
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                      value={values.email}
                      onChange={handleChange}
                      id="email"
                    />
                    {errors.email && <p className="err">{errors.email}</p>}
                  </div>

                  <div className="col-6">
                    <select
                      className="form-control bg-light border-0 px-4"
                      style={{ height: "55px" }}
                      value={values.gender}
                      onChange={handleChange}
                      id="gender"
                    >
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && <p className="err">{errors.gender}</p>}
                  </div>

                  <div className="col-6">
                    <input
                      type="text"
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

                  <div className="col-6">
                    <select
                      className="form-control bg-light border-0 px-4"
                      style={{ height: "55px" }}
                      value={values.designation}
                      onChange={handleChange}
                      id="designation"
                    >
                      <option value="">Designation</option>
                      {array.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                    {errors.designation && <p className="err">{errors.designation}</p>}
                  </div>

                  <div className="col-6">
                    <h6 className="mt-3">Date Of Join : </h6>
                  </div>
                  <div className="col-6">
                    <input
                      type="date"
                      className="form-control bg-light border-0 px-4"
                      style={{ height: "55px" }}
                      value={values.dateofjoin}
                      onChange={handleChange}
                      id="dateofjoin"
                    />
                    {errors.dateofjoin && <p className="err">{errors.dateofjoin}</p>}
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
                    {errors.password && <p className="err">{errors.password}</p>}
                  </div>

                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4 py-3"
                      placeholder="City"
                      style={{ height: "55px" }}
                      value={values.city}
                      onChange={handleChange}
                      id="city"
                    />
                    {errors.city && <p className="err">{errors.city}</p>}
                  </div>

                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4 py-3"
                      placeholder="District"
                      style={{ height: "55px" }}
                      value={values.district}
                      onChange={handleChange}
                      id="district"
                    />
                    {errors.district && <p className="err">{errors.district}</p>}
                  </div>

                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4 py-3"
                      placeholder="Pincode"
                      style={{ height: "55px" }}
                      value={values.pincode}
                      onChange={handleChange}
                      id="pincode"
                    />
                    {errors.pincode && <p className="err">{errors.pincode}</p>}
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3 "
                      type="submit"
                      style={{ background: "#888888", border: "none" }}
                    >
                      Sign Up
                    </button>
                    <p className="err" style={{ textAlign: "center", marginTop: "1rem" }}>
                      {errorMessage}
                    </p>
                    <p className="mt-4 text-center">
                      Already have an account?{" "}
                      <Link to="/login" className="text_dec" style={{ color: "#888888" }}>
                        Login
                      </Link>{" "}
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

export default EmpSignUp;





// import axios from "axios";
// import { useFormik } from "formik";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import { employeeRegSchema } from "../Schemas/Schemas";
// import { toast } from "react-toastify";
// import axiosInstance from "../baseUrl";

// function EmpSignUp() {

// const [array,setArray] = useState ([])
// const [er,setEr] = useState ('')

// const navigate= useNavigate();

// useEffect(()=>{
//   axiosInstance.post('/viewAllDesginayions')
//   .then((res)=>{
//     console.log(res.data.data);
//     setArray(res.data.data)
//     console.log(array);
//   })

// },[])

//   const onSubmit = (e) =>{
//   e.preventDefault();
//   console.log('Form submitted!');
//   console.log('Form values:', values);
//     axiosInstance.post('/registerEmployee',values)
//     .then((res)=>{
//       console.log('woking',res);
//       console.log(res.data);
      

//       if (res.data.status==200) {
//         toast.success("Registration Successful")
//         navigate('/login')
//       }else{
//         setEr(res.data.msg);
//         toast.error("Registration Failed")

//       }
//     })
//     .catch((err)=>{
//       console.log('error',err);
//       toast.error("Registration Failed")

//     })
//   }

//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//         initialValues: {
//             name: "",
//             age: "",
//             city: "",
//             pincode: "",
//             district: "",
//             contact: "",
//             email: "",
//             password: "",
//             gender: "",
//             dateofjoin: "",
//             designation: "",
            
//           },
//           validationSchema: employeeRegSchema,
//           onSubmit,
          
//     })

//   return (
//     <div>
//       <Navbar />
      
//       <div className="container-fluid py-5" style={{marginTop:'10rem'}}>
//         <div className="container">
//         <div class="section-header">
//                     <h2>Employee Signup</h2>    
//           </div>
//           <div className="row gx-5">
            
//             <div className="col-lg-12" style={{ paddingTop: "2rem" }}>
//               <form onSubmit={handleSubmit} >
//                 <div className="row g-3">
//                   <div className="col-6">
//                     <input
//                       type="text"
//                       className="form-control bg-light border-0 px-4"
//                       placeholder="Your Name"
//                       style={{ height: "55px" }}
//                       value={values.name} onChange={handleChange} onBlur={handleBlur} id='name'
//                     />
//                     {errors.name && touched.name && (<span className="err">{errors.name}</span>)}

//                   </div>

//                   <div className="col-6" >
//                     <input
//                       type="email"
//                       className="form-control bg-light border-0 px-4"
//                       placeholder="Your Email"
//                       style={{ height: "55px" }}
//                       value={values.email} onChange={handleChange} onBlur={handleBlur} id='email'
//                     />
//                     {errors.email && touched.email && (<p className="err">{errors.email}</p>)}

//                   </div>

//                   <div className="col-6" >
//                     <select
//                       className="form-control bg-light border-0 px-4"
//                       style={{ height: "55px" }}
//                       name='gender' onChange={handleChange} onBlur={handleBlur}
//                     >
//                       <option>Gender</option>
//                       <option value="male">Male</option>
//                       <option value="female">Female</option>
//                     </select>
//                     {errors.gender && touched.gender && (<p className="err">{errors.gender}</p>)}

//                   </div>

//                   <div className="col-6" >
//                     <input
//                       type="number"
//                       className="form-control bg-light border-0 px-4"
//                       placeholder="Phonenumber"
//                       style={{ height: "55px" }}
//                       value={values.contact} onChange={handleChange} onBlur={handleBlur} id='contact'
//                     />
//                                       {errors.contact && touched.contact && (<p className="err">{errors.contact}</p>)}

//                   </div>

//                   <div className="col-6" >
//                     <input
//                       type="number"
//                       className="form-control bg-light border-0 px-4"
//                       placeholder="Age"
//                       style={{ height: "55px" }}
//                       value={values.age} onChange={handleChange} onBlur={handleBlur} id='age'
//                     />
//                                       {errors.age && touched.age && (<p className="err">{errors.age}</p>)}

//                   </div>

//                   <div className="col-6" >
//                     <select
//                       className="form-control bg-light border-0 px-4"
//                       style={{ height: "55px" }}
//                       name='designation' onChange={handleChange} onBlur={handleBlur}
//                     >
//                       <option>Designation</option>
//                       {
//                         array.map((a)=>{
//                           return(
//                             <option value={a}>{a}</option>
//                           )
//                         })
//                       }
//                       </select>
//                       {errors.designation && touched.designation && (<p className="err">{errors.designation}</p>)}

//                   </div>

//                   <div className="col-6">
//                     <h6 className="mt-3" >Date Of Join : </h6>
//                   </div>
//                   <div className="col-6" >
//                     <input
//                       type="date"
//                       className="form-control bg-light border-0 px-4"
                      
//                       style={{ height: "55px" }}
//                       value={values.dateofjoin} onChange={handleChange} onBlur={handleBlur} id='dateofjoin'
//                     />
//                     {errors.dateofjoin && touched.dateofjoin && (<p className="err">{errors.dateofjoin}</p>)}

//                   </div>

//                   <div className="col-6" >
//                     <input
//                       type="password"
//                       className="form-control bg-light border-0 px-4"
//                       placeholder="Password"
//                       style={{ height: "55px" }}
//                       value={values.password} onChange={handleChange} onBlur={handleBlur} id='password'
//                     />
//                                       {errors.password && touched.password && (<p className="err">{errors.password}</p>)}

//                   </div>

//                   <div className="col-6">
//                     <input
//                       type="text"
//                       className="form-control bg-light border-0 px-4 py-3"
//                       placeholder="City"
//                       style={{ height: "55px" }}
//                       value={values.city} onChange={handleChange} onBlur={handleBlur} id='city'
//                     />
//                                       {errors.city && touched.city && (<p className="err">{errors.city}</p>)}

//                   </div>

//                   <div className="col-6">
//                     <input
//                       type="text"
//                       className="form-control bg-light border-0 px-4 py-3"
//                       placeholder="District"
//                       style={{ height: "55px" }}
//                       value={values.district} onChange={handleChange} onBlur={handleBlur} id='district'
//                     />
//                      {errors.district && touched.district && (<p className="err">{errors.district}</p>)}

//                   </div>

//                   <div className="col-6">
//                     <input
//                       type="number"
//                       className="form-control bg-light border-0 px-4 py-3"
//                       placeholder="Pincode"
//                       style={{ height: "55px" }}
//                       value={values.pincode} onChange={handleChange} onBlur={handleBlur} id='pincode'
                      
//                     />
//                                       {errors.pincode && touched.pincode && (<p className="err">{errors.pincode}</p>)}

//                   </div>

//                   <div className="col-12">
//                     <button
//                       className="btn btn-primary w-100 py-3 "
//                       type="submit"
//                       style={{background:'#888888',border:'none'}}
//                       // onClick={onSubmit}
//                     >
//                       Sign Up
//                     </button>
//                     <p className="err" style={{textAlign:'center',marginTop:'1rem'}} >{er}</p>
//                     <p className="mt-4 text-center">
//                       Already have an account?{" "}
//                       <Link to="/login" className="text_dec" style={{color:'#888888'}}>
//                         Login
//                       </Link>{" "}
//                     </p>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EmpSignUp;
