import React from 'react';
import style from './Home.css';

import PxPopover from './PxPopover/PxPopover';

export default class Home extends React.Component {
  render() {
    return (
      <section className={style.section}>
        <span>Home Page</span>
        <p></p>

        <PxPopover>
          <div data-trigger><button>Show Popover</button></div>
          <div data-content>
            My Content (ESC to close)<p></p>
            <button data-dismiss>Dismiss</button>
          </div>
        </PxPopover>
      </section>
    );
  }
}
