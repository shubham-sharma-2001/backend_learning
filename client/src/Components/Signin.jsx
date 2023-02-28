import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div>
      <div>
        <div className="signup-form">
          <div className="container">
            <div className="header">
              <h1>Sign In</h1>
            </div>
            <form className="register-form" id="register-form">
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
                <i class="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  autoComplete="off"
                />
              </div>

              <input
                className="signup-btn"
                type="submit"
                value="Log In"
                name="signup"
                id="signup"
              />
            </form>

            <p>
              <Link to="/signup">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
