import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="links1">
          <section>
            <ul className="list-unstyled footer-link mt-4">
              <li>
                <h6 className="footer-heading">Information</h6>
              </li>
              <li>
                <Link to="/quickscreen">QuickScreen Test</Link>
              </li>
              <li>
                <Link to="/weather">Weather</Link>
              </li>
              <li>
                <Link to="/youtube">Youtube</Link>
              </li>
              <li>
                <Link to="/todo">ToDo</Link>
              </li>
            </ul>
          </section>
          <section>
            <ul className="list-unstyled footer-link mt-4">
              <li>
                <h6 className="footer-heading">Resources</h6>
              </li>
              <li>
                <Link to="/youtube">Youtube</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/ter">Term & Service</Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="links1">
          <section>
            <ul className="list-unstyled footer-link mt-4">
              <li>
                <h6 className="footer-heading">Help</h6>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/term">Home</Link>
              </li>
              <li>
                <Link to="/todo-app">TodoApp </Link>
              </li>
            </ul>
          </section>
          <section>
            <ul className="list-unstyled footer-link mt-4">
              <li>
                <h6 className="footer-heading">Contact Us</h6>
              </li>
              <li>
                <p className="contact-info">Contact us if need help with anything</p>
              </li>
              <li>
                <p className="contact-info">Location: Haryana, INDIA</p>
              </li>
              <li>
                <p className="contact-info">Email: itsinstagramhelp@gmail.com</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <p>Copyrighted by 2024 Go magic deals</p>
      </div>
    </footer>
    
   
  );
}

export default Footer;