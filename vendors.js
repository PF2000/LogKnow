require('colors');

var MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID,
    config = require('./config');


MongoClient.connect(config.mongodb, function(err, db) {
  if (err) throw err;
  exports.mongo = db;
  exports.mongoObjId = ObjectID;
  console.log('(SYSTEM) Connected to MongoDB.');

});
