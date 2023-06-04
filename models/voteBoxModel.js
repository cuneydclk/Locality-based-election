const mongoose = require('mongoose');

// Create a schema for the voteBox object
const voteBoxSchema = new mongoose.Schema({
    cityName: {
        type: String,
        required: true,
        trim: true
    },
    districtName: {
        type: String,
        required: true,
        trim: true
    },
    neighborhoodName: {
        type: String,
        required: true,
        trim: true
    },
    boxNumber: {
        type: Number,
        required: true
    },
    numberOfVoters: {
        type: Number,
        required: true
    },
    numberOfVotersWhoVoted:{
        type: Number,
        required: true
    },
    validVoteNumber: {
        type: Number,
        required: true
    },
    invalidVoteNumber: {
        type: Number,
        required: true
    },
    voteToParty: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VoteToParty'
    }],
    voteToCandidate: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VoteToCandidate'
    }]
});


const VoteBox = mongoose.model('VoteBox', voteBoxSchema);

module.exports = VoteBox;