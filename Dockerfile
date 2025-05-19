# Use an official Node.js image as the base
FROM node:18.19.1

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port your app runs on (e.g., 3000)
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
