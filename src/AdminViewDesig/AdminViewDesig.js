import React, { useEffect, useState } from 'react'
import AdminNav from '../AdminNav/AdminNav'
import axiosInstance from '../baseUrl';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';

function AdminViewDesig() {

    const navigate=useNavigate()
    const [array,setArray]= useState([]);
    useEffect(() => {
        if(localStorage.getItem('adminlog')==null){
          navigate('/')
        }
      });

    useEffect(()=>{
        axiosInstance.post("/viewallDesignationforAdmin")
        .then((response)=>{
            if(response.data.msg=='No Data obtained '){
                setArray([])

            }else if(response.data.status==200){
                setArray(response.data.data)

            }
        })
        .catch((err)=>{
            console.log(err);
        })


    },[])

    const handleRemove = (id) => {
        axiosInstance.post(`/deleteDesignationById/${id}`)
          .then((res) => {
            console.log(res);
            if(res.data.status==200){
                toast.success('Removed')
                setArray(prevArray => prevArray.filter(item => item._id !== id));
            }else{
                toast.warning('Employee Already Exist')
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
    

  return (
    <div>
        <AdminNav/>
        <div class="container-fluid pt-4 px-4 p-5" >
                <div class="bg-light text-center rounded p-5">
                    <div class="d-flex align-items-center justify-content-between mb-5">
                        <h6 class="mb-0">Designation Details</h6>
                        {/* <a href="">Show All</a> */}
                    </div>
                    <div class="table-responsive">
                        {
                            array.length?<table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-dark">
                                    <th scope="col">Designation Name</th>
                                    <th scope="col">Basic Pay</th>
                                    <th scope="col">Leaves</th>
                                    <th scope="col">Actions</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    array.map((a)=>{
                                        return(
                                            <tr>
                                            <td>{a.title}</td>
                                            <td>{a.bp}</td>
                                            <td>{a.leaves}</td>
                                            <td><Link to={`/admin-edit-designation/${a._id}`}><button class="btn btn-sm btn-primary" style={{marginRight:'5px'}}>Edit</button></Link>
                                                <button class="btn btn-sm btn-danger" onClick={() => handleRemove(a._id)} >Remove</button>
                                            </td>
                                        </tr>
                                        )                                   
                                    })
                                }                                                             
                            </tbody>
                        </table>:<h1 style={{textAlign:'center',padding:'25px'}} >No Designation found</h1>
                        }
                        
                    </div>
                </div>
            </div>    
    </div>
  )
}

export default AdminViewDesig
