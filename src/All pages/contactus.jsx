import "./All page.css"
import Header from "../Header Footer/Header";
import Footer from "../Header Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'
function Contact() {
  return (
   <>
    <Header />
    <div class="contact">
      <h2>SEND US A MESSAGE</h2>
      <div class="hr-row">
        <span>
          <hr />
        </span>
      </div>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        class="form-page"
      >
        <input
          type="hidden"
          name="access_key"
          value="98de7608-b0e4-41ed-9442-49ef94c3ab37"
        />

        <input
          type="text"
          id="name_email"
          name="name"
          placeholder="Name"
          required
        />
        <input
          type="email"
          id="name_email"
          name="email"
          placeholder="Emial"
          required
        />
        <br />
        <input type="text" id="subject" name="subject" placeholder="Subject" />
        <textarea
          name="message"
          placeholder="Type your message here..."
          required
        ></textarea>
        <br />
        <input
          type="hidden"
          name="redirect"
          value="https://gomagicdeals.kesug.com/thankyou"
        />
        <button type="submit">Send Message</button>
      </form>
      <div class="socail_icons">
        <section>
          <div class="contact-icons">
          <FontAwesomeIcon icon={faInstagram} className="icon-size" />
          </div>
          <h2>
            Instagram{" "}
            <a href="https://www.instagram.com/jitendershakya046">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
          </h2>
        </section>
        <section>
          <div class="contact-icons">
          <FontAwesomeIcon icon={faFacebook} className="icon-size" />
          </div>
          <h2>
            Facebook{" "}
            <a href="https://www.facebook.com/people/Jitender-Shakya/100089951974887">
            <FontAwesomeIcon icon={faFacebook} />
         </a>
          </h2>
        </section>
        <section>
          <div class="contact-icons">
          <FontAwesomeIcon icon={faLinkedin} className="icon-size" />
          </div>
          <h2>
            Linked In{" "}
            <a href="/contacts">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </h2>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
}
export default Contact;
