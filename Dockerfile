FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine AS development

WORKDIR /app

COPY --from=builder /app /app

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]

FROM nginx:alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html

RUN echo "\
    server {\
        listen 80;\
        location / {\
            root /usr/share/nginx/html;\
            index index.html;\
            gzip on;\
            gzip_types text/plain application/xml text/css application/javascript;\
            expires 1d;\
        }\
    }" > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]