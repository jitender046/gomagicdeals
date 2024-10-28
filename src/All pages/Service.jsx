import React from "react";
import Header from '../Header Footer/Header'
import Footer from '../Header Footer/Footer'

function Service() {
    return(
        <>
        <Header />
        <div className="all-cards">
            <div className="card">
                <img src={require("../Images/csc/PAN.png")} alt=""/>
                <h2>PAN card</h2>
            </div>
            <div className="card">
                <img src={require("../Images/csc/Aadhaar.jpeg")} alt=""/>
                <h2> Aadhaar Card</h2>
            </div>
            <div className="card">
                <img src={require("../Images/csc/Ayushman.jpeg")} alt=""/>
                <h2>Ayushman Card</h2>
            </div>
            <div className="card">
                <img src={require("../Images/csc/E-sharm.jpeg")} alt=""/>
                <h2>E-sharm Card</h2>
            </div>
            <div className="card">
                <img src={require("../Images/csc/PM kissan.jpeg")} alt=""/>
                <h2>PM Kissan</h2>
            </div>
            <div className="card">
                <img src={require("../Images/csc/Ration.jpeg")} alt=""/>
                <h2>Ration Card</h2>
            </div>
            <div className="card">
                <img src={require("../Images/csc/Ticket.jpeg")} alt=""/>
                <h2>Ticket</h2>
            </div>
            <div className="card">
                <img src={require("../Images/csc/VoterId.jpeg")} alt=""/>
                <h2>Voter Card</h2>
            </div>
            <div className="card">
                <img src={require("../Images/csc/Recharge.jpg")} alt=""/>
                <h2>Mobile Recharge</h2>
            </div>
            <div className="card">
                <img src={require("../Images/csc/Account Open.jpeg")} alt=""/>
                <h2>Account Opening</h2>
            </div>
            <div className="card">
                <img src={require("../Images/csc/Money-Tranfer.png")} alt=""/>
                <h2>Money Transfer</h2>
            </div>
            <div className="card">
                <img src={require("../Images/csc/Birth certificate.jpeg")} alt=""/>
                <h2>Birth Certificate</h2>
            </div>
            <div className="card">
                <img src={require("../Images/csc/Resume.jpg")} alt=""/>
                <h2>Resume</h2>
            </div>
            <div className="card">
                <img src={require("../Images/csc/Passport.jpg")} alt=""/>
                <h2>Passport Apply</h2>
            </div>
            <div className="card">
                <img src={require("../Images/csc/Sarkari.png")} alt=""/>
                <h2>Sarkari Form</h2>
            </div>
            
        </div>
        <Footer/>
        </>
    );
}
export default Service;