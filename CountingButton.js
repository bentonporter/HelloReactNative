'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  Button
} from 'react-native';

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  }
});

class CountingButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }

  onPressIncrement() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPressIncrement.bind(this)}
          title={this.state.counter.toString()}
          color="#841584"
          accessibilityLabel="Click this to increment the counter"
        />
      </View>
    );
  }
}

module.exports = CountingButton;
