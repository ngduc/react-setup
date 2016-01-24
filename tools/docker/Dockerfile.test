# https://github.com/ngduc/docker
FROM ngduc/deb-dev

# Create app directory
RUN mkdir -p /opt/app
WORKDIR /opt/app

# Install app dependencies
COPY package.json /opt/app
RUN npm install

# Bundle app source
COPY . /opt/app

EXPOSE 8000
CMD [ "npm", "run", "test" ]
