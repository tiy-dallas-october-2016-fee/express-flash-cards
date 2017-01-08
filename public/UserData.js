'use strict';

if (window.FC === undefined) {
  window.FC = {};
}

(function () {

  var userData;

  window.FC.UserData = {
    loadSets: function loadSets(cb) {
      $.ajax({
        url: '/api/sets'
      }).done(function (data) {
        userData = data;
        cb(data);
      });
    },


    getSet: function getSet(setId, cb) {

      var setExists = function setExists() {
        var set = userData.sets.find(function (x) {
          return x.id == setId;
        });
        cb(set);
      };

      if (userData === undefined) {
        FC.UserData.loadSets(setExists);
      } else {
        setExists();
      }
    },

    addCardToSet: function addCardToSet(setId, front, back, cb) {

      $.ajax({
        url: '/api/sets/' + setId + '/card',
        method: 'POST',
        data: {
          setId: setId,
          front: front,
          back: back
        }
      }).done(function (data) {
        // console.log('got back', data);
        // var set = userData.sets.find((x) => { return x.id == setId});
        // set.cards.push({
        //
        // });
        FC.UserData.loadSets(cb);
      });
    }
  };
})();
//# sourceMappingURL=UserData.js.map
