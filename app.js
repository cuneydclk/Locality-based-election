const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const milletvekiliVoteBoxRouter = require('./routes/milletvekiliVoteBoxRoutes');
const cumhurBaskanligiVoteBoxRouter = require('./routes/cumhurBVoteBoxRoutes');
const loginRouter = require('./routes/loginRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/vote/cumhurB', cumhurBaskanligiVoteBoxRouter);
app.use('/api/v1/vote/milletvekili', milletvekiliVoteBoxRouter);
app.use('/api/v1/login', loginRouter);




app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
