const mongoose = require('mongoose');

// Create a schema for the voteBox object
const voteBoxSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    voteNumber: {
        type: Number,
        required: true
    }
});


const VoteBox = mongoose.model('VoteBox', voteBoxSchema);

module.exports = VoteBox;