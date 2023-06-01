const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const app = express()
const cors = require('cors')

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())

module.exports = app;