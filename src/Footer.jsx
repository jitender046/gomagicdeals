import './Footer.css'
function Footer(){
    return(
        <footer class="footer">
            <div class="container-fluid">
                <section >
                <h6 class="footer-heading">Information</h6>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><a href="">Pages</a></li>
                            <li><a href="">Our Team</a></li>
                            <li><a href="">Feuchers</a></li>
                            <li><a href="">Pricing</a></li>
                        </ul>
                </section>
              <section>
              <h6 class="footer-heading">Ressources</h6>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><a href="">Monitoring Grader </a></li>
                            <li><a href="">Video Tutorial</a></li>
                            <li><a href="">Term &amp; Service</a></li>
                            <li><a href="">Zeeko API</a></li>
                        </ul>  
              </section>
                <section>
                <h6 class="footer-heading">Help</h6>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><a href="">Sign Up </a></li>
                            <li><a href="">Login</a></li>
                            <li><a href="">Terms of Services</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul> 
                </section>      
                <section>
                <h6 class="footer-heading">Contact Us</h6>
                        <p class="contact-info">Contact us if need help withanything</p>
                        <p class="contact-info">+01 123-456-7890</p>
                            <ul class="list-inline">
                                <li class="list-inline-item"><a href="#"><i class="fab facebook footer-social-icon fa-facebook-f"/></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab twitter footer-social-icon fa-twitter"/></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab google footer-social-icon fa-google"/></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab apple footer-social-icon fa-apple"/></a></li>
                            </ul>
                </section>

                 
       </div>                     
        <hr/>

        <div class="text-center">
            <p>Copyrighted by © 2024 Go magic deals</p>
        </div>
    </footer>
    );
}

export default Footer;