import jsdom from 'jsdom';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import { assert } from 'sinon';

require('react-native-mock/mock');
require('babel-polyfill');


// Setup mocks
// Jsdom document & window
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

// Add to global
global.document = doc;
global.window = win;


// Add window keys to global window
Object.keys(global.window).forEach((key) => {
  if (!(key in global)) {
    global[key] = global.window[key];
  }
});

global.window.localStorage = { getItem: () => null };

chai.expect();
chai.use(sinonChai);

assert.expose(chai.expect, { prefix: '' });
