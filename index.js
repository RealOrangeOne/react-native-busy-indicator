import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  DeviceEventEmitter,
  ActivityIndicator
} from 'react-native';

const styles = StyleSheet.create({
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
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10
  },
  text: {
    marginTop: 8
  }
});

const BusyIndicator = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
    overlayColor: React.PropTypes.string,
    overlayHeight: React.PropTypes.number,
    overlayWidth: React.PropTypes.number,
    startVisible: React.PropTypes.bool,
    text: React.PropTypes.string,
    textColor: React.PropTypes.string,
    textFontSize: React.PropTypes.number,
    size: React.PropTypes.oneOf(['small', 'large'])
  },

  getDefaultProps() {
    return {
      overlayWidth: 120,
      overlayHeight: 100,
      overlayColor: 'rgba(51,51,51, 0.8)',
      color: '#f5f5f5',
      startVisible: false,
      text: 'Please wait...',
      textColor: '#f5f5f5',
      textFontSize: 14,
      size: 'large'
    };
  },

  getInitialState() {
    return {
      isVisible: this.props.startVisible,
      text: this.props.text
    };
  },

  componentWillMount() {
    this.customStyles = {
      overlay: {
        backgroundColor: this.props.overlayColor,
        width: this.props.overlayWidth,
        height: this.props.overlayHeight
      },
      text: {
        color: this.props.textColor,
        fontSize: this.props.textFontSize
      }
    }
  },

  componentDidMount () {
    this.emitter = DeviceEventEmitter.addListener('changeLoadingEffect', this.changeLoadingEffect);
  },

  componentWillUnmount() {
    this.emitter.remove();
  },

  changeLoadingEffect(state) {
    this.setState({
      isVisible: state.isVisible,
      text: state.title ? state.title : this.props.text
    });
  },


  render() {
    if (!this.state.isVisible) {
      return (<View />);
    }

    return (
      <View style={[styles.container]}>
        <View style={[styles.overlay, this.customStyles.overlay]}>
          <ActivityIndicator
            color={this.props.color}
            size={this.props.size}
            style={styles.progressBar}/>
          <Text numberOfLines={1} style={[styles.text, this.customStyles.text]}>
            {this.state.text}
          </Text>
        </View>
      </View>
    );
  }
});

module.exports = BusyIndicator;
