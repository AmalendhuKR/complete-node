FROM node:14-alpine3.16

LABEL maintainer = "amalendhu kr"
LABEL description = "as a part of mongo-express-node bootcamp"

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

ENV NODE_ENV = "development"

CMD ["start"]

ENTRYPOINT ["npm"]