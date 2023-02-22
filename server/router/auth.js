const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/userSchema');

require('../db/conn');

router.get('/', (req, res) => {
  res.send('Hello World from server router.js');
});

router.post('/register', (req, res) => {
  console.log(req.body);
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: 'Please fill the field properly' });
  }

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: ' Email Already exist' });
      }

      const user = new User({ name, email, phone, work, password, cpassword });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: ' user is registered successfully' });
        })
        .catch((err) => res.status(500).json({ error: 'Failed to register' }));
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
