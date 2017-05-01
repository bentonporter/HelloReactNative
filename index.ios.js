'use strict';

var React = require('react');
var ReactNative = require('react-native');
var CountingButton = require('./CountingButton');

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class HelloReactNativeApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Hello World',
          component: CountingButton,
        }}/>
    );
  }
}

ReactNative.AppRegistry.registerComponent('HelloReactNative', function() {
  return HelloReactNativeApp
});
