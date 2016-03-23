import fetch from 'isomorphic-fetch'
import fetchPlus from 'fetch-plus'
import plusJson from 'fetch-plus-json'
import plusBearerauth from 'fetch-plus-bearerauth'

const serviceUrl = () => {
  if (__SERVER__) {
    //return 'http://jsonplaceholder.typicode.com'
    const hostname = process.env.HOSTNAME || 'localhost'
    const port = process.env.PORT || 8000
    return 'http://localhost:8000/api-proxy'
  }
  if (__CLIENT__) {
    const { protocol, hostname, port } = window.location
    return `${protocol}//${hostname}:${port}/api-proxy`
  }
}

const endpoint = fetchPlus.connectEndpoint(serviceUrl())
endpoint.addMiddleware(plusJson())

module.exports = endpoint
