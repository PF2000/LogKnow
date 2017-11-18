var vendors = require('./../vendors');

module.exports = {
  UpsertBD: function (req, callback) {
    // if the id is not set, sets it!
    vendors.mongo.collection('knowledgeRepo')
    .update({_id: req.body },
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
