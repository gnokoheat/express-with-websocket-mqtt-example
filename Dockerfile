FROM node:12.17.0-buster

WORKDIR /app

COPY package.json ./
COPY index.js index.js
COPY mqtt mqtt
COPY routes routes

RUN npm install
RUN chown -R node:node /app

ENV PORT=8080
USER node
EXPOSE $PORT

ENTRYPOINT ["node", "index.js"]