FROM node:19

WORKDIR /app

# Install build dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    build-essential

# Copy only package files first
COPY package*.json ./

# Clean install and force rebuild
RUN rm -rf node_modules
RUN npm cache clean --force
RUN npm install
RUN npm rebuild bcrypt --build-from-source

# Copy the rest of the application code
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]