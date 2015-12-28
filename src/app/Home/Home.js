import React from 'react';
import { FormattedDate } from 'react-intl';

import settings from '../settings.json';
import { PxPopover } from '../components/index';
import { Button } from 'react-bootstrap';

import style from './Home.css';
import { Msg, __injectIntl } from './messages';

class Home extends React.Component {
  //<FormattedMessage {...msg.title}/> - {settings.app_title}</div>
  render() {
    return (
      <section className={style.section}>
        <div>
          <Msg s="title"/> - {settings.app_title}
        </div>
        <div>
          <Msg s="today"/> <FormattedDate value={new Date()} day="numeric" month="long" year="numeric" />
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

export default __injectIntl(Home);
