import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Corousal from '../Corousel/Corousal'
import Counter from '../Counter/Counter'
import Navbar from '../Navbar/Navbar'
import Services from '../Services/Services'

function Home() {
  return (
    <div>
      <Navbar/>
      <Corousal/>
      <About/>
      {/* <Services/>
      <Counter/>
      <Contact/> */}
    </div>
  )
}

export default Home
