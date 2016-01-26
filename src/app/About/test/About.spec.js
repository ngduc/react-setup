import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import $ from 'teaspoon';
import { IntlProvider } from 'react-intl';

import About from '../About';

describe('About', () => {
  const renderer = createRenderer();
  const intlProvider = new IntlProvider({ locale: 'en' }, {});
  let $el;

  const reactEl = (<IntlProvider><About/></IntlProvider>);

  beforeEach(() => {
    const { intl } = intlProvider.getChildContext();
    renderer.render(reactEl, { intl });
    $el = $(renderer.getRenderOutput()).render({ intl });
  });

  it('should contain "About"', () => {
    const html = $el.find('section')[0].innerHTML;
    expect(html.indexOf('About')).to.be.above(0);
  });
});
