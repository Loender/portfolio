# 1. Base image
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

# 2. Install dependencies and build the app
RUN npm install
RUN npm run build

# 3. Production image
FROM node:20-alpine

WORKDIR /app

# Copy built files from previous stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
