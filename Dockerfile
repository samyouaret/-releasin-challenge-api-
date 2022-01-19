FROM node:14.18.1-alpine

RUN mkdir /node-microservice

RUN chown -R node:node /node-microservice

USER node

ENV PORT=3000

ENV HOST=http://localhost

WORKDIR /node-microservice

EXPOSE 3000

COPY package*.json /node-microservice/

COPY yarn.lock /node-microservice/

COPY --chown=node:node . /node-microservice/

RUN yarn install

RUN yarn build

CMD [ "node","build/index.js" ]