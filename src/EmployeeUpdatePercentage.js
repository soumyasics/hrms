import React, { useState } from 'react'
import EmployeeNav from './EmployeeNav/EmployeeNav'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from './baseUrl';
import { toast } from 'react-toastify';

function EmployeeUpdatePercentage() {

    const navigate=useNavigate();

    const {id}=useParams();
    const [value, setvalue] = useState({
        percentage: "",
        
      });

      const onSubmit = (e) => {
        e.preventDefault();
    
        console.log(value);
        axiosInstance
          .post(`/updatePercentage/${id}`,value)
          .then((response) => {
            console.log(response);
            if (response.data.status == 200) {
              toast.success("Applied");
              navigate('/employee-projects')
            }else if(response.data.status==500){
              toast.warning(response.data.msg)
            }
           
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <div>
      <EmployeeNav/>
      <div class="contact mt-100">
        <div class="container">
          <div class="section-header">
            <h2>update percentage</h2>
          </div>
          <form className="form" onSubmit={onSubmit}>
            <div class="row ">
              <div class="col-3">
                <label>Percentage</label>
              </div>

              <div class="col-9 mb-2">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter the percentage value"
                  onChange={(e) => {
                    setvalue({ ...value, percentage: e.target.value });
                  }}
                  required
                />
              </div>
            </div>
           
            <div class="row ">
              <div class="col-3"></div>
              <div class="col-9 mb-2">
                <div>
                  <button
                    class="btn"
                    type="submit"
                    style={{ position: "relative", float: "right" }}
                  >
                    Add
                  </button>
                </div>{" "}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmployeeUpdatePercentage
