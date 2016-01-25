import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { jsdom } from 'jsdom';
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
global.HTMLElement = global.window.HTMLElement; // TODO: remove this once this PR is released https://goo.gl/nnyMUB

chai.use(sinonChai);

global.expect = expect;
global.sinon = sinon;
global.__DEV__ = true;

// ensure requiring css not to throw
require.extensions['.css'] = () => {
  return null;
};
require.extensions['.styl'] = () => {
  return null;
};
