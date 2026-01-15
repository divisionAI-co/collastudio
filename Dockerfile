# Use latest Node LTS
FROM node:20-alpine AS base

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Development stage
FROM base AS development
WORKDIR /app
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

# Production stage
FROM base AS production
WORKDIR /app

# Copy source code
COPY . .

# Build NestJS app
RUN npm run build

# Expose NestJS default port
EXPOSE 3000

# Run the app
CMD ["node", "dist/main.js"]
