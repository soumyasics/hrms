import React from 'react'

function Contact() {
  return (
    <div>
      <div class="contact" style={{marginTop:'5rem'}}>
            <div class="container">
                <div class="section-header">
                    <h2>Contact Us</h2>
                    <p>
                    Need to get in touch with our Support Team? Send a message now </p>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="form">
                            <form class="contactForm">
                                <div class="form-row">
                                    <div class="form-group col-sm-12">
                                        <input type="text" class="form-control" placeholder="Your Name" />
                                    </div>
                                    <div class="form-group col-sm-12">
                                        <input type="email" class="form-control" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Subject" />
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" rows="5" placeholder="Message"></textarea>
                                </div>
                                <div><button class="btn mt-2" type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                    {/* <div class="col-md-6">
                        <div class="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26361250.667320687!2d-113.75533773453304!3d36.24128894212527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1574923227698!5m2!1sen!2sbd" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
