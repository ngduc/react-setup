# https://github.com/ngduc/docker
FROM ngduc/deb-dev

ADD ./package.json /tmp
RUN cd /tmp \
  && npm set progress=false \
  && npm install --ignore-scripts --unsafe-perm
RUN ln -s /tmp/node_modules node_modules

WORKDIR /src

CMD ["npm", "run", "test:watch"]
