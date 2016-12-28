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


// In every view we need to know if they are authenticated for the header, so add to locals
app.use(function(req, res, next) {
  res.locals.isAuthenticated = req.isAuthenticated();
  console.log('locals', res.locals);
  next();
});

app.get('/', (req, res) => { res.render('index.ejs'); });

// The routes for the authentication stuff goes in this separate route file.
app.use(require('./account-routes.js')(passport));

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

// The react app will go here
app.get('/app', function(req, res) {
  passport.authenticate('local');
  res.render('app.ejs');
});

app.listen(5000, function() {
  console.log('listening on port 5000.');
});
