import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/adminlogo.jpg";

function AdminNav() {
  return (
    <div>
      <nav class="navbar navbar-expand bg-dark navbar-dark sticky-top px-4 py-0" style={{height:'60px'}}>
        <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
          <h2 class="text-primary mb-0">
            <i class="fa fa-hashtag"></i>
          </h2>
        </a>
        <a href="#" class="sidebar-toggler flex-shrink-0">
          <i class="fa fa-bars"></i>
        </a>
        {/* <form class="d-none d-md-flex ms-4">
          <input
            class="form-control border-0"
            type="search"
            placeholder="Search"
          />
        </form> */}
        <div class="navbar-nav align-items-center ms-auto">
          <div class="nav-item dropdown">
            <Link to="/admin-dashboard" class="nav-link ">
              {/* <i class="fa fa-envelope me-lg-2"></i> */}
              <span class="d-none d-lg-inline-flex">Home</span>
            </Link>
          </div>
          <div class="nav-item dropdown">
            <Link to="/admin_view_applicant" class="nav-link ">
              <span class="d-none d-lg-inline-flex">Applicant</span>
            </Link>
          </div>
          <div class="nav-item dropdown">
            <Link to="/admin-view-designation" class="nav-link ">
              <span class="d-none d-lg-inline-flex">View Designation</span>
            </Link>
          </div>
          <div class="nav-item dropdown">
            <Link to="/admin-add-designation" class="nav-link ">
              <span class="d-none d-lg-inline-flex">Add Designation</span>
            </Link>
          </div>
          <div class="nav-item dropdown">
            <Link to="/admin-view-projects" class="nav-link ">
              <span class="d-none d-lg-inline-flex">View Projects</span>
            </Link>
          </div>
          <div class="nav-item dropdown">
            <Link class="nav-link ">
              <span onClick={()=>{localStorage.clear();window.location.reload(false)}} class="d-none d-lg-inline-flex">Logout</span>
            </Link>
          </div>
          <div class="nav-item dropdown">
            {/* <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i class="fa fa-envelope me-lg-2"></i>
              <span class="d-none d-lg-inline-flex">View</span>
            </a> */}
            <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              {/* <Link to="/admin_view_applicant" class="dropdown-item">
                <div class="d-flex align-items-center">
                  <div class="ms-2">
                    <h6 class="fw-normal mb-0">Applicant</h6>
                  </div>
                </div>
              </Link> */}
              {/* <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item">
                <div class="d-flex align-items-center">
                  <div class="ms-2">
                    <h6 class="fw-normal mb-0">Projects</h6>
                  </div>
                </div>
              </a> */}
              {/* <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item">
                <div class="d-flex align-items-center">
                  <div class="ms-2">
                    <h6 class="fw-normal mb-0">Payroll</h6>
                  </div>
                </div>
              </a> */}
              {/* <hr class="dropdown-divider" /> */}
              {/* <a href="#" class="dropdown-item">
                <div class="d-flex align-items-center">
                  <div class="ms-2">
                    <h6 class="fw-normal mb-0">Complaints</h6>
                  </div>
                </div>
              </a>
              <hr class="dropdown-divider" /> */}
            </div>
          </div>
          <div class="nav-item dropdown">
            {/* <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i class="fa fa-envelope me-lg-2"></i>
              <span class="d-none d-lg-inline-flex">Designation</span>
            </a> */}
            <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              {/* <Link to="/admin-view-designation" class="dropdown-item">
                <div class="d-flex align-items-center">
                  <div class="ms-2">
                    <h6 class="fw-normal mb-0">View Designation</h6>
                  </div>
                </div>
              </Link> */}
              {/* <hr class="dropdown-divider" />
              <Link to="/admin-add-designation" class="dropdown-item">
                <div class="d-flex align-items-center">
                  <div class="ms-2">
                    <h6 class="fw-normal mb-0">Add Designation</h6>
                  </div>
                </div>
              </Link>
              <hr class="dropdown-divider" /> */}
            </div>
          </div>
          {/* <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i class="fa fa-bell me-lg-2"></i>
              <span class="d-none d-lg-inline-flex">Edit</span>
            </a>
            <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              <a href="#" class="dropdown-item">
                <h6 class="fw-normal mb-0">HR team</h6>
              </a>
              <hr class="dropdown-divider" />

              <a href="#" class="dropdown-item">
                <h6 class="fw-normal mb-0">Vaccancies</h6>
              </a>
              <hr class="dropdown-divider" />
            </div>
          </div> */}
          {/* <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <img
                class="rounded-circle me-lg-2"
                src={logo}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <span class="d-none d-lg-inline-flex">Admin</span>
            </a>
            <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              
              <Link to="/" class="dropdown-item">
                Log Out
              </Link>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default AdminNav;
