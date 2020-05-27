module.exports = (mqtt) => {
  mqtt.on('client', (client) => {
    console.log('client connected', client.id);
  })

  mqtt.on('clientDisconnect', (client) => {
    console.log('client disconnected', client.id);
  })

  mqtt.published = (packet, client, cb) => {
    console.log('Published', packet.payload.toString());
  };
};