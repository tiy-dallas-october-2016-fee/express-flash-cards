if (window.FC === undefined) { window.FC = {}; }

(function() {

  var userData;

  window.FC.UserData = {

    loadSets(cb) {
      $.ajax({
        url: '/api/sets'
      })
      .done((data) => {
        userData = data;
        cb(data)
      });
    },

    getSet: (setId, cb) => {

      var setExists = () => {
        var set = userData.sets.find((x) => { return x.id == setId});
        cb(set);
      };

      if (userData === undefined) {
        FC.UserData.loadSets(setExists);
      }
      else {
        setExists();
      }
    },

    addCardToSet: (setId, front, back, cb) => {

      $.ajax({
        url: '/api/sets/:setId/card',
        method: 'POST',
        data: {
          setId: setId,
          front: front,
          back: back
        }
      })
      .done((data) => {
        console.log('post result', data);
        var set = userData.sets.find((x) => { return x.id == setId});
        set.cards.push(data);
        cb(data);
      });
    }
  };

})();
