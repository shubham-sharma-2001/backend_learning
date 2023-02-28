import React from 'react';
import '../Components/Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>Create an Account</h1>
          </div>
          <form className="register-form" id="register-form">
            <div className="input">
              <i class="fa-solid fa-user-tie"></i>

              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                autoComplete="off"
              />
            </div>
            <div className="input">
              <i class="fa-solid fa-envelope"></i>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Your Email"
              />
            </div>
            <div className="input">
              <i class="fa-solid fa-phone-volume"></i>
              <input
                type="number"
                name="phone"
                id="phone"
                autoComplete="off"
                placeholder="Mobile Number"
              />
            </div>
            <div className="input">
              <i class="fa-sharp fa-solid fa-briefcase"></i>
              <input
                type="text"
                name="work"
                id="work"
                placeholder="Your Profession"
                autoComplete="off"
              />
            </div>

            <div className="input">
              <i class="fa-solid fa-lock"></i>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                autoComplete="off"
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
            <input
              className="signup-btn"
              type="submit"
              value="Register"
              name="signup"
              id="signup"
            />
          </form>

          <p>
            Already have an account <Link to="/signin">sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
