

var nextUserId = 1;
var users = {};

module.exports = {

  createUser: function(email, password, done) {
    var user = {
      id: nextUserId,
      email: email,
      password: password
    };

    users[nextUserId] = user;
    nextUserId += 1;
    done(user);
    console.log('users stored in memory', users);
  },

  validateLogin: function(email, password, success, failure) {
    for (var key in users) {
      var user = users[key];
      if (user.email === email && user.password === password) {
        console.log('validated user', email);
        success(user);
      }
      else {
        console.log('no valid user with the email', email);
        failure();
      }
    }
  },

  getUserById: function(id, done) {
    console.log('id', id, 'users?', users);
    done(users[Number(id)]);
  }
}
