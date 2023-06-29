const catchAsync = require('../utils/catchAsync');  
const express = require("express");
const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");






// Function to sign a token
const signToken = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};



exports.login = async (req, res, next) => {
  try {
    // Get username and password from request body
    const { username, password } = req.body;

    // Find admin by username
    const admin = await Admin.findOne({ username });

    // Check if admin exists and password is correct
    if (!admin || admin.password !== password) {
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect username or password',
      });
    }

    // Generate JWT token
    const secretKey = 'your-secret-key'; // Define your secret key
    const expiresIn = '1h'; // Define token expiration time
    const token = jwt.sign({ adminId: admin._id }, secretKey, { expiresIn });

    res.status(200).json({
      status: 'success',
      token,
      data: {
        admin,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};




