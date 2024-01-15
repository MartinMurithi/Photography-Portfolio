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

      {/* <div className="form-container">
        <form action="#" method="post">
          <div className="formNames">
            <div className="firstName">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" name="first_name" required />
            </div>

            <div className="lastName">
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


          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="7" required></textarea>
          </div>

          <div className="submitBtn">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div> */}

 <div class="formSectionParent" id="contactForm">
      <section class="formQuoteSection">
        <div class="formParent">
          <form action="" class="form">
            {/* <!-- Left Side --> */}
            <div class="inputParents">
              <div class="leftSide">
                <label htmlFor="name">Names<input
                  type="text"
                  placeholder="John Doe"
                  id="name"
                  class="formInput"
                /></label>              
                
               <label htmlFor="mobile">Mobile                <input
                  type="tel"
                  placeholder="+254 798 278 356"
                  class="formInput"
                  id="mobile"
                /></label>

                

              </div>
              {/* <!-- Right Side --> */}
              <div class="rightSide">
                <label htmlFor="email">Email                 <input
                  type="email"
                  id="email"
                  placeholder="johndoe@gmail.com"
                  class="formInput"
                /></label>

<label htmlFor="subject">Subject                <input
                  type="text"
                  placeholder="Subject"
                  class="formInput"
                  id="subject"
                /></label>

   
              </div>
              <label htmlFor="message">Message              <textarea
                name="message"
                id="Message"
                cols="30"
                rows="9"
                placeholder="Your Message"
                class="formInput"
              ></textarea></label>

              <button type="button" class="formBtn">Send</button>
            </div>
          </form>
        </div>
      </section>
    </div>

    </div>
  );
}

export default Form;
