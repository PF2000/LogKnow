module.exports = {
  'url': 'http://127.0.0.1:8080',
  'mongodb': 'mongodb://192.168.1.115:27017/knowledgeDB',
  'port': 8080,

  'resources': {
    'memory': 6500,
    'cpu': 24,
    'storage': 250
  },

  'providers': {
    'one': {
      'host': 'http://192.168.1.111:2633/RPC2',
      'auth': 'oneadmin:oneadmin',
      'network': 'public',
      'sunstone': 'https://192.168.1.111'
    }
  },

  'email': {
    'smtp': 'mail.johndoe.johndoe',
    'user': 'mail@johndoe.johndoe',
    'password': 'johndoe'
  }
};
