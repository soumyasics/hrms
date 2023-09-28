import React, { useEffect, useState } from "react";
import EmployeeNav from "./EmployeeNav/EmployeeNav";
import axiosInstance from "./baseUrl";

function EmpViewComplaintStatus() {
  const [array, setArray] = useState([]);
  const id = localStorage.getItem("empId");
  console.log(id);

  useEffect(() => {
    axiosInstance
      .post(`/viewComplaintStatus/${id}`)
      .then((response) => {
        console.log(response);

        setArray(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <EmployeeNav />
      <div class="pricing mt-100">
        <div class="container">
          <div class="section-header">
            <h2>Projects</h2>
          </div>
          <div class="row">
            {array.length ? (
              array.map((a) => {
                return (
                  <div class="col-md-12">
                    <div class="price-content">
                      <ul class="list-group">
                        <li class="list-group-item">Complaints : {a.complaint}</li>
                        <li class="list-group-item">Status : {a.status}</li>
                        
                      </ul>
                      {/* <Link to={`/emp_updatepercentage/${a._id}`} class="btn btn-danger mian-btn price-btn" >Update percentage</Link> */}
                      {/* <Link onClick={() => handleRemove(a._id)} class="btn btn-danger mian-btn price-btn" style={{background:'#dc3545'}} >Delete</Link> */}
                    </div>
                  </div>
                );
              })
            ) : (
              <h1 style={{ textAlign: "center", padding: "25px" }}>
                No Complaint found
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpViewComplaintStatus;
