# Use an official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables
ENV PORT=5000

# Expose the port the app runs on
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]
