FROM node:19

WORKDIR /back

COPY package-lock.json /back/
COPY package.json /back/

RUN npx express-generator
RUN npm install http-errors

COPY . .

CMD ["npm", "start"]