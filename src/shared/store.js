import { createStore, combineReducers, applyMiddleware } from 'redux';

export default function create(reducers, initialState) {
  const reducer = combineReducers(reducers);
  const create = applyMiddleware(thunk)(createStore);
  return create(reducer, initialState);
}

function thunk ({ dispatch, getState }) {
  return next => ({ promise, ...rest }) => {
    if (!promise) {
      return next({ ...rest });
    } else {
      return promise.then(
        res => next({ ...rest, count:res }),
        err => console.log(err)
      );
    }
  };
}

