## comments are epic

FROM node:25-alpine3.22

WORKDIR /api

COPY package*.json .

RUN npm i -g nodemon

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "dev"]