import React from "react";
import Header from "../Header Footer/Header"
import Itsme from "../Components/Its me"
import Myskills from "../Components/Myskills"
import LatestProject from "../Components/Latest-project";
import ContactMe from "../Components/Contact Me";
import Footer from "../Header Footer/Footer";
function About() {
    return(
        <div className="about-bg">
        <Header/>
        <Itsme/>
        <Myskills/>
        <LatestProject/>
        <ContactMe/>
        <Footer/>
        </div>
    );
}
export default About;