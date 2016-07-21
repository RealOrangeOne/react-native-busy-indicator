import React from 'react'; // eslint-disable-line no-unused-vars
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import BusyIndicator from '../index';

describe('Main Component', function () {
  it('Should render empty initially', function () {
    const instance = shallow(<BusyIndicator />);
    expect(instance.find('View')).to.have.lengthOf(1);
    expect(instance.find('ActivityIndicator')).to.have.lengthOf(0);
  });

  it('Should render properly if starting visible', function () {
    const instance = shallow(<BusyIndicator startVisible />);
    expect(instance.find('ActivityIndicator')).to.have.lengthOf(1);
  });

  describe('Update Event', function () {
    it('Should show if event handler called', function () {
      const instance = shallow(<BusyIndicator />);
      expect(instance.find('ActivityIndicator')).to.have.lengthOf(0);
      instance.instance().changeLoadingEffect({ isVisible: true });
      instance.update();
      expect(instance.find('ActivityIndicator')).to.have.lengthOf(1);
    });

    it('Should create event emitter on mount', function () {
      const instance = mount(<BusyIndicator />);
      expect(instance.instance().emitter).to.exist;
    });
  });

  it('Should show correct text', function () {
    const instance = shallow(<BusyIndicator startVisible />);
    instance.setState({ text: 'Loading...' });
    instance.update();
    expect(instance.find('Text').prop('children')).to.equal('Loading...');
  });
});
