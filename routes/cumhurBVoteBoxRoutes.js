const express = require('express')
const router = express.Router()
const voteBoxController = require('../controllers/voteBoxController')



router
    .route('/')
    .get(voteBoxController.getAllCumhurBaskanligiVote)
    .post(voteBoxController.postCumhurBaskanligiVote);

router
    .route('/array')
    .post(voteBoxController.postCumhurBaskanligiVoteArray);

router
    .route('/:mahalleName')
    .get(voteBoxController.getCumhurBaskanligiVoteMahalle);

router
    .route('/box/:boxNumber')
    .get(voteBoxController.getCumhurBaskanligiVoteBoxNumber);


module.exports = router;