import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../baseUrl';
import { toast } from 'react-toastify';
import AdminNav from '../AdminNav/AdminNav';

function AdminEditDesig() {

    const [value,setValue] = useState({});
    const id=useParams();
    const navigate=useNavigate();

    useEffect(() => {
      if(localStorage.getItem('adminlog')==null){
        navigate('/')
      }
    });
    
  
    useEffect(() => {
  
  
      axiosInstance.post(`/viewDesignationById/${id.id}`)
      .then((res)=>{
      // console.log(res.data.daa);
      setValue(res.data.daa)
      
    })
    }, []);
  
    const updatefcn=(e)=>{
      e.preventDefault();
  
      axiosInstance.post(`/editDesignationById/${id.id}`,value)
      .then((response)=>{
        console.log(response);
        console.log(value);

        if (response.data.status==200) {
          toast.success('Designation Updated')
          navigate('/admin-view-designation')
        }
  
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  
    const changefn = (e)=>{
  setValue({...value, [e.target.name]:e.target.value})
    }
  
    // useEffect(()=>{
    //   console.log(value);
    // })

  return (
    <div>
      <AdminNav/>
      <div className="container-fluid py-5" style={{ marginTop: "5rem" }}>
        <div className="container">
          <div className=" border-5 border-primary ps-5 mb-5">
            <h1 className="display-5 text-uppercase mb-0">Edit Designation</h1>
          </div>
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "400px" }}
            >
              {/* <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src={img}
                  style={{
                    objectFit: "contain",
                    height: "400px",
                    width: "100px",
                  }}
                  alt=""
                />
              </div> */}
            </div>
            <div className="col-lg-7" style={{ paddingTop: "2rem" }}>
              <form onSubmit={updatefcn} >
                <div className="row g-3">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Title"
                      style={{ height: "55px" }}
                      value={value.title}
                      name="title"
                      onChange={changefn}
                      id="title"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Basic Pay"
                      style={{ height: "55px" }}
                      value={value.bp}
                      name="bp"
                      onChange={changefn}
                      id="bp"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Leaves"
                      style={{ height: "55px" }}
                      value={value.leaves}
                      name="leaves"
                      onChange={changefn}
                      id="leaves"
                    />
                  </div>
                  
                
               
                  <div className="col-12">
                    <button className="btn btn-dark w-100 py-3" type="submit">
                      Update Designation
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

export default AdminEditDesig
