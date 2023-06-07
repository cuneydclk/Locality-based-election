const express = require('express')
const router = express.Router()
const voteBoxController = require('../controllers/voteBoxController')


//bütün sonuçları döndürcek

router
    .route('/')
    .get(voteBoxController.getAllVoteBox);