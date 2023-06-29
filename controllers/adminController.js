const catchAsync = require('../utils/catchAsync');
const Admin = require('../models/adminModel');




exports.createAdmin = catchAsync(async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.create({ username, password });
    res.status(201).json({
      status: "success",
      data: {
        admin,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});