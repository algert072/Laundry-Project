const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
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
    check('zipCode', 'Please add your zip code').not().isEmpty(),
    check('phoneNumber', 'Please add your phone number').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
  ],
  async (req, res) => {

    const {
      firstName,
      lastName,
      address,
      aptSuite,
      city,
      zipCode,
      phoneNumber,
      email,
      pickUpDay,
      pickUpInstructions
    } = req.body.userInfo;

    try {
        let query = {"email": email}
        let user1 = await User.findOneAndUpdate(query, [
            { $set: {firstName: firstName, 
                     lastName: lastName, 
                     address: address, 
                     aptSuite: aptSuite, 
                     city: city, 
                     zipCode: zipCode,
                     phoneNumber: phoneNumber,
                     pickUpDay: pickUpDay,
                     pickUpInstructions: pickUpInstructions
                    } 
                }
        ]);

        let user = await User.findOne({ email });

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
