import React, { useEffect, useState } from "react";
import PmNav from "./PmNav";
import axiosInstance from "./baseUrl";
import { Link, useParams } from "react-router-dom";

function PmViewSinglePrjct() {
  const { id } = useParams();
  console.log(id);
  const [project, setproject] = useState({ deadline: "",members:[] });
  const [members, setmembers] = useState([]);


  useEffect(() => {
    axiosInstance
      .post(`/viewProjById/${id}`)
      .then((response) => {
        console.log(response);
        setproject(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

 
  return (
    <div>
      <PmNav />
      <div class="container-fluid pt-4 px-4 p-5 mt-5">
        <div class="bg-light text-center rounded p-5">
          <div class="d-flex align-items-center justify-content-between mb-5">
            {/* <h6 class="mb-0">Employee Details</h6> */}
            {/* <a href="">Show All</a> */}
          </div>
          <div class="table">
            <table class="table text-start align-middle table-bordered table-hover mb-0">
              <thead>
                <tr class="text-dark">
                  <td scope="col">Project Name</td>
                  <td scope="col">{project.title}</td>
                </tr>
                <tr class="text-dark">
                  <td scope="col">Technology</td>
                  <td scope="col">{project.technology}</td>
                </tr>
                <tr class="text-dark">
                  <td scope="col">Deadline</td>
                  <td scope="col">{project.deadline.slice(0, 10)}</td>
                </tr>
                <tr class="text-dark">
                  <td scope="col">Members</td>
                  <td scope="col">
                    {project.members.length
                      ? project.members.map((a) => {
                          return <>{a.name+','} </>;
                        })
                      : ""}
                  </td>
                </tr>
                <tr class="text-dark">
                  <td scope="col">Percentage Complited</td>
                  <td scope="col">{project.percentage}%</td>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          
        </div>
        <div style={{padding:'48px'}} >
            <Link to={`/pm_edit_project/${id}`}><button class='btn btn-success' style={{marginRight:'5px'}} >Edit</button></Link>
          </div>
      </div>
    </div>
  );
}

export default PmViewSinglePrjct;
