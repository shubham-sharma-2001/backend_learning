import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Swal from 'sweetalert2';
const Signin = ({ setLoginUser }) => {
  const navigate = useNavigate();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const loginuser = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch('/signin', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   });
  //   const data = await res.json();

  //   if (data.status === 200 || data) {
  //     Swal.fire(data.message);
  //     navigate('/');
  //   } else {
  //     Swal.fire({
  //       text: data.message,
  //     });
  //     navigate('/signin');
  //   }
  // };

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(user)

    setUser({
      ...user,
      [name]: value,
    });
  };

  const loginuser = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:7000/signin', user).then((res) => {
      Swal.fire(res.data.message);
      // setLoginUser(res.data.user);
      console.log(res);
      navigate('/');
    });
  };

  return (
    <div>
      <div>
        <div className="signup-form">
          <div className="container">
            <div className="header">
              <h1>Sign In</h1>
            </div>
            <form method="POST" className="register-form" id="register-form">
              <div className="input">
                <i class="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Your Email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input">
                <i class="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  value={user.password}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              <input
                className="signup-btn"
                type="submit"
                value="Log In"
                name="signup"
                id="signup"
                onClick={loginuser}
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
