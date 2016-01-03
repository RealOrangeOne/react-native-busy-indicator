# react-native-busy-indicator [![npm version](https://badge.fury.io/js/react-native-busy-indicator.svg)](https://badge.fury.io/js/react-native-busy-indicator) [![Requirements Status](https://requires.io/github/Durgaprasad-Budhwani/react-native-busy-indicator/requirements.svg?branch=master)](https://requires.io/github/Durgaprasad-Budhwani/react-native-busy-indicator/requirements/?branch=master) [![Build Status](https://travis-ci.org/Durgaprasad-Budhwani/react-native-busy-indicator.svg?branch=master)](https://travis-ci.org/Durgaprasad-Budhwani/react-native-busy-indicator)


![Demo](https://raw.githubusercontent.com/Durgaprasad-Budhwani/react-native-busy-indicator/master/demo.png)

## Install
```shell
npm install react-native-busy-indicator --save
```

## Usage
Keep <BusyIndicator /> component at root level and at the last inside view.

```js
var BusyIndicator = require('react-native-busy-indicator');

var YourComponent = React.createClass({

  ...
  render() {
    return (
      <View>
        ... 
        <BusyIndicator />  
      </View>
    );  
  }
```

### Showing the BusyIndicator
Showing busy indicator can be called from any other page with the help of loaderHandler provided <BusyIndicator /> tag should be placed at root level.

```js
  var loaderHandler = require('react-native-busy-indicator/LoaderHandler');
  
  
  loaderHandler.showLoader("Loading"); // 'Loading' is title
```

### Hiding the BusyIndicator
```js
  var loaderHandler = require('react-native-busy-indicator/LoaderHandler');
    
    
    loaderHandler.hideLoader();
```

## Props

- **`color`** _(Number)_ - color of the indicator. Default gray.
- **`overlayWidth`** _(Number)_ - overlay width.
- **`overlayHeight`** _(Number)_ - overlay height.
- **`overlayColor`** _(String)_ - overlay color.
- **`text`** _(String)_ - text. Default 'Please wait...'.
- **`textColor`** _(String)_ - text color.
- **`textFontSize`** _(Number)_ - text font size.

## Tools

- **IDE** - [IntelliJ IDEA ](https://www.jetbrains.com/idea/ "IntelliJ IDEA")
- **Emulator** - [Genymotion](https://www.genymotion.com/ "genymotion")

