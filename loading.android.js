import React from 'react';
import { ProgressBarAndroid } from 'react-native';

export default class Loading extends React.Component {
  setNativeProps (nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render () {
    return (
      <ProgressBarAndroid
        color={this.props.color}
        ref={c => this._root = c}
        style={this.props.style}
        styleAttr="Small"
      />
    );
  }
}
