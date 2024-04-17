import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav/AdminNav'
import axiosInstance from './baseUrl';
import { useNavigate } from 'react-router-dom';

function AdminViewProjects() {

    const navigate=useNavigate()

    useEffect(() => {
        if(localStorage.getItem('adminlog')==null){
          navigate('/')
        }
      });

    const [array,setArray]= useState([]);

    useEffect(()=>{
        axiosInstance.post(`/viewAllPrjs`)
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

  return (
    <div>
      <AdminNav/>
      <div class="container-fluid pt-4 px-4 p-5" >
                <div class="bg-light text-center rounded p-5">
                    <div class="d-flex align-items-center justify-content-between mb-5">
                        <h6 class="mb-0">Project Details</h6>
                        {/* <a href="">Show All</a> */}
                    </div>
                    <div class="table-responsive">
                        {
                            array.length?<table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-dark">
                                    <th scope="col">Name</th>
                                    <th scope="col">Technology</th>
                                    <th scope="col">Deadline</th>
                                    <th scope="col">Members</th>
                                    <th scope="col">Completed</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    array?array.map((a)=>{
                                        return(
                                            <tr>
                                            <td>{a.title}</td>
                                            <td>{a.technology}</td>
                                            <td>{a.deadline.slice(0,10)}</td>
                                            <td>
                                            {
                                                a.members.map((e)=>{
                                                    return(
                                                        <>{e.name + ','}</>
                                                        
                                                    )
                                                })
                                            }
                                            </td>
                                            {/* <td>{a.members.name + ','}</td> */}
                                            <td>{a.percentage}%</td>
                                            
                                            {/* <td>{a.designationid.title}</td>
                                            <td>{a.dateofjoin.slice(0,10)}</td> */}
                                                              </tr>

                                        )
                                       

                                    }):<h1 style={{textAlign:'center',padding:'25px'}} >No Projects found</h1>
                                }
                                
                                
                            </tbody>
                        </table>:<h1 style={{textAlign:'center',padding:'25px'}} >No Projects found</h1>
                        }
                        
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AdminViewProjects
