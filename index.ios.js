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
  Animated,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class AnimatedPlayground extends Component {
  constructor() {
    super();
    this.state = {
      animate: new Animated.Value(30),
      animateXY: new Animated.ValueXY(0, 0),
      radius: new Animated.Value(0)
    };
  }

  componentWillMount() {
    Animated.sequence([
      Animated.timing(this.state.animateXY, {
        toValue: { x: 0, y: height / 2 - 30},
        duration: 3000
      }),
      Animated.timing(this.state.animate, {
        toValue: 60,
        duration: 3000
      }),
      Animated.timing(this.state.radius, {
        toValue: 30,
        duration: 2000
      })
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={
            {
              width: this.state.animate,
              height: this.state.animate,
              backgroundColor: '#FABADA',
              position: 'absolute',
              top: this.state.animateXY.y,
              left: this.state.animateXY.x,
              borderRadius: this.state.radius
            }
          }
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
