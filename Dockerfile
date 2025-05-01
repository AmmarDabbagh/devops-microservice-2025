# Use official Node.js image (LTS version)
FROM node:18

# Set working directory in container
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port (same as in index.js)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
