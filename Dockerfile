FROM node:20 as build
WORKDIR /app
ARG APP_ENV=prd

COPY ./package*.json ./
RUN npm ci

COPY ./ ./

RUN npm run build:$APP_ENV

EXPOSE 8080

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/app.conf
COPY --from=build /app/dist/angular-template-app/browser /usr/share/nginx/html
