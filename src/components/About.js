import React from 'react';

import PxPopover from './PxPopover/PxPopover';

export default class About extends React.Component {
  render() {
    return (
      <section>
        <span>About</span>

        <PxPopover>
          <div data-trigger><button>Show Popover</button></div>
          <div data-content>My Content <button data-dismiss>Close</button></div>
        </PxPopover>
      </section>
    );
  }
}
