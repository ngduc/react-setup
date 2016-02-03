import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import $ from 'teaspoon';
import { IntlProvider } from 'react-intl';

import Home from '../Home';

describe('Home', () => {
  const renderer = createRenderer();
  const intlProvider = new IntlProvider({ locale: 'en' }, {});
  let $el;

  const reactEl = (<IntlProvider><Home/></IntlProvider>);

  beforeEach(() => {
    const { intl } = intlProvider.getChildContext();
    renderer.render(reactEl, { intl });
    $el = $(renderer.getRenderOutput()).render({ intl });
  });

  it('should contain "Home"', () => {
    const html = $el.find('section')[0].innerHTML;
    expect(html.indexOf('Home')).to.be.above(0);
  });
});
