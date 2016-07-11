import React from 'react';
import { ActivityIndicatorIOS } from 'react-native';

export default class Loading extends React.Component {
  setNativeProps (nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render () {
    return (
      <ActivityIndicatorIOS
        color={this.props.color}
        ref={c => this._root = c}
        size="small"
        style={this.props.style}
      />
    );
  }
}
