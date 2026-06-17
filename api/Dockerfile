# comment omg

FROM node:26-alpine3.23

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 4000

CMD ["npm", "start"]