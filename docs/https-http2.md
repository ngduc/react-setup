# Https and Http2

HTTP/2 (SPDY) supports concurrency on a single TCP and SSL connection by using multiplexing to allow more than one request at a time to send and receive data on a single connection

HTTPS is required to enable HTTP2

To generate HTTPS key and certificate files, run:

```
$ cd ./configs
$ openssl req -newkey rsa:2048 -new -nodes -keyout server-key.pem -out server-csr.pem
$ openssl x509 -req -days 365 -in server-csr.pem -signkey server-key.pem -out server.crt
```

To enable HTTPS and HTTP2, in package.json, update:

```
"protocol": "https",
"webpackProtocol": "--https",
```

To use HTTP only, use:

```
"protocol": "http",
"webpackProtocol": "",
```
