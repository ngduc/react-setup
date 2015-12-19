import React from 'react';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';
import PxTestUtils from 'px-test-utils';

import PxPopover from '../PxPopover';

describe('PxPopover', () => {
  jsdom();
  let renderer;
  let $el;
  const reactEl = (<PxPopover>
                    <div data-trigger><button>Show Popover</button></div>
                    <div data-content><button data-dismiss>Close</button></div>
                  </PxPopover>);

  beforeEach(() => {
    [ renderer, $el ] = PxTestUtils.render(reactEl);
  });

  it('should have 3 child elements: trigger, overlay, content (in order)', () => {
    expect($el.find('[data-trigger]').length).to.equal(1);
    expect($el.find('[data-overlay]').length).to.equal(1);
    expect($el.find('[data-content]').length).to.equal(1);
  });

  it('should show the content on clicking on trigger element', () => {
    const children = $el.children();
    TestUtils.Simulate.click(children[0]); // click to show
    expect(children[2].style.display).to.equal('block');
  });

  it('should close on clicking on overlay element', () => {
    const children = $el.children();
    TestUtils.Simulate.click(children[0]); // click to show
    expect(children[2].style.display).to.equal('block');
    TestUtils.Simulate.click(children[1]); // overlayEl
    expect(children[2].style.display).to.equal('none');
  });

  it('should close on clicking on a dismiss element', () => {
    const children = $el.children();
    const buttons = $el.find('button');
    TestUtils.Simulate.click(buttons[0]); // click to show
    expect(children[2].style.display).to.equal('block');
    TestUtils.Simulate.click(buttons[1]); // dismiss button
    expect(children[2].style.display).to.equal('none');
  });

  it('should close on pressing ESC key', () => {
    const children = $el.children();
    TestUtils.Simulate.click(children[0]); // click to show
    expect(children[2].style.display).to.equal('block');
    TestUtils.Simulate.keyDown(children[0], { keyCode : 27 });
    expect(children[2].style.display).to.equal('none');
  });
});
