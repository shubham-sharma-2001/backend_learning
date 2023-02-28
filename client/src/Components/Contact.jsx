import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div>
      <div className="contains_details">
        <div className="phone">
          <div className="phone_input">
            <i class="fa-solid fa-phone"></i>
            <h3>Phone</h3>
          </div>
          <p>+91 22212121</p>
        </div>
        <div className="email">
          <div className="email_input">
            <i class="fa-solid fa-envelope"></i>
            <h3>Email</h3>
          </div>
          <p>Email.com</p>
        </div>
        <div className="address">
          <div className="address_input">
            <i class="fa-solid fa-location-dot"></i>
            <h3>Address</h3>
          </div>
          <p>h.m school</p>
        </div>
      </div>
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>Get in Touch</h1>
          </div>
          <form className="register-form" id="contact_form">
            <div className="input">
              <i class="fa-solid fa-user-tie"></i>

              <input
                type="text"
                id="contact_form_name"
                className="contact_form_name"
                placeholder="Your Name"
                required="true"
              />
            </div>
            <div className="input">
              <i class="fa-solid fa-envelope"></i>
              <input
                type="email"
                id="contact_form_email"
                className="contact_form_email"
                autoComplete="off"
                placeholder="Your Email"
              />
            </div>
            <div className="input">
              <i class="fa-solid fa-phone-volume"></i>
              <input
                type="number"
                id="contact_form_phone"
                className="contact_form_phone"
                autoComplete="off"
                placeholder="Mobile Number"
              />
            </div>

            <div className="input">
              <i class="fa-sharp fa-solid fa-lock"></i>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                autoComplete="off"
                placeholder="Confirm Password"
              />
            </div>

            <div className="input">
              <textarea
                rows="4"
                cols="50"
                placeholder="Message"
                className="text_field"
              ></textarea>
            </div>

            <button className="signup-btn" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
