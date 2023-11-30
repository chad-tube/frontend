FROM node:lts-bullseye-slim

# Create app directory
WORKDIR /app

RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*


# Install app dependencies
COPY package*.json ./

RUN npm install


# Bundle app source
COPY . .
RUN npm run build

CMD [ "npm", "start" ]


