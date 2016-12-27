var PassportLocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    console.log('serialize user');
    done(null, 7);
  });

  passport.deserializeUser(function(id, done) {
    console.log('deserialize user');
    done(null, { name: 'bob' })
    //User.findById(id, function(err, user) {
    //  done(err, user);
    //});
  });




  passport.use('local-login', new PassportLocalStrategy({
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true
    },
    function(req, username, password, done) {
      console.log('local strategery', username, password);
      if (username == "test" && password == "test") {
        done(null, 'hello');
      }
      else {
        done(null, false, { message: 'Invalid login' });
      }
    }
  ));

}
