var fs = require('fs');

module.exports = {
  prepareConf: function(template, options) {
    var content = fs.readFileSync('./templates/' + template + '.conf').toString('utf8');

    var keys = Object.keys(options);

    for (var i = 0; i < keys.length; i++) {
      content = content.replace('[' + keys[i] + ']', options[keys[i]]);
    }

    return content;
  },
  writeFile: function(fileName, confcontent, response) {
    console.log('writeFile');
    console.log(confcontent);
    fs.writeFile('/etc/nginx/conf.d/' + fileName + '.conf', confcontent, function(err) {
      if (err) {
        response({
          'status': 'failed',
          'message': err
        });
      } else {
        response({
          'status': 'ok',
          'message': ''
        })
      }
    });
  },
  writeFileSync: function(fileName, confcontent, response) {
    response = fs.writeFileSync('/etc/nginx/conf.d/' + fileName + '.conf', confcontent);
  },
  deleteFile: function(fileName, response) {
    console.log('Apagar ficheiro: ', fileName);
    fs.unlink('/etc/nginx/conf.d/' + fileName + '.conf', function(err) {
      if (err) {
        console.log('Erro ao apagar');
        console.log(err);
        response({
          'status': 'failed',
          'message': err
        });
      } else {
        console.log('Apagado');
        response({
          'status': 'ok',
          'message': {}
        });
      }
    });
  },
  readInitSQL: function(path){
    var content = fs.readFileSync(path).toString('utf8');
    return content;
  }


};
