import React from 'react';

import { Msg, __injectIntl } from './messages';

class About extends React.Component {
  render() {
    return (
      <section>
        <span><Msg s="title"/></span>
      </section>
    );
  }
}

export default __injectIntl(About);
