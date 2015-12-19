import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) =>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    {children}
  </div>;

App.propTypes = typeof __DEV__ && {
  children: PropTypes.object.isRequired
};

export default App;
