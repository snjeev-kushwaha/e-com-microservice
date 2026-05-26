FROM node:22-alpine

WORKDIR /usr/src/payment

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4004

CMD ["node", "server.js"]