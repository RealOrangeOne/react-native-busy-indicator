/**
 * Created by Durgaprasad Budhwani on 1/2/2016.
 */

'use strict';

var React = require('react-native');
var Subscribable = require('Subscribable');
var loaderHandler = require('./LoaderHandler');

var {
  StyleSheet,
  View,
  Text,
  ActivityIndicatorIOS
  } = React;

var styles = StyleSheet.create({
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

var BusyIndicator = React.createClass({
  mixins: [Subscribable.Mixin],

  componentDidMount: function () {
    this.addListenerOn(loaderHandler.getEventEmitter(), 'changeLoadingEffect', this.changeLoadingEffect, null);
  },

  getInitialState() {
    return {
      isVisible: false
    };
  },

  changeLoadingEffect(state) {
    console.log(state);
    this.setState({
      isVisible: state.isVisible,
      text: state.title != null ? state.title :  'Please wait...'
    });
  },

  getDefaultProps() {
    return {
      isDismissible: false,
      overlayWidth: 120,
      overlayHeight: 100,
      overlayColor: '#333333',
      color: "#f5f5f5",
      text: 'Please wait...',
      textColor: '#f5f5f5',
      textFontSize: 14
    };
  },

  render() {
    var customStyles = StyleSheet.create({
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
      return (<View />)
    } else {
      return (
        <View style={[styles.container]}>
          <View style={customStyles.overlay}>
            <ActivityIndicatorIOS color={this.props.color} size="small" style={styles.progressBar}/>
            <Text style={customStyles.text} numberOfLines={1}>{this.state.text}</Text>
          </View>
        </View>
      )
    }
  },

  propTypes: {
    color: React.PropTypes.string,
    overlayWidth: React.PropTypes.number,
    overlayHeight: React.PropTypes.number,
    overlayColor: React.PropTypes.string,
    text: React.PropTypes.string,
    textColor: React.PropTypes.string,
    textFontSize: React.PropTypes.number
  }
});

module.exports = BusyIndicator;


