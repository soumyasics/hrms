import React, { useEffect, useState } from 'react'
import EmployeeNav from './EmployeeNav/EmployeeNav'
import axiosInstance from './baseUrl';
import { Link } from 'react-router-dom';

function EmployeeProject() {

    const [value, setvalue] = useState([]);

    const id=localStorage.getItem('empId')

    useEffect(() => {
        axiosInstance
          .post(`/viewProjByEmpId/${id}`)
          .then((response) => {
            console.log(response);
            setvalue(response.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

  return (
    <div>
      <EmployeeNav/>
      <div class="pricing mt-100">
            <div class="container">
                <div class="section-header">
                    <h2>Projects</h2>
                    
                </div>
                <div class="row">
                    {
                        value?value.map((a)=>{
                            return(
                               <div class="col-md-4">
                        <div class="price-content">
                            <ul class="price-details pt-5 pb-3">
                                <li><h1>{a.title}</h1> </li>
                                <li>{a.technology}</li>
                                <li>{a.deadline}</li>
                                <li><b>{a.percentage}% </b>Completed</li>
                                
                            </ul>
                            <Link to={`/emp_updatepercentage/${a._id}`} class="btn btn-danger mian-btn price-btn" >Update percentage</Link>
                            {/* <Link onClick={() => handleRemove(a._id)} class="btn btn-danger mian-btn price-btn" style={{background:'#dc3545'}} >Delete</Link> */}
                        </div>
                    </div> 
                            )
                        }):<h1 style={{textAlign:'center',padding:'25px'}} >No Projects found</h1>
                    }
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeProject
