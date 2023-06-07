const VoteBox = require('../models/voteBoxModel');



exports.getAllVoteBox = async (req, res) => {
  try {
    const voteBoxes = await VoteBox.find();
    res.status(200).json({
      status: 'success',
      results: voteBoxes.length,
      data: {
        voteBoxes
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
