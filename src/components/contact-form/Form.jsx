import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="formSection">
      <h4 className="contactFormTitle">Get In Touch</h4>
      <p className="contactText">
        Let's connect. Fill out our form and let me know which service you are
        interested in and I'll be in touch asap regarding your inquiry.
      </p>

      <div className="contactsInquiry">
        <div className="mobileInquiry">
          <img
            src="/assets/icons8-phonecall-24 .png"
            alt="Phonecall Icon"
            width="20px"
            height="20px"
          />
          <a href="tel:+254 759 213019">+254 759 213019</a>
        </div>

        <div className="mobileInquiry">
          <img
            src="/assets/icons8-email-50.png"
            alt="Email Icon"
            width="20px"
            height="20px"
          />
          <a href="mailto:roywanguip@gmail.com">roywanguip@gmail.com</a>
        </div>
      </div>

      <div class="form-container">
        <form action="#" method="post">
          <div class="formNames">
            <div className="firstName">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" name="first_name" required />
            </div>

            <div class="lastName">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" name="last_name" required />
            </div>
          </div>

          <div className="name-email">
            <div className="name">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="email">
              <label htmlFor="mobile">Mobile</label>
              <input type="tel" id="mobile" name="mobile" required />
            </div>
          </div>


          <div class="message">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="7" required></textarea>
          </div>

          <div class="submitBtn">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
