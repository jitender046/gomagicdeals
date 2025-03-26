import React, { useRef } from "react";
import Slider from "react-slick";
import "./Onedocslider.css"
// import "../coffee/Coffee.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons"
// import Counter from "../Components/Counter";

function AutoPlayMethods() {
  let sliderRef= useRef(null);
//   const play = () => {
//     sliderRef.slickPlay();
//   };
//   const pause = () => {
//     sliderRef.slickPause();
//   };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="Onedocslider">
      <div className="slider-container">
        <Slider
          ref={(slider) => (sliderRef = slider)}
          {...settings}
          className="slider"
        >
       
          <div className="index-hero-image">
            <div className="Imgandcontentslide">
            <img
              src={require("../Images/csc/Aadhaar.jpeg")}
              alt="Aadhaar"
            />
            <div className="Doccontent">
               <div className="tags"> <span>Government ID</span> <span> Aadhaar card</span></div>
                <h1>Aadhaar Card</h1>
                <p>Aadhaar is a 12 digit individual identification number issued by the Unique Identification Authority of India on behalf of the Government of India.The number serves as a proof of identity and address, anywhere in India. Aadhaar letter received via India Post and e-Aadhaar downloaded from UIDAI website are equally valid.</p>
                <Link to="/signup">Continue Reading <FontAwesomeIcon icon={faAngleRight} /> </Link>
                </div>
            </div>
          </div>

          <div className="index-hero-image">
            <div className="Imgandcontentslide">
            <img
              src={require("../Images/csc/PAN.png")}
              alt="PAN"
            />
            <div className="Doccontent">
               <div className="tags"> <span>Government ID</span> <span>PAN card</span></div>
                <h1>PAN Card</h1>
                <p>A PAN card (Permanent Account Number card) is a ten-digit alphanumeric code that is your permanent identification number assigned by the Indian Income Tax Department to store an individual’s tax information. This is why it is unique to you.

Note that, unlike other forms of identification, the PAN card is valid for a lifetime once issued. That said, minors must convert their cards to permanent ones with their photo and signature once they turn eighteen.</p>
                <Link to="/signup">Continue Reading <FontAwesomeIcon icon={faAngleRight} /> </Link>
                </div>
            </div>
          </div>

          <div className="index-hero-image">
            <div className="Imgandcontentslide">
            <img
              src={require("../Images/csc/VoterId.jpeg")}
              alt="Voterid"
            />
            <div className="Doccontent">
               <div className="tags"> <span>Government ID</span> <span>Voter card</span></div>
                <h1>Voter Card</h1>
                <p>The Indian Voter ID Card (officially the Elector's Photo Identity Card (EPIC)) is an identity document issued by the Election Commission of India to adults domiciles of India who have reached the age of 18. It primarily serves as an identity proof for Indian citizens while casting their ballot in the country's municipal, state, and national elections.</p>
                <Link to="/signup">Continue Reading <FontAwesomeIcon icon={faAngleRight} /> </Link>
                </div>
            </div>
          </div>

          <div className="index-hero-image">
            <div className="Imgandcontentslide">
            <img
              src={require("../Images/csc/Ration.jpeg")}
              alt="Ration"
            />
            <div className="Doccontent">
               <div className="tags"> <span>Government ID</span> <span>Rationcard</span></div>
                <h1>Ration Card</h1>
                <p>A ration card is an official document that is issued by the respective state governments. With the help of this card, qualifying households can buy food grains at subsidized rates according to the National Food Security Act (NFSA), 2013.

Previously, based on the state governments’ identification, qualifying households could buy food grains at subsidised rates via the Targeted Public Distribution System (TPDS).

In 2013, the National Food and Security Act (NFSA) was passed to provide a certain quantity and quality of food to people at affordable prices. Currently, the state governments that have implemented the NFSA issue two types of ration cards to the qualifying families in their respective states, i.e. Priority Household (PHH) ration card and Non-priority Household (NPHH) ration card.</p>
                <Link to="/signup">Continue Reading <FontAwesomeIcon icon={faAngleRight} /> </Link>
                </div>
            </div>
          </div>

          <div className="index-hero-image">
            <div className="Imgandcontentslide">
            <img
              src={require("../Images/csc/Ayushman.jpeg")}
              alt="Ayushman"
            />
            <div className="Doccontent">
               <div className="tags"> <span>Government ID</span> <span>card</span></div>
                <h1>Ayushman Card</h1>
                <p>Ayushman Card is a health insurance scheme that provides coverage of Rs 5 lakh, covering almost all expenses from pre-hospitalization to post-hospitalization costs. It is valid countrywide and is accepted at nearly 24,000 hospitals, covering more than 1400 treatments throughout India. The scheme offers cashless hospitalisation at covered hospitals.</p>
                <Link to="/signup">Continue Reading <FontAwesomeIcon icon={faAngleRight} /> </Link>
                </div>
            </div>
          </div>

          <div className="index-hero-image">
            <div className="Imgandcontentslide">
            <img
              src={require("../Images/csc/Awas.jpg")}
              alt="Awas"
            />
            <div className="Doccontent">
               <div className="tags"> <span>Government Scheme</span> <span>card</span></div>
                <h1>Awas Card</h1>
                <p>Pradhan Mantri Awas Yojana (PMAY) is a credit-linked subsidy scheme by the Government of India to facilitate access to affordable housing for the low and moderate-income residents of the country. It envisaged a target of building 2 crore (20 million) affordable houses by 31 March 2022.</p>
                <Link to="/signup">Continue Reading <FontAwesomeIcon icon={faAngleRight} /> </Link>
                </div>
            </div>
          </div>

          <div className="index-hero-image">
            <div className="Imgandcontentslide">
            <img
              src={require("../Images/csc/Account Open.jpeg")}
              alt="Account"
            />
            <div className="Doccontent">
               <div className="tags"> <span>Government ID</span></div>
                <h1>Bank Account</h1>
                <p>A bank account is a financial account maintained by a bank or other financial institution in which the financial transactions between the bank and a customer are recorded. Each financial institution sets the terms and conditions for each type of account it offers, which are classified in commonly understood types, such as deposit accounts, credit card accounts, current accounts, loan accounts or many other types of account. A customer may have more than one account. Once an account is opened, funds entrusted by the customer to the financial institution on deposit are recorded in the account designated by the customer. Funds can be withdrawn from the accounts in accordance with their terms and conditions.</p>
                <Link to="/signup">Continue Reading <FontAwesomeIcon icon={faAngleRight} /> </Link>
                </div>
            </div>
          </div>

          <div className="index-hero-image">
            <div className="Imgandcontentslide">
            <img
              src={require("../Images/csc/Caste.jpg")}
              alt="Caste"
            />
            <div className="Doccontent">
               <div className="tags"> <span>Government ID</span></div>
                <h1>Caste Certificate</h1>
                <p>There are many castes in India. A caste certificate helps legally establish which caste you are from. It is a piece of document that you can use to back your claims that you belong to a certain caste. It is a very important document for those belonging to ‘Scheduled Caste’ or ‘Scheduled Tribe’ as it helps them receive the benefits of various government schemes.</p>
                <Link to="/signup">Continue Reading <FontAwesomeIcon icon={faAngleRight} /> </Link>
                </div>
            </div>
          </div>

          <div className="index-hero-image">
            <div className="Imgandcontentslide">
            <img
              src={require("../Images/csc/Domicile.jpg")}
              alt="Domicile"
            />
            <div className="Doccontent">
               <div className="tags"> <span>Government ID</span> <span>Haryana Resident Certificate</span></div>
                <h1>Haryana Resident Certificate</h1>
                <p>A Haryana domicile certificate indicates that an individual is a resident of Haryana state. The state government issues the Haryana to the citizens based on their continuous residence in Haryana.</p>
                <Link to="/signup">Continue Reading <FontAwesomeIcon icon={faAngleRight} /> </Link>
                </div>
            </div>
          </div>

          <div className="index-hero-image">
            <div className="Imgandcontentslide">
            <img
              src={require("../Images/csc/E-sharm.jpeg")}
              alt="E-Sharm"
            />
            <div className="Doccontent">
               <div className="tags"> <span>Government ID</span> <span>E-Sharm card</span></div>
                <h1>E-Sharm Card</h1>
                <p>E Sharm card is an innovative scheme launched by the Ministry of Labor and Employment for the economically weak sector in India. This portal was created to collect and manage the information of unorganized workers.</p>
                <Link to="/signup">Continue Reading <FontAwesomeIcon icon={faAngleRight} /> </Link>
                </div>
            </div>
          </div>

          <div className="index-hero-image">
            <div className="Imgandcontentslide">
            <img
              src={require("../Images/csc/Income.jpg")}
              alt="Income"
            />
            <div className="Doccontent">
               <div className="tags"> <span>Government ID</span> <span>Income Certificate</span></div>
                <h1>Income Certificate</h1>
                <p>An Income Certificate is an official document issued by government authorities that certifies the income of an individual or family. It serves as proof of income for various purposes, including eligibility for government schemes, educational scholarships, and financial assistance programs.
</p>
                <Link to="/signup">Continue Reading <FontAwesomeIcon icon={faAngleRight} /> </Link>
                </div>
            </div>
          </div>

          <div className="index-hero-image">
            <div className="Imgandcontentslide">
            <img
              src={require("../Images/csc/Money-Tranfer.png")}
              alt="Money-Tranfer"
            />
            <div className="Doccontent">
               <div className="tags"> <span>Money-Tranfer</span></div>
                <h1>Money-Tranfer</h1>
                <p>money transfer is transferring money from one bank account to another bank account. It can be a physical or electronic fund transfer from one bank account to another bank account.</p>
                <Link to="/signup">Continue Reading <FontAwesomeIcon icon={faAngleRight} /> </Link>
                </div>
            </div>
          </div>

          <div className="index-hero-image">
            <div className="Imgandcontentslide">
            <img
              src={require("../Images/csc/PM kissan.jpeg")}
              alt="PM kissan"
            />
            <div className="Doccontent">
               <div className="tags"> <span>Government Scheme</span> </div>
                <h1>PM kissan</h1>
                <p>PM Kisan is a Central Sector scheme with 100% funding from Government of India. It has become operational from 1.12.2018. Under the scheme an income support of 6,000/- per year in three equal installments will be provided to all land holding farmer families.</p>
                <Link to="/signup">Continue Reading <FontAwesomeIcon icon={faAngleRight} /> </Link>
                </div>
            </div>
          </div>

          <div className="index-hero-image">
            <div className="Imgandcontentslide">
            <img
              src={require("../Images/csc/Resume.jpg")}
              alt="Resume"
            />
            <div className="Doccontent">
               <div className="tags"> <span>Resume</span> </div>
                <h1>Resume</h1>
                <p>A resume is a formal document that provides an overview of your professional qualifications. Also known as a “CV” outside of the US, it should include your relevant work experience, skills, education, and notable accomplishments. If you’re applying for a job, you need a resume to be considered for the position.</p>
                <Link to="/signup">Continue Reading <FontAwesomeIcon icon={faAngleRight} /> </Link>
                </div>
            </div>
          </div>

         
        </Slider>
        {/* <h2>Every solution we deliver is built on trust</h2> */}
      
       
      </div>
    </div>
  );
}
export default AutoPlayMethods;