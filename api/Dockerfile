## comments are epic

FROM node:25-alpine3.22

RUN npm i -g nodemon

WORKDIR /api

COPY package*.json .

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "dev"]