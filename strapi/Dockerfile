FROM node:18

WORKDIR /srv/app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "develop"]
