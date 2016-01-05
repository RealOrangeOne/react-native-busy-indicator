/**
 * Created by Durgaprasad Budhwani on 1/5/2016.
 */

import React, {ProgressBarAndroid} from 'react-native';

export default class Loading extends React.Component {
  static propTypes = {
    color: React.PropTypes.string,
    style: React.PropTypes.any
  };

  setNativeProps (nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render () {
    return (<ProgressBarAndroid color={this.props.color}
                                style={this.props.style}
                                styleAttr="Small"
                                ref={c => this._root = c}/>);
  }
}
