FROM node:19

WORKDIR /front

COPY package-lock.json /front/
COPY package.json /front/

RUN npx create-react-app frontend
RUN npm i react-scripts

COPY . .

CMD ["npm", "start"]