const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const app = express()
const cors = require('cors')
const milletvekiliVoteBox = require('./routes/milletvekiliVoteBox')

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())

//routes
app.use("/api/v1/votes/milletvekili", milletvekiliVoteBox);



module.exports = app;