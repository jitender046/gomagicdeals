import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faLinkedin,faTwitter} from '@fortawesome/free-brands-svg-icons'
function ContactMe() {
    return(
        <>
        <section class="contactme" id="contactme">
        <div class="contact-text">
            <h1>Contact <span>Me</span></h1>
            <h4>Let's Work Together</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iste similique quibusdam facere!
            </p>
            <div class="contact-list">
                <li><i class='bx bxs-send'></i> jitendersaini046@gmail.com</li>
                <li><i class='bx bx-phone'></i> 7082435365</li>
            </div>
            <div class="contactme-icons">
                <a href=""><FontAwesomeIcon icon={faInstagram}/></a>
                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </div>

        <div class="contactme-form">
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="98de7608-b0e4-41ed-9442-49ef94c3ab37"/>
                <input type="text" name="name" placeholder="Enter Your Name" required/>
                <input type="email" name="email" placeholder="Enter Your Email" required/>
                {/* <!-- <input type="text" name="subject" /> --> */}
                <input type="text" name="subject" placeholder="Enter Your Subject"/>

                <textarea name="message" id="" cols="40" rows="10" placeholder="Enter Your Message" required></textarea>
                <input type="hidden" name="redirect" value="https://gomagicdeals.kesug.com/Thankyou"/>
                <input type="submit" value="submit" class="send"/>
            </form>
        </div>

    </section>
        </>
    );
}
export default ContactMe;