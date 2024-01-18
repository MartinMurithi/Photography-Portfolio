import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
function About() {
  const navigate = useNavigate();

  return (
    <div className="aboutSectionParent">
      <div className="aboutSection">
        <div className="aboutImageParent">
          <img
            src="/assets/about-image.webp"
            alt="About Author"
            width="100%"
            height="auto"
            loading="lazy"
            className="aboutImage"
          />
        </div>

        <div className="aboutTextContainer">
          <h4 className="aboutMeTitle">About Me</h4>
          <p className="aboutMeText">
            "I am a nature enthusiast as well as a Photographer specializing in capturing the nuances of different environments and places in Kenya.
          I have travelled with Hikes and Trails Kenya in most of my travel photos. Some of the best shots are sold as Art merch, feel free to check them out."</p>

          <div className="contactsContainer">
            <div className="mobile">
              <img
                src="/assets/icons8-phonecall-24 .png"
                alt="Phonecall Icon"
                width="20px"
                height="20px"
              />
              <a href="tel:+254 759 213019">+254 759 213019</a>
            </div>

            <div className="mobile">
              <img
                src="/assets/icons8-email-50.png"
                alt="Email Icon"
                width="20px"
                height="20px"
              />
              <a href="mailto:roywanguip@gmail.com">roywanguip@gmail.com</a>
            </div>
          </div>
          <button className="contactBtn" onClick={()=>navigate("contact")}>GET IN TOUCH</button>
        </div>
      </div>
    </div>
  );
}

export default About;
