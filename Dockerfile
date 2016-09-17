# https://github.com/ngduc/docker
FROM ngduc/deb-dev

ADD ./package.json /tmp
RUN cd /tmp \
  && npm set progress=false \
  && npm install

RUN mkdir -p /src \
  && ln -s /tmp/node_modules /src/node_modules

COPY . /src
WORKDIR /src

EXPOSE 8100

CMD npm run build && npm start
