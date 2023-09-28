import React, { useState } from "react";
import EmployeeNav from "./EmployeeNav/EmployeeNav";
import axiosInstance from "./baseUrl";
import { toast } from "react-toastify";

function EmplyeePayRoll() {
  const [month, setCategory] = useState({
    month: 0,
  });
  const [data, setdata] = useState([]);

  const empid = localStorage.getItem("empId");

  const searchfn = (e) => {
    e.preventDefault();

    console.log(month);
    console.log(empid);

    axiosInstance
      .post(`/viewPayrollByEmpId/${empid}`, month)
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          setdata(response.data.data);
        } else if (response.data.status == 500) {
          toast.warning(response.data.msg);
        }
      })
      .catch((err) => {
        console.log("error", err);
        toast.error("");
      });
  };

  return (
    <div>
      <EmployeeNav />
      <div class="container-xxl py-5" style={{ marginTop: "6rem" }}>
        <div class="container">
          <div class="section-header">
            <h2>Payroll</h2>
          </div>
          <form onSubmit={searchfn} style={{ marginBottom: "3rem" }}>
            <div className="row g-3">
              <div className="col-5">
                <input
                  className="form-control bg-light border-0 px-4"
                  style={{ height: "55px" }}
                  type="number"
                  placeholder="Enter the month number"
                  name="category"
                  onChange={(e) => {
                    setCategory({ ...month, month: e.target.value });
                  }}
                />
              </div>
              <div className="col-1">
                <button type="submit" class="btn btn-secondary">
                  Search
                </button>
              </div>
            </div>
            {/* <input type="text" placeholder='search by category' name="category" value={cat} onChange={(e)=>{setCategory(e.target.value)}}/><kbdink to={{pathname:'/applicant_search_view',state:{data: data}}} ></kbdink>  */}
          </form>
          {data._id!=undefined?<div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
            <div class="tab-content">
              <div id="tab-1" class="tab-pane fade show p-0 active">
                <div class="job-item row g-4 p-4 mb-4">
                  <div>
                    <div class="col-sm-12 col-md-8  align-items-center">
                      <div class="text-start ps-4">
                        <h5 class="mb-3">
                          {data.empid ? data.empid.name : ""}
                        </h5>
                        {/* <span class="text-truncate me-3">
                              <i class="fa fa-map-marker-alt text-primary me-2"></i>
                              {a.category}
                            </span> */}
                        <p class="text-truncate me-3">
                          <i class="far fa-clock text-primary me-2"></i>
                          {data.lop != undefined
                            ? `Loss of Pay :  ₹${data.lop}`
                            : null}
                        </p>
                      </div>
                      <div class="text-start ps-4">
                        <p class="text-truncate me-3">
                          <i class="far fa-money-bill-alt text-primary me-2"></i>
                         
                            {data.leave != undefined
                              ? `Leaves Taken : ${data.leave} days`
                              : null}{" "}
                          
                        </p>
                        <p class="text-truncate me-3">
                          <i class="far fa-money-bill-alt text-primary me-2"></i>
                         
                            {data.incentive != undefined
                              ? `Incentive : ₹${data.incentive}`
                              : null}{" "}
                          
                        </p>
                        
                        {/* <div class="text-start ps-4">
                          <p class="text-truncate">
                            <i class="fa fa-map-marker-alt text-primary me-2"></i>
                            
                              {data.incentive!=undefined
                                ? `Incentive : ${data.incentive}`
                                : null}
                            
                          </p>
                        </div> */}
                        <p class="text-truncate me-3">
                          <i class="far fa-clock text-primary me-2"></i>
                          {data.sal ? `Salary : ₹${data.sal}` : ""}
                        </p>
                        {/* <p class="text-truncate me-3">
                              <i class="far fa-clock text-primary me-2"></i>
                              Salary : {data.sal}
                            </p> */}
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                    <div class="d-flex mb-3">
                      {/* <button
                              class="btn btn-sm btn-primary"
                              onClick={() => handleRemove(a._id)}
                            >
                              Apply Now
                            </button> */}
                    </div>
                    {/* <small class="text-truncate">
                            <i class="far fa-calendar-alt text-primary me-2"></i>
                            Posted on {a.date.slice(0, 10)}
                          </small> */}
                  </div>
                </div>
              </div>
            </div>
          </div>:null}
        </div>
      </div>
    </div>
  );
}

export default EmplyeePayRoll;
