const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route     POST api/users
// @desc      Register a user
// @access    Public
router.post(
  '/',
  [
    check('firstName', 'Please add your first name').not().isEmpty(),
    check('lastName', 'Please add your last name').not().isEmpty(),
    check('address', 'Please add your address').not().isEmpty(),
    check('city', 'Please add your city').not().isEmpty(),
    check('state', 'Please add your state').not().isEmpty(),
    check('zipCode', 'Please add your zip code').not().isEmpty(),
    check('phoneNumber', 'Please add your phone number').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      address,
      aptSuite,
      city,
      state,
      zipCode,
      phoneNumber,
      email,
      password,
    } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        firstName,
        lastName,
        address,
        aptSuite,
        city,
        state,
        zipCode,
        phoneNumber,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;