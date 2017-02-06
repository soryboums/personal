var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Message = new Schema({
    name: {
      type: String,
      required: true
    },
    mail: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    msg: {
      type: String,
      required: true
    }
});

module.exports = mongoose.model('Message', Message);
