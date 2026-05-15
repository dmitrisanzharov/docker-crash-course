FROM node:26-bookworm

WORKDIR /api

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "dev"];

# any comment