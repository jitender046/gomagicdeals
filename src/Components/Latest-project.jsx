import React from "react";
function LatestProject() {
    return(
   <>
    <section>
        <div class="portfolio" id="project">
            <div class="main-text" id="project">
                <h2>Latest <span>Project</span></h2>
                
                <div class="portfolio-content">
                    <div class="row">
                        <img src={require("../Images/Projects/Weather.png")}/>
                        <div class="layer">
                            <h5>Weather App</h5>
                            <p>The Weather Detection project is designed to 
                               provide real-time weather information based 
                               on user inputs such as location or city name.
                               It utilizes APIs (Application Programming Interfaces)
                               provided by weather services to fetch and display 
                               current weather conditions and forecasts.
                            </p>
                            <a href="#"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>

                    <div class="row">
                        <img src={require("../Images/Projects/Todo.png")} alt="Todo"/>
                        <div class="layer">
                            <h5>To-Do List</h5>
                            <p>The To-Do List project is a web application designed
                               to help users organize and manage their tasks effectively.
                               This project utilizes HTML, CSS, and JavaScript to create
                               an interactive user interface for adding, editing, and 
                               deleting tasks.
                            </p>
                            <a href="#"><i class='bx bx-link-external' ></i></a>
                        </div>
                    </div>

                    <div class="row">
                        <img src={require("../Images/Projects/Quiz.png")} alt="quiz"/>
                        <div class="layer">
                            <h5>Quiz App</h5>
                            <p>The Quiz App project is a web application designed to provide 
                               users with an interactive quiz experience. This project utilizes 
                               HTML, CSS, and JavaScript to create a dynamic user interface
                               for presenting questions, handling user responses, and 
                               calculating scores.
                            </p>
                            <a href="#"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
}
export default LatestProject;