var express = require('express');
var datasource = require('./datasource.js');


module.exports = function() {

  // The express router for configuring the routes
  var router = express.Router();

  router.get('/api/sets', (req, res) => {

    datasource.getSetsForUser(req.user.id, (data) => {
      //convert the output to an array
      var setArray = [];
      for (var key in data) {
        setArray.push(data[key]);
      }

      res.send({
        userId: req.user.id,
        sets: setArray
      });
    });

  });

  router.post('/api/sets', (req, res) => {

    var cb = (data) => {
      res.send(data);
    };

    datasource.createSetForUser(req.user.id, req.body.name, req.body.description, cb);

  });

  router.delete('/api/sets/:setId', (req, res) => {
    var cb = (data) => {
      res.sendStatus(204);
    };

    datasource.deleteSetForUser(req.user.id, req.params.setId, cb);
  });

  router.post('/api/sets/:setId/card', (req, res) => {
    var cb = (data) => {
      res.send(data);
    }

    datasource.newCard(req.user.id, req.body.setId, req.body.front, req.body.back, cb);
  });

  return router;
};
