# https://github.com/ngduc/docker
FROM ngduc/deb-dev

ADD ./package.json /tmp
RUN cd /tmp \
  && npm set progress=false \
  && npm install --ignore-scripts --unsafe-perm

RUN mkdir -p /src \
  && ln -s /tmp/node_modules /src/node_modules

COPY . /src
WORKDIR /src

CMD npm run build && npm start
