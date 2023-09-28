import * as yup from 'yup';

const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// min 5 char, 1 uppercase, 1 lowercase, 1number, 1 symbol


export const AdminDesignation  = yup.object().shape({
    title: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    bp: yup.string().required("Required"),
    leaves: yup.number().min(12,"Phone number must be a 10 digit number").positive().integer().required("Required")   
})



export const employeeRegSchema  = yup.object().shape({
    name: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    gender: yup.string().required("Required"),
    contact: yup.number().min(1000000000,"Phone number must be minimum 10 digit number").max(9999999999, "Phone number must be a 10-digit number").required("Required"),
    age: yup.number().min(2).positive().integer().required("Required"),
    designationid: yup.string().required("Required"),
    dateofjoin: yup.date().required("Required"),
    password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
    city: yup.string().min(2,"Please enter a valid address").required("Required"),          
    district: yup.string().min(2,"Please enter a valid address").required("Required"),          
    pincode: yup.number().min(100000, "Pincode must be minimum 6-digit number").max(999999, "Pincode must be a 6-digit number").required("Required"),

})



export const applicantSchema  = yup.object().shape({
    name: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    gender: yup.string().required("Required"),
    contact: yup.number().min(1000000000,"Phone number must be minimum 10 digit number").max(9999999999, "Phone number must be a 10-digit number").required("Required"),
    age: yup.number().min(2).positive().integer().required("Required"),
    password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
    city: yup.string().min(2,"Enter your city name").required("Required"),          
    district: yup.string().min(2,"Enter your district name").required("Required"),          
    qualification: yup.string().min(2,"Please enter your qualification").required("Required"),          
    language: yup.string().min(2,"").required("Required"),          
    skills: yup.string().min(2,"Enter your skills").required("Required"),          
    pincode: yup.number().min(100000, "Pincode must be minimum 6-digit number").max(999999, "Pincode must be a 6-digit number").required("Required"),
    experience: yup.number().min(0,"Number of years").integer().required("Required"),        
})


export const forgotPasswordScheme  = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
})

export const addJobScheme  = yup.object().shape({
      title:yup.string().required("Required"),
      sal:yup.number().positive().integer().required("Required"),
      experience:yup.number().positive().integer().required("Required"),
      skills: yup.string().min(2,"Enter your skills").required("Required"),          
      qualification: yup.string().min(2,"Please enter your qualification").required("Required"),          
      description:yup.string().min(2,"Please enter a description").required("Required"),
      category:yup.string().min(2,"Please enter the category").required("Required")
})

// export const interviewSchema  = yup.object().shape({

// })




