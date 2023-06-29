const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const adminController = require('../controllers/adminController')



router
    .route('/')
    .post(authController.login);


router
    .route('/createAdmin')
    .post(adminController.createAdmin);


module.exports = router;