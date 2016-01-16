import React from 'react';
import { injectIntl, FormattedDate } from 'react-intl';

import { Button } from 'react-bootstrap';
import { PxPopover, PxUtils } from '../components/index';

import settings from '../settings.json';
import style from './Home.css';
import { Msg } from './messages';

class Home extends React.Component {
  render() {
    return (
      <section className={style.section}>
        <div>
          <Msg s="welcome" values={{ page: 'Home Page' }}/> - {settings.app_title}
        </div>
        <div>
          <Msg s="today"/> <FormattedDate value={ new Date() } day="numeric" month="long" year="numeric" />
        </div>
        <p></p>
        <div>
          Switch locale: (only work in PROD build for now)
        </div>
        <ul>
          <li><a href="/?loc=en-US">English en-US</a></li>
          <li><a href="/?loc=ja-JP">Japanese ja-JP</a></li>
        </ul>

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
