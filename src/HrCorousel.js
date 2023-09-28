import React from 'react'

function HrCorousel() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header2">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              {/* <h1 className="display-1 text-uppercase mb-lg-4" style={{color:'white'}}>
                HRMS
              </h1> */}
              <h1 className="text-uppercase text-white mb-lg-4 mt-5">
              Deliver exceptional employee experiences
              </h1>
              <p className="fs-4 text-white mb-lg-4">
              Automate HR processes with customisable software that works for you. Connect people, tools, and data from onboarding to offboarding, and everything in between.              </p>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                {/* <a
                  to="/about"
                  className="btn btn-outline-light border-2 py-md-3 px-md-5 me-5"
                >
                  Read More
                </a> */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HrCorousel
