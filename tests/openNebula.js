var OpenNebula = require('opennebula');

//var credencials = 'root:opennebula';
var credencials = 'oneadmin:fbc2e553ad9fa747cf12f83bb072c5f8';
var host = 'http://192.168.1.190:2633/RPC2';
var one = new OpenNebula(credencials, host);


one.version(function(err, data) {
  //console.log(data);
});

one.getVMs(function(err, data) {
  console.log(data[1]);
  console.log(data[1].TEMPLATE.DISK.IMAGE);
});

one.getHosts(function(err, data) {
  //console.log(data);
});

var vm = one.getVM(143);

// query API for vm info
// vm.info(function(err, data) {
//   console.log(data);
//   console.log(data['VM']['TEMPLATE']['NIC']);
// });

// vm.action('poweroff', function(err, data) {
//   if(err){
//     return response({'status': 'failed', 'message': err})
//   }else{
//     return response({'status': 'ok', 'message': data})
//   }
// });

// one.getTemplates(function(err, data){
//   var arrTemplates= [] ;
//   if(err){
//     return response({'status': 'failed', 'message': err})
//   }else {
//     for (var i = 0, len = data.length; i < len; i++) {
//       arrTemplates.push({
//         'id' : data[i].ID,
//         'name' : data[i].NAME,
//         'user' : data[i].UNAME,
//         'groupUser' : data[i].GNAME,
//         'groupUser' : data[i].TEMPLATE.CPU,
//       })
//     }
//     return response({'status': 'ok', 'message': arrTemplates})
//   }
// }, null, 0, 1000)


// one.getVMs(function(err, data) {
//   var arrVms = [];
//   var leg = data.length
//   var i = 0
//     console.log(i);
//     console.log(data[i].ID);
//
//     getInfo(data[i].ID, function (response) {
//       arrVms.push({
//         'id': data[i].ID,
//         'name': data[i].NAME,
//         'user': data[i].UNAME,
//         'state': data[i].STATE,
//         'deplyId': data[i].DEPLOY_ID,
//         'realTime_CPU': data[i].MONITORING.CPU,
//         'realTime_MEMORY': data[i].MONITORING.MEMORY,
//         'realTime_STATE': data[i].MONITORING.STATE,
//         'templateId': data[i].TEMPLATE.TEMPLATE_ID
//       });
//       i++;
//     })
// }, null, 0, 1000)
//


//listVMs(function (response) {
//  for (var i = 0; i < response.message.length; i++) {
    //console.log(response.message[i])
//  }
//});

function listVMs (response) {
  var ips = []
  one.getVMs(function(err, data) {
    console.log(data);
    var arrVMs = [];
    if (err) {
      return response({
        'status': 'failed',
        'message': err
      })
    } else {
      for (var i = 0, len = data.length; i < len; i++) {
        var stateString = null;
        switch (data[i].STATE) {
          case '0':
            stateString = 'INIT'
            break;
          case '1':
            stateString = 'PENDING'
            break;
          case '2':
            stateString = 'HOLD'
            break;
          case '3':
            stateString = 'ACTIVE'
            break;
          case '4':
            stateString = 'STOPPED'
            break;
          case '5':
            stateString = 'SUSPENDED'
            break;
          case '8':
            stateString = 'POWEROFF'
            break;
          case '9':
            stateString = 'UNDEPLOYED'
            break;
          case '10':
            stateString = 'CLONING'
            break;
          case '11':
            stateString = 'CLONING_FAILURE'
            break;
          default:
            stateString = 'ERROR!!'
        }
        arrVMs.push({
          'id': data[i].ID,
          'name': data[i].NAME,
          'user': data[i].UNAME,
          'state': stateString,
          'deplyId': data[i].DEPLOY_ID,
          'realTime_CPU': data[i].MONITORING.CPU,
          'realTime_MEMORY': data[i].MONITORING.MEMORY,
          'realTime_STATE': data[i].MONITORING.STATE,
          'templateId': data[i].TEMPLATE.TEMPLATE_ID,
          'IP': data[i].TEMPLATE.NIC,
        })
      }
      return response({
        'status': 'ok',
        'message': arrVMs
      })
    }
  }, null, 0, 1000)
}
