const { check } = require('express-validator')

exports.userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email'),
    check('password')
        .isLength({ min: 6})
        .withMessage('Password must be 6 character long'),

];

exports.userSigninValidator = [
    check('email')
        .isEmail()
        .withMessage('Must be a valid email'),
    check('password')
        .isLength({ min: 6})
        .withMessage('Password must be 6 character long'),

];

