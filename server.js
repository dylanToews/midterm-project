// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


// Separated Routes for each Resource
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const quizzesRoutes = require('./routes/ind-quiz');
const createRoutes = require('./routes/create-quiz');
const answerRoutes = require('./routes/answers');
const indexRoutes = require('./routes/index-routes');
const loginRoutes = require('./routes/login-routes');
const correctAnswer = require('./routes/correct');



// Mount all resource routes
// Note: Endpoints that return data (eg. JSON) usually start with `/api`


app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);

//test api for rendering all content on index page

// const apiRouter = express.Router();
// indexRoutes(apiRouter, database);
// app.use('/api', apiRouter);


app.use('/', quizzesRoutes);
app.use('/', createRoutes);
app.use('/', answerRoutes);
app.use('/', indexRoutes);
app.use('/', loginRoutes);
app.use('/', correctAnswer);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
