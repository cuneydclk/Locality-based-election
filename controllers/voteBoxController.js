const milletvekiliVoteBoxModel = require('../models/milletvekiliVoteboxModel');
const cumhurBaskanligiVoteBoxModel = require('../models/cumhurBVoteboxModel');



exports.getAllMilletvekiliVote = async (req, res, next) => {
  try {
    const milletvekiliVote = await milletvekiliVoteBoxModel.find();
    res.status(200).json({
      status: 'success',
      results: milletvekiliVote.length,
      data: {
        milletvekiliVote
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


exports.postMilletvekiliVote = async (req, res, next) => {
  try {
    const newMilletvekiliVote = await milletvekiliVoteBoxModel.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        milletvekiliVote: newMilletvekiliVote
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
}



exports.getAllCumhurBaskanligiVote = async (req, res, next) => {
  try {
    const cumhurBaskanligiVote = await cumhurBaskanligiVoteBoxModel.find();
    res.status(200).json({
      status: 'success',
      results: cumhurBaskanligiVote.length,
      data: {
        cumhurBaskanligiVote
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


exports.postCumhurBaskanligiVote = async (req, res, next) => {
  try {
    const newCumhurBaskanligiVote = await cumhurBaskanligiVoteBoxModel.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        cumhurBaskanligiVote: newCumhurBaskanligiVote
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
}
