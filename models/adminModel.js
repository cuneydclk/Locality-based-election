const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  }
});




const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
