import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  DeviceEventEmitter,
  ActivityIndicator
} from 'react-native';

import PropTypes from 'prop-types';

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

  nocontainer: {
    position: 'absolute',    
    top: 0,    
    left: 0,        
    width: 0.001,
    height: 0.001
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

class BusyIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: props.startVisible
    };
  }

  componentDidMount () {
    this.emitter = DeviceEventEmitter.addListener('changeLoadingEffect', this.changeLoadingEffect.bind(this));
  }

  componentWillUnmount() {
    this.emitter.remove();
  }

  changeLoadingEffect(state) {
    this.setState({
      isVisible: state.isVisible,
      text: state.title ? state.title : this.props.text
    });
  }

  render() {
    if (!this.state.isVisible) {
      return (<View style={styles.nocontainer} />);
    }

    const customStyles = StyleSheet.create({
      overlay: {
        backgroundColor: this.props.overlayColor,
        width: this.props.overlayWidth,
        height: this.props.overlayHeight
      },
      
      text: {
        color: this.props.textColor,
        fontSize: this.props.textFontSize
      }
    });

    return (
      <View style={styles.container}>
        <View style={[styles.overlay, customStyles.overlay]}>
          <ActivityIndicator
            color={this.props.color}
            size={this.props.size}
            style={styles.progressBar} />

          <Text
            numberOfLines={this.props.textNumberOfLines}
            style={[styles.text, customStyles.text]}>
            {this.state.text}
          </Text>
        </View>
      </View>
    );
  }
}

BusyIndicator.propTypes = {
  color: PropTypes.string,
  overlayColor: PropTypes.string,
  overlayHeight: PropTypes.number,
  overlayWidth: PropTypes.number,
  size: PropTypes.oneOf(['small', 'large']),
  startVisible: PropTypes.bool,
  text: PropTypes.string,
  textColor: PropTypes.string,
  textFontSize: PropTypes.number,
  textNumberOfLines: PropTypes.number
};


BusyIndicator.defaultProps = {
  isDismissible: false,
  overlayWidth: 120,
  overlayHeight: 100,
  overlayColor: '#333333',
  color: '#f5f5f5',
  size: 'small',
  startVisible: false,
  text: 'Please wait...',
  textColor: '#f5f5f5',
  textFontSize: 14,
  textNumberOfLines: 1
};

module.exports = BusyIndicator;
