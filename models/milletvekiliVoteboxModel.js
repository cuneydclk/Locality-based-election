const mongoose = require('mongoose');

const milletvekiliVoteSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
  },
  ballot_list: {
    type: Number,
    ref: 'Ballot',
    required: true,
  },
});

const MilletvekiliVote = mongoose.model('MilletvekiliVote', milletvekiliVoteSchema);

module.exports = MilletvekiliVote;
