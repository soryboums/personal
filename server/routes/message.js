var express = require('express');
var bodyParser = require('body-parser');

var Message = require('../models/message');


var msgRouter = express.Router();
msgRouter.use(bodyParser.json());

// Urls like https:localhost:9533/api/message
msgRouter.route('/')

.post(function(req, res, next){
  // If we have message, mail, name and subject defined, then save it in the database
  // TODO: use a smtpl server to send it directly to my email
  if (req.body.msg && req.body.mail && req.body.name && req.body.subject){
    Message.create(req.body, function(err, msg){
      if (err) throw err;
      res.json(msg);
    });
  }
});

module.exports = msgRouter;
