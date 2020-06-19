FROM node:10-alpine

RUN npm install

COPY . .

RUN npm run build

COPY ./index.js .

EXPOSE 8999

CMD ["node", "index.js"]