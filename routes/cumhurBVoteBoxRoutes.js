const express = require('express')
const router = express.Router()
const voteBoxController = require('../controllers/voteBoxController')



router
    .route('/')
    .get(voteBoxController.getAllCumhurBaskanligiVote)
    .post(voteBoxController.postCumhurBaskanligiVote);


module.exports = router;