const mongoose = require('mongoose');

// Create a schema for the admin object
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    isAdmin:{
        type: Boolean,
        default: true
    }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;