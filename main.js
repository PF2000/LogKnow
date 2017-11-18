var ServiceAPI = require('./lib/serviceAPI.js');

var mode = process.env.MODE;
var port = process.env.PORT || 3000;
var serviceAPI = new ServiceAPI(port);
serviceAPI.init();
