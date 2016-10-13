import fetchPlus from 'fetch-plus'
import plusJson from 'fetch-plus-json'

// always import this 'isomorphic-fetch' so it's available for fetch-plus (otherwise, error)
import isomorphicFetch from 'isomorphic-fetch' // eslint-disable-line no-unused-vars

const serviceUrl = () => {
  if (__SERVER__) {
    // for https, node-fetch (fetch-plus > isomorphic-fetch > node-fetch) will give error without this.
    // (failed, reason: self signed certificate)
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

    // return 'http://jsonplaceholder.typicode.com'
    const hostname = process.env.HOSTNAME || 'localhost'
    const port = process.env.PORT || 8100
    const protocol = process.env.npm_package_config_protocol + ':'
    return `${protocol}//${hostname}:${port}/api-proxy`
  }
  if (__CLIENT__) {
    const { protocol, hostname, port } = window.location
    return `${protocol}//${hostname}:${port}/api-proxy`
  }
}

const errorLoggingFn = (config) => (request) => {
  return {
    after: (response) => {
      return response
    },
    error: (error) => {
      console.log('Error: ', error) // failed to fetch
    }
  }
}

const endpoint = fetchPlus.connectEndpoint(serviceUrl())
endpoint.addMiddleware(plusJson())
endpoint.addMiddleware(errorLoggingFn())

module.exports = endpoint
