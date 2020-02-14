const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

// routes.get('/', (req, res) => {
//     return res.json({ hello: 'World' });
// });

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

// POST -> localhost:3333/users/3/addresses

module.exports = routes;