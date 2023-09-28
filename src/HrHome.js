import React from 'react'
import HrNav from './HrNav'
import Corousal from './Corousel/Corousal'
import About from './About/About'
import HrCorousel from './HrCorousel'

function HrHome() {
  return (
    <div>
      <HrNav/>
      <HrCorousel/>
      <About/>
    </div>
  )
}

export default HrHome
