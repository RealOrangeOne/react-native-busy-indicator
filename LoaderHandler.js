/**
 * Created by Durgaprasad Budhwani on 1/2/2016.
 */

import { DeviceEventEmitter } from 'react-native';

const loaderHandler = {
  hideLoader () {
    DeviceEventEmitter.emit('changeLoadingEffect', {isVisible: false});
  },
  showLoader (title) {
    DeviceEventEmitter.emit('changeLoadingEffect', {title, isVisible: true});
  }
};

module.exports = loaderHandler;
