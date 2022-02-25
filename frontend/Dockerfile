FROM node:16.11.1
USER root
RUN apt-get -y update
WORKDIR /app
COPY package.json .

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","run","dev"]
