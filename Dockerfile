FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/build /app/build

RUN npm install -g http-server-spa

EXPOSE 3001

CMD ["http-server-spa", "build", "index.html", "3001"]
