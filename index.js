const express = require('express');
const aedes = require('aedes')();
const ws = require('websocket-stream');
const routes = require('./routes');
const mqtt = require('./mqtt');

const port = process.env.PORT || 8080;
const app = express();

app.use('/', routes);

const httpServer = require('http').createServer(app);
ws.createServer({ server: httpServer }, aedes.handle);

httpServer.listen(port, function () {
  console.log('server listening on port ', port);
})

mqtt(aedes);