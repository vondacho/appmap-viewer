FROM node:18
WORKDIR /usr/appmap-viewer
COPY ./index.* ./package.json ./
RUN npm install && mkdir maps
EXPOSE 8080
CMD [ "node", "index.js" ]
