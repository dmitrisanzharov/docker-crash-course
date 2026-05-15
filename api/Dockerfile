FROM node:26-bookworm

WORKDIR /api

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]

# any comment