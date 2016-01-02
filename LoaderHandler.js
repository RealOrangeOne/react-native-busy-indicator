/**
 * Created by Durgaprasad Budhwani on 1/2/2016.
 */

"use strict";
import EventEmitter from 'EventEmitter';
let eventEmitter = new EventEmitter();

let loaderHandler = {
  getEventEmitter: function(){
    return eventEmitter;
  },

  showLoader: function(title){
    eventEmitter.emit('changeLoadingEffect', {title : title, isVisible : true});
  },

  hideLoader: function(title){
    eventEmitter.emit('changeLoadingEffect', {title : title, isVisible : false});
  }
};

module.exports = loaderHandler;
