import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  VerticalMotionExample,
  FadeOutExample,
  FadeInExample,
  PositiveScaleExample,
  NegativeScaleExample
} from './examples';

const examples = {
  verticalMotion: {
    title: 'Vertical motion example',
    component: VerticalMotionExample
  },
  fadeOut: {
    title: 'Fade out example',
    component: FadeOutExample
  },
  fadeIn: {
    title: 'Fade in example',
    component: FadeInExample
  },
  positiveScale: {
    title: 'Positive scale example',
    component: PositiveScaleExample
  },
  negativeScale: {
    title: 'Negative scale example',
    component: NegativeScaleExample
  }
}

export default class App extends React.Component {
  state = {
    currentExample: 'negativeScale'
  }

  render() {
    const { title, component } = examples[this.state.currentExample];

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>

        { React.createElement(component) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    position: 'absolute',
    top: '5%'
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600'
  }
});
