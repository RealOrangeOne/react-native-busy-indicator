/**
 * Created by Durgaprasad Budhwani on 1/5/2016.
 */

import React, {ActivityIndicatorIOS} from 'react-native';

export default class Loading extends React.Component {
  static propTypes = {
    color: React.PropTypes.string,
    style: React.PropTypes.any
  };

  setNativeProps (nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render () {
    return (<ActivityIndicatorIOS color={this.props.color}
                                  size="small"
                                  style={this.props.style}
                                  ref={c => this._root = c}/>);
  }
}
