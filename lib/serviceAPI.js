var vendors = require('./../vendors'),
    express = require('express'),
    cp = require('child_process'),
    bodyParser = require('body-parser'),
    knowledgeRepo = require('./knowledgeRepo');

var serviceAPI = function(port) {
    this.port = port;
    this.app = express();
    this.app.use(express.static('./public'));
    this.app.use(bodyParser.json());
    this.httpServer = require('http').Server(this.app);
};


serviceAPI.prototype.init = function() {
    var self = this;

    this.httpServer.listen(this.port);
    console.log('(server) API Server listening on port ' + this.port);

    this.app.post('/api/knowledgeRepo/insert', function(req, res) {
        knowledgeRepo.InsertBD(req, function(response) {
            res.send(response)
        })
    });
    this.app.post('/api/knowledgeRepo/upsert', function(req, res) {
        knowledgeRepo.UpsertBD(req, function(response) {
            res.send(response)
        })
    });
    this.app.get('/api/knowledgeRepo/getAll', function(req, res) {
        knowledgeRepo.SelectAllBD(req, function(response) {
            res.send(response)
        })
    });
    this.app.get('/api/knowledgeRepo/getById/:id', function(req, res) {
        knowledgeRepo.SelectByIdBD(req, function(response) {
            res.send(response)
        })
    });
    this.app.delete('/api/knowledgeRepo/deleteById/:id', function(req, res) {
        knowledgeRepo.DeleteByIdBD(req, function(response) {
            res.send(response)
        })
    });
};

module.exports = serviceAPI;
