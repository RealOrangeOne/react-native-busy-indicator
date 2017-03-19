# React-Native Busy Indicator
[![npm version](https://badge.fury.io/js/react-native-busy-indicator.svg)](https://badge.fury.io/js/react-native-busy-indicator)
[![Circle CI](https://circleci.com/gh/RealOrangeOne/react-native-busy-indicator.svg)](https://circleci.com/gh/RealOrangeOne/react-native-busy-indicator)
[![NPM downloads](http://img.shields.io/npm/dm/react-native-busy-indicator.svg?style=flat-square)](https://www.npmjs.com/package/react-native-busy-indicator)

## Install
```shell
npm install react-native-busy-indicator --save
```

## Usage
Place the indicator component as close to the root as possible, outside your other view components

```js
const BusyIndicator = require('react-native-busy-indicator');

const YourComponent = React.createClass({
  render() {
    return (
      <View>
        ...
        <BusyIndicator />
      </View>
    );
  }
```

### Show / Hide loader
Toggling the component can be done from any file, provided the component has already been placed and rendered.

```js
const loaderHandler = require('react-native-busy-indicator/LoaderHandler');

loaderHandler.showLoader("Loading"); // Show indicator with message 'Loading'
loaderHandler.showLoader("Loading More"); // Show indicator with message 'Loading More'

loaderHandler.hideLoader();  // Hide the loader
```

## Component Properties

| Prop | Type | Description |
|---|---|---|
|**`color`**|`number`| color of the indicator. Default gray|
|**`overlayWidth`**|`number`|overlay width|
|**`overlayHeight`**|`number`|overlay height|
|**`overlayColor`**|`string`|overlay color|
|**`text`**|`string`|text. Default: `Please wait...`|
|**`textColor`**|`string`| text color|
|**`textFontSize`**|`number`|text font size|
|**`textNumberOfLines`**|`number`| total number of lines does not exceed this number. Default: 1|
|**`Size`**|`small/large`| Size of the spinner. Default: small|


## Demo

![Demo](https://raw.githubusercontent.com/RealOrangeOne/react-native-busy-indicator/master/demo.gif)

__Note__: The spinner moves much smoother than shown in recording!
