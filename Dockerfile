FROM node:18
WORKDIR /usr/appmap-viewer
RUN npm install express @appland/appmap && mkdir maps
COPY ./index.* .
EXPOSE 8080
CMD [ "node", "index.js" ]
