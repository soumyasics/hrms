import React from 'react'
import img1 from '../Images/about.jpg'
import img2 from '../Images/about-story.jpg'
import img3 from '../Images/about-goal.jpg'

function About() {
  return (
    <div>
      <div class="about mt-100">
            <div class="container">
                <div class="section-header">
                    <h2>About Us</h2>
                    <p>
                    Deliver exceptional employee experiences                    </p>
                </div>
                
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="about-img">
                            <img src={img1} alt="" class="img-fluid"/>
                        </div>
                        <div class="about-content">
                            <h2>Welcome to Our Site</h2>
                            <p>
                            The world of work is changing rapidly and so should your HR practices. Zoho People is a cloud-based HR software crafted to nurture employees, quickly adapt to changes, and make HR management agile and effective. Simplify your HR operations, retain talent, and build a high-performing workforce while putting employee experience first.
                            </p>
                            {/* <a class="btn" href="#">Read More</a> */}
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="about-img">
                            <img src={img2} alt="" class="img-fluid"/>
                        </div>
                        <div class="about-content">
                            <h2>Optimize your time and attendance</h2>
                            <p>
                            Spend less time tracking time and days off. Zoho People's time and attendance system lets you focus on employee productivity while accurately tracking work hours and providing error-free reporting.                            </p>
                            {/* <a class="btn" href="#">Read More</a> */}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="about-img">
                            <img src={img3} alt="" class="img-fluid"/>
                        </div>
                        <div class="about-content">
                            <h2>Reimagine learning and development</h2>
                            <p>
                            Zoho People provides a powerful but simple way to manage and deliver the best learning experience to your employees. Our learning and development system enables dynamic learning for every team with engaging content and virtual training.                            </p>
                            {/* <a class="btn" href="#">Read More</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
