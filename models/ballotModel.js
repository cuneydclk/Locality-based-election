const mongoose = require('mongoose');

const ballotSchema = new mongoose.Schema({
  ballot_no: {
    type: String,
    required: true
  },
  results: {
    type: [[String]],
    required: true
  }
});

const Ballot = mongoose.model('Ballot', ballotSchema);

module.exports = Ballot;