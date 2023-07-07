FROM node:18.15.0-alpine3.17 AS development
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT 9229 9230

RUN mkdir -p /opt/orders/app && chown node:node /opt/orders/app
WORKDIR /opt/orders

COPY --chown=node:node package.json package-lock.json* ./

RUN  npm install glob rimraf

ENV PATH=$PATH:/home/node/.npm-global/bin

WORKDIR /opt/orders/app

COPY --chown=node:node . .

RUN npm run build

USER node

CMD ["node", "dist/main"]

FROM node:18.15.0-alpine3.17 as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG PORT=3000
ENV PORT $PORT

RUN mkdir -p /opt/orders/app && chown node:node /opt/orders/app
WORKDIR /opt/orders

COPY --chown=node:node package.json package-lock.json* ./

RUN npm install --only=production --ignore-scripts

WORKDIR /opt/orders/app

COPY --chown=node:node . .

COPY --from=development /opt/orders/app/dist ./dist

USER node

CMD ["node", "dist/main"]

