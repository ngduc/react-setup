# Docker

React-Setup uses Docker to build and test the deployment.

Following are Docker config files:

* /Dockerfile - the main config file to deploy & run the app in Production mode 
* /tools/docker/Dockerfile.dev - build project & run unit tests in watch mode on your local /src
* /tools/docker/Dockerfile.test - build project & run unit tests on your local /src

## Docker build

```
$ cd react-setup
$ docker build -f ./tools/docker/Dockerfile.test -t <image-name> .
```

## Run the image

```
$ docker run --rm -it -v $(pwd):/src:ro <image-name>
```
