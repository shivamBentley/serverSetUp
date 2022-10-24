var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/indexRoutes');
var usersRouter = require('./routes/usersRoutes');
const authRoutes = require('./routes/authRoutes');
// const { requireAuth, checkUser } = require('./middleware/authMiddleware');

//Express App
var app = express();

//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
// app.get('*', checkUser); 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(authRoutes);

module.exports = app;