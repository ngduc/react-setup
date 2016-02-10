import React from 'react';
import { injectIntl, FormattedDate } from 'react-intl';

import { Button } from 'react-bootstrap';
import { PxPopover, PxUtils } from '../components';

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


<form action="/login" method="post">
    <p>
      <label>Username:
        <input type="text" name="username" value="test" />
      </label>
    </p>
    <p>
      <label>Password:
        <input type="password" name="password" value="test" />
      </label>
    </p>
    <p>
      <button type="submit">Log In</button>
    </p>
    <p>
      <a href="/auth/facebook">Sign in with Facebook</a> <a href="/auth/twitter">Sign in with Twitter</a> <a href="/auth/google">Sign in with Google</a>
    </p>
  </form>



        <div>
          Switch locale:
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
