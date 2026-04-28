## comments are epic

FROM node:25-alpine3.22

WORKDIR /api

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "app.js"]