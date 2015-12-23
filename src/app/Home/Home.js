import React from 'react';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';

import settings from '../settings.json';
import { PxPopover } from '../components/index';
import { Button } from 'react-bootstrap';

import style from './Home.css';

// i18n strings for this component - https://goo.gl/abldHf
const msg = defineMessages({
  title: {
    id: 'home.title',
    defaultMessage: 'Home Page'
  }
});

class Home extends React.Component {
  render() {
    return (
      <section className={style.section}>
        <span><FormattedMessage {...msg.title}/> - {settings.app_title}</span>
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
