import React from "react";
import './Myskills.css'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
function Myskills(){
return(
    <>
    
    <section class="skill_cards">
        <div class="services" id="services">
            <div class="container">
                <h1 class="sub-title">My <span>Skiils</span></h1>
                <div class="services-list">
                    
                    <div>
                    {/* <FontAwesomeIcon icon="fa-brands fa-html5" /> */}
                        {/* <i class='bx bxl-html5' id="html"></i> */}
                        <h2>HTML</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam perspiciatis fugit debitis laudantium, sed numquam neque at, praesentium exercitationem culpa ipsam? Nihil.
                        </p>
                        <a href="#" class="read">Learn More</a>
                    </div>
                    <div>
                      <i class='bx bxl-css3' id="css"></i>
                      <h2>CSS</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam perspiciatis fugit debitis laudantium, sed numquam neque at, praesentium exercitationem culpa ipsam? Nihil.
                      </p>
                      <a href="#" class="read">Learn More</a>
                  </div>
                    <div>
                        <i class='bx bxl-javascript' id="javascript"></i>
                        <h2>JavaScript</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam perspiciatis fugit debitis laudantium, sed numquam neque at, praesentium exercitationem culpa ipsam? Nihil.
                        </p>
                        <a href="#" class="read">Learn More</a>
                    </div>
                    <div>
                        <i class='bx bxl-react' id="react"></i>
                        <h2>React</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam perspiciatis fugit debitis laudantium, sed numquam neque at, praesentium exercitationem culpa ipsam? Nihil.
                        </p>
                        <a href="#" class="read">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
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