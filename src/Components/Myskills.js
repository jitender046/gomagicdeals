import React from "react";
import './Myskills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5,faCss3Alt,faJs,faReact} from '@fortawesome/free-brands-svg-icons'
function Myskills(){
return(
    <>
    <section class="skill_cards">
        <div class="services" id="services">
            <div class="skills-container">
                <h1 class="sub-title">My <span>Skiils</span></h1>
                <div class="services-list">
                    
                    <div>
                    <i id="html"><FontAwesomeIcon icon={faHtml5} /></i>
                        <h2>HTML</h2>
                        <p>
                        Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.                        </p>
                        <a href="https://jitendershakya046.blogspot.com/2024/05/html.html" class="read">Learn More</a>
                    </div>
                    <div>
                        <i id="css"><FontAwesomeIcon icon={faCss3Alt} /></i>
                      <h2>CSS</h2>
                      <p>
                      CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.
                      </p>
                      <a href="/css" class="read">Learn More</a>
                  </div>
                    <div>
                        <i id="javascript"><FontAwesomeIcon icon={faJs} /></i>
                        <h2>JavaScript</h2>
                        <p>
                        JavaScript (JS) is a programming language that allows developers to create interactive web pages. It's a core technology of the World Wide Web.
                        </p>
                        <a href="/JavaScript" class="read">Learn More</a>
                    </div>
                    <div>
                        <i id="react"><FontAwesomeIcon icon={faReact} /></i>
                        <h2>React</h2>
                        <p>
                        React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.
                        </p>
                        <a href="/React" class="read">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="skills-bar">
        <div class="container1" id="skills">
            
            <h1 class="heading1">Technical Skills</h1>
            <div class="Technical-bars">
                <div class="bar"><i class='bx bxl-html5'></i>
                    <div class="info">
                        <span>HTML</span>
                    </div>
                    <div class="progress-line html">
                        <span></span>
                    </div>
                </div><br/>
                <div class="bar"><i class='bx bxl-css3'></i>
                    <div class="info">
                        <span>CSS</span>
                    </div>
                    <div class="progress-line css">
                        <span></span>
                    </div>
                </div><br/>
                <div class="bar"><i class='bx bxl-javascript'></i>
                    <div class="info">
                        <span>JavaScript</span>
                    </div>
                    <div class="progress-line javaScript">
                        <span></span>
                    </div>
                </div><br/>
                <div class="bar"><i class='bx bxl-react'></i>
                    <div class="info">
                        <span>React</span>
                    </div>
                    <div class="progress-line react">
                        <span> </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="container1">
            <h1 class="heading1">Professional Skills</h1>
            <div class="radial-bars">

             <div class="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                    <circle class="path path-1" cx="100" cy="100" r="80"></circle>
                </svg>
                <div class="percentage">90%</div>
                <div class="text">Creativity</div>
             </div>

             <div class="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                    <circle class="path path-2" cx="100" cy="100" r="80"></circle>
                </svg>
                <div class="percentage">80%</div>
                <div class="text">Communication</div>
             </div>

             <div class="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                    <circle class="path path-3" cx="100" cy="100" r="80"></circle>
                </svg>
                <div class="percentage">75%</div>
                <div class="text">Problem Solving</div>
             </div>

             <div class="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                    <circle class="path path-4" cx="100" cy="100" r="80"></circle>
                </svg>
                <div class="percentage">85%</div>
                <div class="text">TeamWork</div>
             </div>
            </div>
        </div>
    </section>
    </>
)
}
export default Myskills;