const mongoose = require('mongoose');

// Create a schema for the candidate object
const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    party: {
        type: String,
        required: true,
        trim: true
    },
    voteNumber: {
        type: Number,
        required: true
    }
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
