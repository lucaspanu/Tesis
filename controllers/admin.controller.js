const User = require('../models/auth.model');
const { validationResult } = require('express-validator');
// Custom error handler to get useful error from databse errors
const { errorHandler } = require('../helpers/dbErrorHandling');

// Models
const Clases = require("../models/clases.model");

exports.adminRegisterController = (req, res) => {
    const { name, email, password, role } = req.body;
    const errors = validationResult(req);
    
    // Validation req, body we will create custom validation in seconds
    if (!errors.isEmpty()) {
        const firstError = errors.array().map(error => error.msg)[0];
        return res.status(422).json({
          errors: firstError
        });
      } else {
      User.findOne({
        email
      }).exec((err, user) => {
        //   If user exists
        if (user) {
            return res.status(400).json({
            errors: 'Email is taken'
          });
        }
    });
    
    const user = new User({
      name,
      email,
      password,
      role
    });

    user.save((err, user) => {
      if (err) {
        console.log('Save error', errorHandler(err));
        return res.status(401).json({
          errors: errorHandler(err)
        });
      } else {
        return res.json({
          success: true,
          message: user,
          message: 'Registro Exitoso'
        });
      }
    });
}
};

