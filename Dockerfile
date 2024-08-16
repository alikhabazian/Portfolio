FROM node:18-alpine

# Label for authors
LABEL authors="ALiKhabazian"

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
