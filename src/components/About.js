import React from 'react';

import PxPopover from './PxPopover/PxPopover';

export default class About extends React.Component {
  render() {
    return (
      <section>
        <span>About</span>
        <div>&nbsp;</div>

        <PxPopover>
          <div data-trigger><button>Show Popover</button></div>
          <div data-content>
            My Content (ESC to close)<div>&nbsp;</div>
            <button data-dismiss>Dismiss</button>
          </div>
        </PxPopover>
      </section>
    );
  }
}
