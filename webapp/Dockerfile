FROM node:8

WORKDIR /webapp

COPY ./dist dist
COPY ./package.json package.json
COPY ./server.js server.js

ENTRYPOINT [ "npm", "run", "deploy" ]
