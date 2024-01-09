import React from "react";
import "./About.css";
function About() {
  return (
    <div className="aboutSectionParent">
      <div className="aboutSection">
        <div className="aboutImageParent">
          <img
            src="/assets/about-image.jpg"
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
            "Capturing the vibrant essence of Nairobi, Kenya, I am a passionate
            photographer dedicated to framing the beauty of moments in this
            dynamic city. With a keen eye for detail and the artistic touch of
            Adobe's powerful suite, I leverage cutting-edge technology to bring
            stories to life through my lens. From composition to
            post-processing, my work reflects the seamless fusion of traditional
            photography skills with the latest digital tools, ensuring each
            image tells a compelling tale of culture, diversity, and the rich
            tapestry of life in Nairobi."
          </p>

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
          <button className="contactBtn">GET IN TOUCH</button>
        </div>
      </div>
    </div>
  );
}

export default About;
