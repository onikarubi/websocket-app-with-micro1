FROM node:20

WORKDIR /app

COPY server/package*.json ./
RUN npm install

EXPOSE 8000
CMD ["node", "server.js"]
