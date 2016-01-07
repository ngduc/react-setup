import React from 'react';
import { injectIntl } from 'react-intl';

import { Msg } from './messages';

class About extends React.Component {
  render() {
    return (
      <section>
        <span><Msg s="title"/></span>
      </section>
    );
  }
}

export default injectIntl(About);
