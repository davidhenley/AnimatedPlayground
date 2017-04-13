/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

export default class AnimatedPlayground extends Component {
  constructor() {
    super();
    this.state = {
      animate: new Animated.Value(30),
      animateXY: new Animated.ValueXY(0, 0)
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{ width: 30, height: 30, backgroundColor: '#FABADA' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AnimatedPlayground', () => AnimatedPlayground);
