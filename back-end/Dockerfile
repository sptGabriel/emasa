
#building code
FROM node as builder
WORKDIR usr/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build

#stage 2
FROM node
WORKDIR usr/app
COPY package*.json ./
RUN yarn install --production

COPY --from=builder /usr/app/dist ./dist

COPY ormconfig.json .
COPY .env . 

expose 4000
CMD node dist/src/index.js
