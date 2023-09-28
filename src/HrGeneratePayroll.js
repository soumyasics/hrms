import React, { useEffect, useState } from 'react'
import HrNav from './HrNav'
import { useParams } from 'react-router-dom';
import axiosInstance from './baseUrl';
import { toast } from 'react-toastify';

function HrGeneratePayroll() {
    const empid=useParams();
    const [payroll, setsetpayroll] = useState({incentive:'',comments:'',});
    const [leaves,setLeaves]=useState([])

    const onSubmit=(e)=>{
        e.preventDefault();
        axiosInstance.post(`/generatPayroll/${empid.id}`,payroll)
        .then((response)=>{
            console.log(response);
            if(response.data.status==200){
                toast.success('Added Sussessfully')
            }
            // localStorage.setItem('jobapplcnt',response.data.data.aid._id)
            // setArray(response.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
        // console.log(interview);
    }

    useEffect(() => {
      axiosInstance
        .post(`/viewLeavesByEmpid/${empid.id}`)
        .then((response) => {
          console.log(response);
          setLeaves(response.data.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

  return (
    <div>
      <HrNav/>
      <div className="container-fluid py-5">
        <div className="container" style={{ marginTop: "5rem" }}>
          <div class="section-header">
            <h2>Add salary</h2>
          </div>
          <div className="row gx-5">

          <div className="col-lg-6" style={{ paddingTop: "2rem" }}>
            <ul class="list-group">
              <h6>Leaves</h6>
              {
                leaves.length?leaves.map((a)=>{
                  return(
                    <li class="list-group-item">From : {a.from.slice(0,10)} - To : {a.to.slice(0,10)}</li>

                  )
                }):<li class="list-group-item">No leaves taken</li>

              }
             
            </ul>
          </div>

            <div className="col-lg-6" style={{ paddingTop: "2rem" }}>
              <form onSubmit={onSubmit} >
                <div className="row g-3">
                  <div className="col-6">
                    <label>Incentive </label>
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Amount"
                      style={{ height: "55px" }}
                      onChange={(e)=>{setsetpayroll({...payroll,incentive:e.target.value})}}
                      required
                    />
                    
                  </div>
                 
                  <div className="col-6">
                    <label>Comments </label>
                    <textarea
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Comments"
                      style={{ height: "75px" }}
                      onChange={(e)=>{setsetpayroll({...payroll,comments:e.target.value})}}
                        
                    />
                    
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                      style={{ background: "#888888", border: "none" }}
                    >
                      Add
                    </button>
                   
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HrGeneratePayroll
