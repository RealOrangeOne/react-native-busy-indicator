import React from 'react';
import { ActivityIndicator } from 'react-native';

export default class Loading extends React.Component {
  setNativeProps (nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render () {
    return (
      <ActivityIndicator
        color={this.props.color}
        ref={c => this._root = c}
        size="large"
        style={this.props.style}
      />
    );
  }
}