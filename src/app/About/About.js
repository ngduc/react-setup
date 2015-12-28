import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

import msg from './messages';

class About extends React.Component {
  render() {
    return (
      <section>
        <span><FormattedMessage {...msg.title}/></span>
      </section>
    );
  }
}

export default injectIntl(About);
