const express = require('express')
const router = express.Router()
const voteBoxController = require('../controllers/voteBoxController')



router
    .route('/')
    .get(voteBoxController.deleteAllVotes);



module.exports = router;