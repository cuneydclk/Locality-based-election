const mongoose = require('mongoose');

const milletvekiliVoteSchema = new mongoose.Schema({
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
  millet: {
    type: Number,
    required: true
  },
  hakPar: {
    type: Number,
    required: true
  },
  tkp: {
    type: Number,
    required: true
  },
  tkh: {
    type: Number,
    required: true
  },
  solParti: {
    type: Number,
    required: true
  },
  gencParti: {
    type: Number,
    required: true
  },
  memleket: {
    type: Number,
    required: true
  },
  bbp: {
    type: Number,
    required: true
  },
  akParti: {
    type: Number,
    required: true
  },
  yenidenRefah: {
    type: Number,
    required: true
  },
  mhp: {
    type: Number,
    required: true
  },
  yesilSol: {
    type: Number,
    required: true
  },
  ab: {
    type: Number,
    required: true
  },
  anap: {
    type: Number,
    required: true
  },
  yp: {
    type: Number,
    required: true
  },
  hkp: {
    type: Number,
    required: true
  },
  milliYol: {
    type: Number,
    required: true
  },
  vatanPartisi: {
    type: Number,
    required: true
  },
  gbp: {
    type: Number,
    required: true
  },
  chp: {
    type: Number,
    required: true
  },
  iyiParti: {
    type: Number,
    required: true
  },
  ap: {
    type: Number,
    required: true
  },
  zaferPartisi: {
    type: Number,
    required: true
  }
});

const MilletvekiliVote = mongoose.model('MilletvekiliVote', milletvekiliVoteSchema);

module.exports = MilletvekiliVote;
