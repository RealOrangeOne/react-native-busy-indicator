/**
 * Created by Durgaprasad Budhwani on 1/2/2016.
 */

import React from 'react-native';
import { DeviceEventEmitter } from 'react-native';
import loaderHandler  from './LoaderHandler';
import Loading  from './loading';

let {
  StyleSheet,
  View,
  Text
} = React;

let styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1
  },
  progressBar: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
});

let BusyIndicator = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
    overlayColor: React.PropTypes.string,
    overlayHeight: React.PropTypes.number,
    overlayWidth: React.PropTypes.number,
    text: React.PropTypes.string,
    textColor: React.PropTypes.string,
    textFontSize: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      isDismissible: false,
      overlayWidth: 120,
      overlayHeight: 100,
      overlayColor: '#333333',
      color: '#f5f5f5',
      text: 'Please wait...',
      textColor: '#f5f5f5',
      textFontSize: 14
    };
  },

  getInitialState() {
    return {
      isVisible: false
    };
  },
  componentDidMount () {
    this.emitter = DeviceEventEmitter.addListener('changeLoadingEffect', this.changeLoadingEffect, null);
  },

  componentDidUnmount() {
    this.emitter.remove();
  }

  changeLoadingEffect(state) {
    this.setState({
      isVisible: state.isVisible,
      text: state.title != null ? state.title : 'Please wait...'
    });
  },


  render() {
    let customStyles = StyleSheet.create({
      overlay: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        backgroundColor: this.props.overlayColor,
        width: this.props.overlayWidth,
        height: this.props.overlayHeight
      },
      text: {
        color: this.props.textColor,
        fontSize: this.props.textFontSize,
        marginTop: 8
      }
    });

    if (!this.state.isVisible) {
      return (<View />);
    } else {
      return (
        <View style={[styles.container]}>
          <View style={customStyles.overlay}>
            <Loading color={this.props.color}
                     size="small"
                     style={styles.progressBar}/>
            <Text numberOfLines={1}
                  style={customStyles.text}>{this.state.text}</Text>
          </View>
        </View>
      );
    }
  }
});

module.exports = BusyIndicator;
