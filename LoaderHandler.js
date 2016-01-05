/**
 * Created by Durgaprasad Budhwani on 1/2/2016.
 */

'use strict';

import EventEmitter from 'EventEmitter';
let eventEmitter = new EventEmitter();

let loaderHandler = {
  getEventEmitter () {
    return eventEmitter;
  },
  hideLoader () {
    eventEmitter.emit('changeLoadingEffect', {isVisible: false});
  },
  showLoader (title) {
    eventEmitter.emit('changeLoadingEffect', {title, isVisible: true});
  }
};

module.exports = loaderHandler;
