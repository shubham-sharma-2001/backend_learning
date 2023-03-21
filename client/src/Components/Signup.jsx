import React, { useState } from 'react';
import '../Components/Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Signup = () => {
  // const history = useHistory();
  const navigate = useNavigate();
  const [user, SetUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    SetUser({ ...user, [name]: value });
  };

  // const postdata = async (e) => {
  //   e.preventDefault();
  //   const { name, email, phone, work, password, cpassword } = user;
  //   const res = await fetch('/register', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       phone,
  //       work,
  //       password,
  //       cpassword,
  //     }),
  //   });
  //   const data = await res.json();
  //   if (data.status === 200 || data) {
  //     // window.alert('Invalid registration');
  //     window.alert(data.message);
  //     navigate('/signin');
  //     // console.log('Invalid registration');
  //   } else {
  //     // window.alert('Done registration');
  //     window.alert(data.message);

  //     // console.log('Suuccess registration');
  //   }
  // };

  const postdata = async(e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    console.log(user);
    if (name && email && phone && work && password === cpassword) {
      await axios.post('http://localhost:7000/register', user).then((res) => {
        if (res.status === 200) {
          Swal.fire(res.data.message);
          navigate('/signin');
        } else if (res.status === 422 || res.status === 400) {
          Swal.fire(res.data.message);
        }
      });
    }
  };

  return (
    <div>
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>Create an Account</h1>
          </div>
          <form
            onSubmit={postdata}
            method="POST"
            className="register-form"
            id="register-form"
          >
            <div className="input">
              <i class="fa-solid fa-user-tie"></i>

              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                autoComplete="off"
                value={user.name}
                onChange={handleInputs}
              />
            </div>
            <div className="input">
              <i class="fa-solid fa-envelope"></i>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInputs}
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
                value={user.phone}
                onChange={handleInputs}
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
                value={user.work}
                onChange={handleInputs}
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
                value={user.password}
                onChange={handleInputs}
              />
            </div>
            <div className="input">
              <i class="fa-sharp fa-solid fa-lock"></i>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                autoComplete="off"
                value={user.cpassword}
                onChange={handleInputs}
                placeholder="Confirm Password"
              />
            </div>
            <input
              className="signup-btn"
              type="submit"
              value="Register"
              name="signup"
              id="signup"
              // onClick={postdata}
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
