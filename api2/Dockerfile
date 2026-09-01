# my comment

FROM node:26-bullseye

WORKDIR /api

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]
