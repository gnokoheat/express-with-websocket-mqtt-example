const request = require('request');
const mqtt = require('mqtt');

request.get({ uri: "http://localhost:8080" }, (error, response, body) => {
  console.log(body);
});

const client = mqtt.connect('ws://localhost:8080', {
  clientId: 'client1'
});

client.on('connect', function () {
  client.subscribe('presence');
  setInterval(() => client.publish('presence', `Hello mqtt`), 2000);
});

client.on('message', function (topic, message) {
  console.log(message.toString());
});
