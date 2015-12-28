import React from 'react';
import { injectIntl, FormattedMessage, FormattedDate } from 'react-intl';

import settings from '../settings.json';
import { PxPopover } from '../components/index';
import { Button } from 'react-bootstrap';

import style from './Home.css';
import msg from './messages';

class Home extends React.Component {
  render() {
    return (
      <section className={style.section}>
        <div>
          <FormattedMessage {...msg.title}/> - {settings.app_title}</div>
        <div>
          Locale demo: Today is: <FormattedDate value={new Date()} day="numeric" month="long" year="numeric" />
        </div>
        <p></p>

        <PxPopover>
          <div data-trigger>
            <Button>Show Popover</Button>
          </div>
          <div data-content>
            My Form (ESC to close)<p></p>
            <input type="text"/><p></p>
            <Button bsStyle="primary" data-dismiss>Dismiss</Button>
          </div>
        </PxPopover>
      </section>
    );
  }
}

export default injectIntl(Home);
