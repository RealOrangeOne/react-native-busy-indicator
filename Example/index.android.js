/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var BusyIndicator = require('react-native-busy-indicator');
var loaderHandler = require('react-native-busy-indicator/LoaderHandler');
var TimerMixin = require('react-timer-mixin');

var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var BusyIndicatorDemo;
BusyIndicatorDemo = React.createClass({
  mixins: [TimerMixin],
  render: function () {
      return (
        <View style={styles.container}>
          <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={this._handlePress}
          >
            Press Me!
          </Button>
          <BusyIndicator></BusyIndicator>
        </View>
      );
  },
  _handlePress(event) {
    loaderHandler.showLoader("Loading");
    this.setTimeout(
      () => { loaderHandler.hideLoader("Loading") },
      3000
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('BusyIndicator', () => BusyIndicatorDemo);
