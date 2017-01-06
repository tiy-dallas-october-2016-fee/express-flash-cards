var PassportLocalStrategy = require('passport-local').Strategy;
var datasource = require('./datasource.js');
var User = require('./models/user');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });




  passport.use('local-login', new PassportLocalStrategy({
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true
    },
    function(req, username, password, done) {

      var success = function(user) {
        done(null, user);
      }

      var failure = function() {
        done(null, false, { message: 'Invalid login' });
      }

      datasource.validateLogin(username, password, success, failure);
    }
  ));

  passport.use('local-create-account',
    new PassportLocalStrategy({
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true
    },
    function(req, email, password, done) {

      var newUser = new User({
        email: email,
        password: password
      });
      newUser.save(function(err, user) {
        console.log('done saving', arguments);
        done(null, user);
      });

      // datasource.createUser(email, password, function(user) {
      //   done(null, user);
      // });
    }));

}
