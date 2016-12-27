var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');

var app = express();
app.use(express.static('public'));

// Setup session and auth
app.use(session({
  secret: 'wearing pants'
}));
app.use(passport.initialize()); // Sets up passport middleware
app.use(passport.session()); // For persistent auth, we need sessions
require('./authentication.js')(passport); // Where the authentication configuration is





// Need to be able to post info
app.use(bodyParser.urlencoded({ extended: false }))

// Tells express to use ejs
app.set('view engine', 'ejs');
// Since we have our "views" directory in our server directory, have to configure
app.set('views', path.join(__dirname, '/views'));


app.get('/login', function(req, res) {
  res.render('login.ejs');
});

app.post('/login',
  passport.authenticate('local-login',
                        { successRedirect: '/app',
                          failureRedirect: '/login' }),
  function(req, res) {
});

app.get('/create-account', function(req, res) {
  res.render('create_account.ejs');
});

app.post('/create-account', function(req, res) {
  console.log('posted', req.body);
  res.send('good job');
});

// All routes after this point require authentication

app.use(function(req, res, next) {
  var isAuthed = req.isAuthenticated();
  console.log('authentication middleware - is authed?', isAuthed);
  if (!isAuthed) {
    res.redirect('/login');
    return;
  }

  next();
});

app.get('/app', function(req, res) {
  passport.authenticate('local');
  res.render('app.ejs');
});

app.listen(5000, function() {
  console.log('listening on port 5000.');
});
