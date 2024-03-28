FROM node:18-alpine

WORKDIR /app

RUN apk update && apk add bash

COPY package*.json ./

RUN npm install && npm install -g nodemon

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
