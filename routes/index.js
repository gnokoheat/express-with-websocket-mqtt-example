const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Hello world!' });
});

module.exports = routes;