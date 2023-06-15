const mongoose = require('mongoose');

const cumhurBVoteSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
  },
  ballot_list: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ballot',
      required: true,
    },
  ],
});

const cumhurBVote = mongoose.model('CumhurBVote', cumhurBVoteSchema);

module.exports = cumhurBVote;
