var vendors = require('./../vendors');

module.exports = {
  SelectAllBD: function (req, callback) {
      vendors.mongo.collection('knowledgeRepo').find().toArray(function(err, result){
        if (err) {
          callback({
            'status': false,
            'message': {message: 'Error select all ' + err}
          });
        } else {
         callback({
           'status': true,
           'message': {message: 'Sucess Fetch knowledgeRepoALL', objBiz: result}
         });
        }
     });
  },
  SelectByIdBD: function (req, callback) {
      vendors.mongo.collection('knowledgeRepo')
      .findOne({"_id": new vendors.mongoObjId(req.params.id)}, function(err, result){
        if (err) {
          callback({
            'status': false,
            'message': {message: 'Error select all ' + err}
          });
        } else {
         callback({
           'status': true,
           'message': {message: 'Sucess Fetch knowledgeRepoALL', objBiz: result}
         });
        }
     });
  },
  InsertBD: function (req, callback) {
      vendors.mongo.collection('knowledgeRepo')
      .insertOne(req.body, function(err, result) {

       callback({
         'status': true,
         'message': ''
       });
     });
  },
  UpsertBD: function (req, callback) {
    // if the id is not set, sets it!
    if(req.body._id == '' || req.body._id == null) {
        req.body._id = vendors.mongoObjId() + '';
    }
    vendors.mongo.collection('knowledgeRepo')
    .update({_id: req.body._id },
    req.body,
    {
      upsert: true
    },
    function(err, result) {
      if (err) {
        callback({
          'status': false,
          'message': err
        });
      } else {
        callback({
          'status': true,
          'message': {message: 'Updated with knowledgeRepo', objBiz: {_id: req.body._id } }
        });
      }
    });

  },
  DeleteByIdBD: function (req, callback) {
      vendors.mongo.collection('knowledgeRepo')
      .deleteOne({_id: req.params.id}, function(err, result){
        if (err) {
          console.log("Error - DeleteByIdBD")
          callback({
            'status': false,
            'message': {message: 'Error DeleteByIdBD ' + err}
          });
        } else {
         callback({
           'status': true,
           'message': {message: 'Sucess Delete knowledgeRepoALL', objBiz: result}
         });
        }
     });
  },
}
