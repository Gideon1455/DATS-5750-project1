# Use an official Node.js runtime as a parent image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the application's dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app will run on (adjust if different)
EXPOSE 3000

# Command to run your app
CMD ["node", "server.js"]
