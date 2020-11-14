const { response } = require('./response');
const cote = require('cote');
const client = new cote.Requester({ name: 'Broker'});

module.exports = (type, res, data = null) => client.send({ type, data }, (_res) => response(res, _res));