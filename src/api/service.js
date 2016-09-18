import fetchPlus from 'fetch-plus'
import plusJson from 'fetch-plus-json'

const serviceUrl = () => {
  if (__SERVER__) {
    // return 'http://jsonplaceholder.typicode.com'
    const hostname = process.env.HOSTNAME || 'localhost'
    const port = process.env.PORT || 8100
    return `http://${hostname}:${port}/api-proxy`
  }
  if (__CLIENT__) {
    const { protocol, hostname, port } = window.location
    return `${protocol}//${hostname}:${port}/api-proxy`
  }
}

const endpoint = fetchPlus.connectEndpoint(serviceUrl())
endpoint.addMiddleware(plusJson())

module.exports = endpoint
