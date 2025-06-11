# Stage 1: Build the static site
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Expose the Docusaurus dev server port
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "serve"]
