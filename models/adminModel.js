const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "Please provide a username"]
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Please provide a password"]
  },
  isAdmin: {
    type: Boolean,
    default: true,
  }
});




const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
