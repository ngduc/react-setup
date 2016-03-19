# https://github.com/ngduc/docker
FROM ngduc/deb-dev

ADD ./package.json /tmp
RUN cd /tmp \
  && npm install
RUN ln -s /tmp/node_modules node_modules

WORKDIR /src

CMD ["npm", "start"]
