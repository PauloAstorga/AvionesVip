var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv').config();
var session = require('express-session');

var indexRouter = require('./routes/index'); 
var loginRouter = require('./routes/login');
var signinRouter = require('./routes/sign-up');
var aboutRouter = require('./routes/about');
var myAccountRouter = require('./routes/my-account');
var logOutRouter = require('./routes/logout');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session management
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}));
app.use(function(req,res,next){
  res.locals.session = req.session;
  next();
});

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/sign-up', signinRouter);
app.use('/about', aboutRouter);
app.use('/my-account', myAccountRouter);
app.use('/logout', logOutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
