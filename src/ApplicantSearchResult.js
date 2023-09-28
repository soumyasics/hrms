import React, { useState } from "react";
import ApplicantNav from "./ApplicantNav/ApplicantNav";
import axiosInstance from "./baseUrl";
import { toast } from "react-toastify";

function ApplicantSearchResult() {
  const [cat, setCategory] = useState("");
  const [data, setdata] = useState([]);

  const aid = localStorage.getItem("applicantId");

  const searchfn = (e) => {
    e.preventDefault();
    const category = cat;
    console.log(category);

    axiosInstance
      .post(`/viewJobByCat/${category}`)
      .then((response) => {
        console.log(response);
        setdata(response.data.data);

        if (response.data.data.length == 0) {
          toast.warning("No category found");
        }
      })
      .catch((err) => {
        console.log("error", err);
        toast.error("Please enter the category");
      });
  };

  const handleRemove = (id) => {
    axiosInstance
      .post(`/applyJob`, { aid: aid, jid: id })
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Applied");
          // setArray(prevArray => prevArray.filter(item => item._id !== id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <ApplicantNav />
      <div class="container-xxl py-5" style={{ marginTop: "6rem" }}>
        <div class="container">
          <div class="section-header">
            <h2>Search job by category</h2>
          </div>
          <form onSubmit={searchfn} style={{ marginBottom: "3rem" }}>
            <div className="row g-3">
              <div className="col-11">
                <input
                  className="form-control bg-light border-0 px-4"
                  style={{ height: "55px" }}
                  type="text"
                  placeholder="search by category"
                  name="category"
                  value={cat}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
              </div>
              <div className="col-1">
                <button type="submit" class="btn btn-secondary">
                  Search
                </button>
              </div>
            </div>
            {/* <input type="text" placeholder='search by category' name="category" value={cat} onChange={(e)=>{setCategory(e.target.value)}}/><kbdink to={{pathname:'/applicant_search_view',state:{data: data}}} ></kbdink> */}
          </form>
          <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
            <div class="tab-content">
              <div id="tab-1" class="tab-pane fade show p-0 active">
                {/* <div class="job-item p-4 mb-4"> */}
                <div class="job-item row g-4 p-4 mb-4">
                  {data?data.map((a) => {
                    return (
                      <>
                        <div class="col-sm-12 col-md-8  align-items-center">
                          <div class="text-start ps-4">
                            <h5 class="mb-3">{a.title}</h5>
                            <span class="text-truncate me-3">
                              <i class="fa fa-map-marker-alt text-primary me-2"></i>
                              {a.category}
                            </span>
                            <span class="text-truncate me-3">
                              <i class="far fa-clock text-primary me-2"></i>
                              {a.experience} year experience
                            </span>
                            <span class="text-truncate me-0">
                              <i class="far fa-money-bill-alt text-primary me-2"></i>
                              Salary ₹{a.sal}
                            </span>
                          </div>
                          <div class="text-start ps-4">
                            <span class="text-truncate me-3">
                              <i class="fa fa-map-marker-alt text-primary me-2"></i>
                              Qualification : {a.qualification + " "}
                            </span>
                            <p class="text-truncate me-3">
                              <i class="far fa-clock text-primary me-2"></i>
                              Skills : {a.skills + " "}
                            </p>
                            <p class="text-truncate me-3">
                              <i class="far fa-clock text-primary me-2"></i>
                              {a.description}
                            </p>
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                          <div class="d-flex mb-3">
                            <button
                              class="btn btn-sm btn-primary"
                              onClick={() => handleRemove(a._id)}
                            >
                              Apply Now
                            </button>
                          </div>
                          <small class="text-truncate">
                            <i class="far fa-calendar-alt text-primary me-2"></i>
                            Posted on {a.date.slice(0, 10)}
                          </small>
                        </div>
                      </>
                    );
                  }):<h1> No category found</h1>
                }

                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicantSearchResult;
