# HTTPS

To generate HTTPS key and certificate files, run:

```
$ cd ./configs
$ openssl req -newkey rsa:2048 -new -nodes -keyout server-key.pem -out server-csr.pem
$ openssl x509 -req -days 365 -in server-csr.pem -signkey server-key.pem -out server.crt
```

# HTTP2

HTTP2 requires HTTPS
