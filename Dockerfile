# Use the official Node.js image
FROM node:14

# Create and set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Define the command to run your application
CMD ["node", "add_up_to_faster.js"]
