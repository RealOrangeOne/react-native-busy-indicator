import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  DeviceEventEmitter,
  ActivityIndicator,
  Keyboard
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
      isVisible: props.startVisible,
      keyboardSpace: 0
    };
  }

  componentDidMount () {
    this.emitter = DeviceEventEmitter.addListener('changeLoadingEffect', this.changeLoadingEffect.bind(this));
    this.keyboardShowEvent = Keyboard.addListener('keyboardDidShow', this.changeKeyboardSpace.bind(this));
    this.keyboardHideEvent = Keyboard.addListener('keyboardDidHide', this.removeKeyboardSpace.bind(this));        
  }

  componentWillUnmount() {
    this.emitter.remove();
    this.keyboardShowEvent.remove();
    this.keyboardHideEvent.remove();
  }

  changeKeyboardSpace(frames){
    if (!frames.endCoordinates) return;
    this.setState({
      keyboardSpace: frames.endCoordinates.height
    });
  }

  removeKeyboardSpace(frames){
    this.setState({
      keyboardSpace: 0
    });
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
      <View style={[styles.container, { bottom: this.state.keyboardSpace }]}>
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
  color: React.PropTypes.string,
  overlayColor: React.PropTypes.string,
  overlayHeight: React.PropTypes.number,
  overlayWidth: React.PropTypes.number,
  size: React.PropTypes.oneOf(['small', 'large']),
  startVisible: React.PropTypes.bool,
  text: React.PropTypes.string,
  textColor: React.PropTypes.string,
  textFontSize: React.PropTypes.number,
  textNumberOfLines: React.PropTypes.number
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
