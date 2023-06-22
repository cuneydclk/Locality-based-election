const express = require('express')
const router = express.Router()
const voteBoxController = require('../controllers/voteBoxController')



router
    .route('/')
    .get(voteBoxController.getAllMilletvekiliVote)
    .post(voteBoxController.postMilletvekiliVote);


router
    .route('/array')
    .post(voteBoxController.postMilletvekilligiVoteArray);


router
    .route('/:mahalleName')
    .get(voteBoxController.getMilletvekiliVoteMahalle);


router
    .route('/box/:boxNumber')
    .get(voteBoxController.getMilletvekiliVoteBoxNumber);

module.exports = router;