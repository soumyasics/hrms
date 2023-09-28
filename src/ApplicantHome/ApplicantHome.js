import React from "react";
import ApplicantNav from "../ApplicantNav/ApplicantNav";
import Corousal from "../Corousel/Corousal";
import About from "../About/About";
import ApplicantCorousel from "../ApplicantCorousel";

function ApplicantHome() {
  return (
    <div>
    <ApplicantNav/>
    <ApplicantCorousel/>
      <About/>
      {/* <div class="container-xxl py-5" style={{marginTop:'6rem'}} >
        <div class="container">
          
          <div class="section-header">
                    <h2>Applicant Login</h2>
                   
                </div>
          <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
           
            <div class="tab-content">
              <div id="tab-1" class="tab-pane fade show p-0 active">
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      
                      <div class="text-start ps-4">
                        <h5 class="mb-3">Software Engineer</h5>
                        <span class="text-truncate me-3">
                          <i class="fa fa-map-marker-alt text-primary me-2"></i>
                          New York, USA
                        </span>
                        <span class="text-truncate me-3">
                          <i class="far fa-clock text-primary me-2"></i>Full
                          Time
                        </span>
                        <span class="text-truncate me-0">
                          <i class="far fa-money-bill-alt text-primary me-2"></i>
                          $123 - $456
                        </span>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-primary" href="">
                          Apply Now
                        </a>
                      </div>
                      <small class="text-truncate">
                        <i class="far fa-calendar-alt text-primary me-2"></i>
                        Date Line: 01 Jan, 2045
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <a class="btn btn-primary py-3 px-5" href="">
                Browse More Jobs
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ApplicantHome;
