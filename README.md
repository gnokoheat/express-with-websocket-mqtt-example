# express-with-websocket-mqtt-example
![GitHub](https://img.shields.io/github/license/gnokoheat/express-with-websocket-mqtt-example) ![GitHub package.json version](https://img.shields.io/github/package-json/v/gnokoheat/express-with-websocket-mqtt-example) ![GitHub top language](https://img.shields.io/github/languages/top/gnokoheat/express-with-websocket-mqtt-example) ![GitHub last commit](https://img.shields.io/github/last-commit/gnokoheat/express-with-websocket-mqtt-example)

Express app example with Websocket + MQTT

It is very simple node.js express app example to configure express with websocket + MQTT.
This code include MQTT client examples.
It can be possible to add MQTT brocker to operating express server easily.

## Description

### Server

Express, MQTT broker use same port in same time.

- Express
  - http://localhost:8080
- MQTT broker
  - ws://localhost:8080

### Client
- Client 1
  - HTTP Call
  - MQTT Subscribe & Publish
- Client 2
  - HTTP Call
  - MQTT Subscribe
