# Use a Node.js image for your development environment
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to cache dependencies
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port where your development server will run (Vite's default is 5173)
# Make sure this matches the port your Vite dev server actually listens on.
EXPOSE 5173

# Command to start the development server for Vite
CMD ["npm", "run", "dev"]