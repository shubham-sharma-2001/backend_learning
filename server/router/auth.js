const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/userSchema');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('../db/conn');

// Using promises

// router.get('/', (req, res) => {
//   res.send('Hello World from server router.js');
// });

// router.post('/register', (req, res) => {
//   console.log(req.body);
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: 'Please fill the field properly' });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: ' Email Already exist' });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: ' user is registered successfully' });
//         })
//         .catch((err) => res.status(500).json({ error: 'Failed to register' }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// Using await and async of register route

router.post('/register', async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: 'Please fill the field properly' });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: 'Email already exist' });
    } else if (password != cpassword) {
      res.status(422).json({ error: 'password not matching' });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();

      res.status(201).json({ message: 'user register Successfully' });
    }
  } catch (err) {
    console.log(err);
  }
});

// login route
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'plz fill the data' });
    }

    const userLogin = await User.findOne({
      email: email, //check if the email is same as in the database
    });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie('jwtoken', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: 'Invalid Credential' });
      } else {
        res.status(200).json({ message: ' user siginin successfully' });
      }
    } else {
      res.status(400).json({ error: ' invalid Credential' });
    }
    console.log(userLogin);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
