const { check } = require("express-validator");

//Registro
exports.validRegister = [
  check("name", "Complete el nombre")
    .notEmpty()
    .isLength({
      min: 4,
      max: 32,
    })
    .withMessage("el nombre debe contener entre 3 y 32 caracteres"),
  check("email").isEmail().withMessage("Ingrese un correo valido"),
  check("password", "password es requerido").notEmpty(),
  check("password")
    .isLength({
      min: 6,
    })
    .withMessage("Password debe contener al menos 6 caracteres")
    .matches(/\d/)
    .withMessage("password debe contener un numero"),
];

//Login
exports.validLogin = [
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password", "password is required").notEmpty(),
  check("password")
    .isLength({
      min: 6,
    })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("password must contain a number"),
];

exports.forgotPasswordValidator = [
  check("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Must be a valid email address"),
];

exports.resetPasswordValidator = [
  check("newPassword")
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be at least  6 characters long"),
];
