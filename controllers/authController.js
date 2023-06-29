const catchAsync = require('../utils/catchAsync');  




exports.login = catchAsync(async (req, res, next) => {
    const body = Object.keys(req.body)[0];
    const fixedResponse = body.replace(/'/g, '"');
    const parsedResponse = JSON.parse(fixedResponse);
    const { email, retrievedPassword } = parsedResponse;

    if (!email || !retrievedPassword) {
      return next(new AppError("Please provide email and password!", 400));
    }
    const users = await datas;
    const password = user.password;
    const student = await Student.findOne({
      iztechMail: user.iztechMail,
    }).select("+password");
    const admin = await Admin.findOne({
      iztechMail: user.iztechMail,
    }).select("+password");
  
    if (student) {
      const isPasswordCorrect = await student.correctPassword(
        retrievedPassword,
        student.password
      );
      if (isPasswordCorrect) {
        const token = signToken(student._id);
  
        return res.status(200).json({
          status: "success",
          token,
          sid: student._id,
          name: student.name,
          surname: student.surname,
          studentNumber: student.studentNumber,
          department: student.department,
          iztechMail: student.iztechMail,
          isCandidate: student.isCandidate,
          isNominee: student.isNominee,
          isVoted: student.isVotedForDepartment,
        });
      }
      if (!isPasswordCorrect) {
        res.status(401).json({
          status: "fail",
          message: "Incorrect email or password",
        });
      }
    }
    if (admin) {
      const isPasswordCorrect = await admin.correctPassword(
        retrievedPassword,
        admin.password
      );
      if (isPasswordCorrect) {
        const token = signToken(admin._id);
  
        return res.status(200).json({
          status: "success",
          token,
          aid: admin._id,
          name: admin.name,
          surname: admin.surname,
          email: admin.iztechMail,
          isAdmin: admin.isAdmin,
        });
      }
      if (!isPasswordCorrect) {
        res.status(401).json({
          status: "fail",
          message: "Incorrect email or password",
        });
      }
    }
  
    return next(new AppError("Incorrect email or password", 401));
  });




// export.login = catchAsync(async (req, res, next) => {
//     const body = Object