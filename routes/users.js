const polka = require('polka');
const route = polka();
const broker = require('../util/broker')


route
    .get('/', (req, res) => {
        broker('user::get', res);
    })
    .post('/', (req, res) => {
        broker('user::post', res, req.body);
    })
    .put('/', (req, res) => {
        broker('user::put', res, req.body);
    })
    .delete('/:id', (req, res) => {
        broker('user::delete', res, req.params);
    })

module.exports = route;