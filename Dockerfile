FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start:prod" ]