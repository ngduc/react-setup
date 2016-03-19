# Docker

React-Setup uses Docker to build and test the deployment.

Inside /tools/docker directory, there are some Docker config files:

* Dockerfile.dev
* Dockerfile.test - build project & run unit tests

## Docker build

```
$ cd react-setup
$ docker build -f ./tools/docker/Dockerfile.test -t <image-name> .
```

## Run the image

```
$ docker run --rm -it -v $(pwd):/src:ro <image-name>
```
