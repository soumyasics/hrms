import React from 'react'
import EmployeeNav from '../EmployeeNav/EmployeeNav'
import Corousal from '../Corousel/Corousal'
import About from '../About/About'
import EmpCorousel from '../EmpCorousel'

function EmployeePage() {
  return (
    <div>
      <EmployeeNav/>
      <EmpCorousel/>
      <About/>
      
    </div>
  )
}

export default EmployeePage
