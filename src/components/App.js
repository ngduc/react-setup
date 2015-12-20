import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import style from './App.css';

const App = ({ children }) =>
  <div className={style.app}>
    <nav>
      <span><Link to="/">Home</Link></span>
      <span><Link to="/about">About</Link></span>
    </nav>
    <div className={style.appBody}>
      {children}
    </div>
  </div>;

App.propTypes = typeof __DEV__ && {
  children: PropTypes.object.isRequired
};

export default App;
