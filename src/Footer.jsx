import './Footer.css'
function Footer(){
    return(
        <footer class="footer">
            <div class="container-fluid">
                <div className="links1">
                <section >
                        <ul class="list-unstyled footer-link mt-4">
                            <li><h6 class="footer-heading">Information</h6></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Our Team</a></li>
                            <li><a href="">About us</a></li>
                            <li><a href="">Pricing</a></li>
                        </ul>
                </section>
              <section>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><h6 class="footer-heading">Resources</h6></li>
                            <li><a href="">Monitoring Grader </a></li>
                            <li><a href="">Video Tutorial</a></li>
                            <li><a href="">Term &amp; Service</a></li>
                            <li><a href=""></a></li>
                        </ul>  
              </section>
              </div>
              <div className="links1">

                <section>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><h6 class="footer-heading">Help</h6></li>
                            <li><a href="">Sign Up </a></li>
                            <li><a href="">Login</a></li>
                            <li><a href="">Terms of Services</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul> 
                </section>      
                <section>
                <ul class="list-unstyled footer-link mt-4">
                            <li><h6 class="footer-heading">Contact Us</h6></li>
                            <li><p class="contact-info">Contact us if need help with anything</p></li>
                            <li><p class="contact-info">Location : Haryana , INDIA</p></li>
                            <li><p class="contact-info">Email: itsinstagramhelp@gmail.com</p></li>
                        </ul> 
                </section>
                </div>

                 
       </div>                     
        <hr/>

        <div class="text-center">
            <p>Copyrighted by © 2024 Go magic deals</p>
        </div>
    </footer>
    );
}

export default Footer;