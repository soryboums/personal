var express = require('express');
var path = require('path');
var resumeRouter = express.Router();

// Urls like https:localhost:9533/api/resume
resumeRouter.route('/')

.get(function(req, res, next){
  var resume = path.join(__dirname, '../public/resumeDiallo.pdf');
  res.download(resume);
});

module.exports = resumeRouter;
