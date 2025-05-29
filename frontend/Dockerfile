FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install react-bootstrap @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

COPY . .

EXPOSE 3000

CMD ["npm", "start"] 