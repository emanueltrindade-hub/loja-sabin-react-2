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



