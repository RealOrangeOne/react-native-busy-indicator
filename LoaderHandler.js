/**
 * Created by Durgaprasad Budhwani on 1/2/2016.
 */

"use strict";
import EventEmitter from 'EventEmitter';

class LoaderHandler extends EventEmitter {
  constructor () {
    this.state = {};
  }

  getState () {
    return this.state;
  }

  showLoader(title){
    this.emit('changeLoadingEffect', {title : title});
  }

  hideLoader(title){
    this.emit('changeLoadingEffect', {title : title});
  }
}

let loaderHandler = new LoaderHandler();
export default loaderHandler;
