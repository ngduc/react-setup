import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './components';
import * as actions from './actions';

@connect(state => ({
  counter: state.counter
}))
export default class CounterApp {
  render() {
    const { counter, dispatch } = this.props;
    const creators = bindActionCreators(actions, dispatch);
    return <Counter {...this.props} {...creators} />;
  }
}
