FROM node:20-alpine

WORKDIR /usr/src/product

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4002

CMD ["node", 'server.js']