const mongoose = require('mongoose');
const Ballot = require('./ballotModel');

const SchoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  ballots: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ballot',
      required: true,
    },
  ],
});

const School = mongoose.model('School', SchoolSchema);

module.exports = School;
