const mongoose = require('mongoose');

const cumhurBVoteSchema = new mongoose.Schema({
  mahalleName: {
    type: String,
    required: true,
    trim: true
  },
  boxNumber: {
    type: Number,
    required: true,
    unique: true
  },
  totalVote: {
    type: Number,
    required: true
  },
  rte: {
    type: Number,
    required: true
  },
  ince: {
    type: Number,
    required: true
  },
  kemal: {
    type: Number,
    required: true
  },
  sinan: {
    type: Number,
    required: true
  }
});

const cumhurBVote = mongoose.model('CumhurBVote', cumhurBVoteSchema);

module.exports = cumhurBVote;
