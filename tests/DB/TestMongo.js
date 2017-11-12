var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.115:27017/knowledgeDB";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, function(err, db) {
  //insertDocument(db, function() {
  //    db.close();
  //});
  findRestaurants(db, function() {
      db.close();
  });


  removeRestaurants(db, function() {
      db.close();
  });

  findRestaurants(db, function() {
      db.close();
  });


});

findRestaurants(db, function() {
    db.close();
});

var insertDocument = function(db, callback) {
   db.collection('restaurants').insertOne( {
      "address" : {
         "street" : "2 Avenue",
         "zipcode" : "10075",
         "building" : "1480",
         "coord" : [ -73.9557413, 40.7720266 ]
      },
      "borough" : "Manhattan",
      "cuisine" : "Italian",
      "grades" : [
         {
            "date" : new Date("2014-10-01T00:00:00Z"),
            "grade" : "A",
            "score" : 11
         },
         {
            "date" : new Date("2014-01-16T00:00:00Z"),
            "grade" : "B",
            "score" : 17
         }
      ],
      "name" : "Vella",
      "restaurant_id" : "41704620"
   }, function(err, result) {
    console.log("Inserted a document into the restaurants collection.");
    callback();
  });
};

var findRestaurants = function(db, callback) {
   var cursor = db.collection('restaurants').find( { "borough": "Manhattan" } );
   cursor.each(function(err, doc) {
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

var updateRestaurants = function(db, callback) {
   db.collection('restaurants').updateOne(
      { "name" : "Vella" },
      {
        $set: { "cuisine": "American (New)" }
      }, function(err, results) {
      console.log(results);
      console.log(err);
      callback();
   });
};

var removeRestaurants = function(db, callback) {
   db.collection('restaurants').deleteMany(
      { "borough": "Manhattan" },
      function(err, results) {
         console.log(results);
         callback();
      }
   );
};
