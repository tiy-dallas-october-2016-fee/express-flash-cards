function generateRandomId() {
  return Math.ceil(Math.random() * 1000000);
}

var users = {};

var setsByUserId = {};

module.exports = {

  createUser: function(email, password, done) {
    var userId = generateRandomId();

    var user = {
      id: userId,
      email: email,
      password: password
    };

    users[userId] = user;
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
    done(users[id]);
  },

  getSetsForUser: function(userId, done) {
    console.log('getSetsForUser id', userId);

    done(setsByUserId[userId]);
  },

  createSetForUser: function(userId, name, description, done) {

    var userSets = setsByUserId[userId] || {};

    var setId = generateRandomId();
    var set = {
      id: setId,
      name: name,
      description: description,
      cards: []
    }
    userSets[setId] = set;
    setsByUserId[userId] = userSets;
    console.log('setsByUserId after change', setsByUserId);

    done(set);
  },

  deleteSetForUser: function(userId, setId, done) {
    var userSets = setsByUserId[userId] || {};

    delete userSets[setId];
    console.log('this user deleted a set and now has', userSets);
    done();
  },



  newCard: function(userId, setId, front, back, cb) {
    var userSets = setsByUserId[userId] || {};
    var set = userSets[setId];

    var card = {
      id: generateRandomId(),
      front: front,
      back: back
    };

    set.cards.push(card);
    cb(card);
  }

}
