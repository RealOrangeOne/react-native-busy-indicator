# react-native-busy-indicator
[![npm version](https://badge.fury.io/js/react-native-busy-indicator.svg)](https://badge.fury.io/js/react-native-busy-indicator)
[![Build Status](https://travis-ci.org/Durgaprasad-Budhwani/react-native-busy-indicator.svg?branch=master)](https://travis-ci.org/Durgaprasad-Budhwani/react-native-busy-indicator)
[![NPM downloads](http://img.shields.io/npm/dm/react-native-busy-indicator.svg?style=flat-square)](https://www.npmjs.com/package/react-native-busy-indicator)

## Install
```shell
npm install react-native-busy-indicator --save
```

## Usage
Keep <BusyIndicator /> component at root level and at the last inside view.

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

### Showing the BusyIndicator
Showing busy indicator can be called from any other page with the help of loaderHandler provided <BusyIndicator /> tag should be placed at root level.

```js
var loaderHandler = require('react-native-busy-indicator/LoaderHandler');
loaderHandler.showLoader("Loading"); // 'Loading' is the text
```

### Hiding the BusyIndicator
```js
var loaderHandler = require('react-native-busy-indicator/LoaderHandler');
loaderHandler.hideLoader();
```

## Properties

| Prop | Type | Description |
|---|---|---|
|**`color`**|`number`| color of the indicator. Default gray|
|**`overlayWidth`**|`number`|overlay width|
|**`overlayHeight`**|`number`|overlay height|
|**`overlayColor`**|`string`|overlay color|
|**`text`**|`string`|text. Default: `Please wait...`|
|**`textColor`**|`string`| text color|
|**`textFontSize`**|`number`|text font size|

## Demo

![Demo](https://raw.githubusercontent.com/Durgaprasad-Budhwani/react-native-busy-indicator/master/demo.gif)

## Example

Check full example in the `Example` folder.

## License

[MIT License](http://opensource.org/licenses/mit-license.html)
