import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";

function Form() {
  const [user, setUser] = useState({
    name:"",
    mobile:"",
    email:"",
    subject:"",
    message:""
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b39cy22",
        "template_n5tav9n",
        form.current,
        "qX1VIBx3eqaB-FU2P"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      setUser({
        name:"",
        mobile:"",
        email:"",
        subject:"",
        message:""
      })
  };
  return (
    <div className="formSectionPage">
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

      <div className="formSectionParent" id="contactForm">
        <section className="formSection">
          <div className="formParent">
            <form className="form" ref={form} onSubmit={sendEmail}>
              {/* <!-- Left Side --> */}
              <div className="inputParents">
                <div className="leftSide">
                  <label htmlFor="name">
                    Names
                    <input
                      type="text"
                      placeholder="John Doe"
                      id="name"
                      name="name"
                      required
                      value={user.name}
                      onChange={(e) =>
                        setUser({ ...user, name: e.target.value })
                      }
                      className="formInput"
                    />
                  </label>

                  <label htmlFor="mobile">
                    Mobile
                    <input
                      type="tel"
                      placeholder="+254 798 278 356"
                      className="formInput"
                      name="mobile"
                      id="mobile"
                      required
                      value={user.mobile}
                      onChange={(e) =>
                        setUser({ ...user, mobile: e.target.value })
                      }
                    />
                  </label>
                </div>
                {/* <!-- Right Side --> */}
                <div className="rightSide">
                  <label htmlFor="email">
                    Email
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                      placeholder="johndoe@gmail.com"
                      className="formInput"
                    />
                  </label>

                  <label htmlFor="subject">
                    Subject
                    <input
                      type="text"
                      placeholder="Subject"
                      className="formInput"
                      id="subject"
                      name="subject"
                      value={user.subject}
                      onChange={(e) =>
                        setUser({ ...user, subject: e.target.value })
                      }
                      required
                    />
                  </label>
                </div>
                <label htmlFor="message">
                  Message
                  <textarea
                    name="message"
                    id="Message"
                    cols="30"
                    rows="10"
                    required
                    value={user.message}
                    onChange={(e) => setUser({ ...user, message: e.target.value })}
                    placeholder="Your Message"
                    className="formInput"
                  ></textarea>
                </label>

                <button type="submit" className="formBtn">
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Form;
