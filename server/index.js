const mongoose = require('mongoose');

const uri = 'mongodb://admin:adminpass@ds227469.mlab.com:27469/angular_articles';
mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('connection success');
});

module.exports = mongoose;
