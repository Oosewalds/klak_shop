const User = require("../models/user.js");
const bcrypt = require('bcrypt');


exports.signup = (req, res, next) => {

    password = req.body.password;
    const hashPassword = bcrypt.hashSync(password, 10);
  
    const user = new User({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: hashPassword,
        streetNumber: req.body.streetNumber,
        streetName: req.body.streetName,
        zipCode: req.body.zipCode,
    });
    user.save().then(
      () => {
        res.status(201).json({
          message: 'User added !'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: "Pas valide"
        });
      }
    );
  };
  