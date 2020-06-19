FROM nginx:1.17.1-alpine

RUN npm install

RUN ng build --prod

COPY /dist/f1-client /usr/share/nginx/html