import React from 'react'

function Footer() {
  return (
    <div>
        <div class="footer">
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 footer-links">
                            <h4>About Us</h4>
                            <ul>
                                <li><i class="ion-ios-arrow-forward"></i> <a href="#">Home</a></li>
                                <li><i class="ion-ios-arrow-forward"></i> <a href="#">About us</a></li>
                                <li><i class="ion-ios-arrow-forward"></i> <a href="#">Our services</a></li>
                                <li><i class="ion-ios-arrow-forward"></i> <a href="#">Terms & condition</a></li>
                                <li><i class="ion-ios-arrow-forward"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        {/* <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i class="ion-ios-arrow-forward"></i> <a href="#">Lorem ipsum</a></li>
                                <li><i class="ion-ios-arrow-forward"></i> <a href="#">Pellentesque</a></li>
                                <li><i class="ion-ios-arrow-forward"></i> <a href="#">Suspendisse egestas</a></li>
                                <li><i class="ion-ios-arrow-forward"></i> <a href="#">Nulla tristique</a></li>
                                <li><i class="ion-ios-arrow-forward"></i> <a href="#">Phasellus leo</a></li>
                            </ul>
                        </div> */}

                        <div class="col-lg-4 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                1300  Center Avenue<br/>
                                Fresno, California<br/>
                                United States <br/>
                                <strong>Phone:</strong> +123-456-7890<br/>
                                <strong>Email:</strong> info@example.com<br/>
                            </p>

                            {/* <div class="social-links">
                                <a href="#"><i class="ion-logo-twitter"></i></a>
                                <a href="#"><i class="ion-logo-facebook"></i></a>
                                <a href="#"><i class="ion-logo-linkedin"></i></a>
                                <a href="#"><i class="ion-logo-instagram"></i></a>
                                <a href="#"><i class="ion-logo-googleplus"></i></a>
                            </div> */}

                        </div>

                        <div class="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Subscription</h4>
                            <p>The world of work is changing rapidly and so should your HR practices. Zoho People is a cloud-based HR software crafted to nurture employees, quickly adapt to changes, and make HR management agile and effective. Simplify your HR operations, retain talent, and build a high-performing workforce while putting employee experience first.</p>
                            {/* <form action="" method="post">
                                <input type="email" name="email"/><input type="submit"  value="Subscribe"/>
                            </form> */}
                        </div>

                    </div>
                </div>
            </div>

            {/* <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 copyright">
                        Copyright &copy; 2045 <a href="">Your Site Name</a>. All Rights Reserved
                    </div>
                    <div class="col-md-6 credit">
                        Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Footer
