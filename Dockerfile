FROM node:slim

WORKDIR /app

# Only copy necessary files
COPY package.json package-lock.json .

RUN   npm install 

COPY .  .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
