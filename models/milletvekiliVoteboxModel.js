const mongoose = require('mongoose');
const Ballot = require('./ballotModel');

const milletvekiliVoteSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
  },
  ballot_list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ballot',
    required: true,
  },
});

const MilletvekiliVote = mongoose.model('MilletvekiliVote', milletvekiliVoteSchema);

module.exports = MilletvekiliVote;
