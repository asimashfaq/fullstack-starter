
ARG BUILD_USER=build
ARG APPLICATION_USER=application
ARG NODE_VERSION=12.16.1

FROM node:${NODE_VERSION}-alpine as os

ARG BUILD_USER
ENV buildUser=$BUILD_USER

RUN addgroup -S appgroup && adduser -S $buildUser -G appgroup
USER $buildUser



WORKDIR /home/$buildUser

FROM os AS install
COPY package*.json ./
ADD .yarnrc ./
COPY yarn.lock ./
COPY babel.config.js ./
COPY patches/nestjs-flub+0.2.0.patch ./patches/nestjs-flub+0.2.0.patch
RUN yarn install --only=production
RUN cp -R node_modules /tmp/production_modules
RUN yarn install --frozen-lockfile
COPY . .


FROM install AS build
USER root
WORKDIR /home/$buildUser
RUN yarn build:backend


FROM node:${NODE_VERSION}-alpine

ARG APPLICATION_USER
ARG BUILD_USER
ENV applicationUser=$APPLICATION_USER
ENV buildUser=$BUILD_USER
RUN  apk add --update --no-cache  bash
RUN addgroup -S appgroup && adduser -S $applicationUser -G appgroup


WORKDIR /home/$applicationUser

COPY --from=install /tmp/production_modules node_modules
COPY --from=build /home/$buildUser/dist dist

COPY free.bcdapps.client.certificate free.bcdapps.client.certificate
COPY protos protos
RUN mkdir -p packages/backend/src/graphql
COPY packages/backend/src/**/*.graphql packages/backend/src/graphql/

EXPOSE 3000
CMD ["node", "dist/packages/backend/main.js"]
