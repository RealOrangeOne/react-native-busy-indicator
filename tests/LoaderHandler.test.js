import { expect } from 'chai';
import { DeviceEventEmitter } from 'react-native';
import LoaderHandler from '../LoaderHandler';
import sinon from 'sinon';

describe('Loader Handler', function () {
  let eventHandler;

  beforeEach(function () {
    eventHandler = sinon.spy();
    DeviceEventEmitter.addListener('changeLoadingEffect', eventHandler);
  });

  it('Should expose the right functions', function () {
    expect(LoaderHandler.showLoader).to.be.a('function');
    expect(LoaderHandler.hideLoader).to.be.a('function');
  });

  it('Should emit event when showing', function () {
    LoaderHandler.showLoader('Loading');
    expect(eventHandler).to.have.been.calledWithExactly({ isVisible: true, title: 'Loading' });
  });

  it('Should emit event when hiding', function () {
    LoaderHandler.hideLoader();
    expect(eventHandler).to.have.been.calledWithExactly({ isVisible: false });
  });
});
