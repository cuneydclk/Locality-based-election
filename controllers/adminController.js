const catchAsync = require('../utils/catchAsync');



exports.createAdmin = catchAsync(async (req, res, next) => {
    const { name, surname, password } = req.body;
    const newAdmin = new Admin({
      name,
      surname,
      password
    });
    await newAdmin.save();
    res.status(200).json({
      status: "success",
      data: {
        newAdmin,
      },
    });
});