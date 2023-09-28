import React from 'react'
import Navbar from '../Navbar/Navbar'

function HRLogin() {
  return (
    <div>
        <Navbar/>
      <div class="contact mt-100">
            <div class="container">
                <div class="section-header">
                    <h2>HR Login</h2>
                    {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac lacus eget nunc imperdiet 
                    </p> */}
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form">
                            <form class="contactForm">
                                <div class="form-row">
                                    <div class="form-group col-sm-12">
                                        <input type="text" class="form-control" placeholder="Your Email" />
                                    </div>
                                    <div class="form-group col-sm-12">
                                        <input type="password" class="form-control" placeholder="Password" />
                                    </div>
                                </div>
                               
                                <div><button class="btn mt-2" type="submit">Login</button></div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6">
                        
                    <p className='mt-100 text-center' >Don't have an account? <p  className='text_dec' >Sign up</p> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HRLogin
