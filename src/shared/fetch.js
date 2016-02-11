import 'isomorphic-fetch';
import methods from 'methods';

methods.forEach((method) => {
  exports[method] = (path) => {
    const url = __SERVER__ ? 'http://localhost:' + process.env._PORT + path : path;
    return fetch(url, {method}).then(res => res.json());
  }
});
