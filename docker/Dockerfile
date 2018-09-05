FROM node:8.11.4

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --no-package-lock

# Bundle app source
COPY . /usr/src/app

EXPOSE 3333
CMD [ "npm", "run", "server:prod" ]