import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  VerticalMotionExample,
  FadeOutExample,
  FadeInExample,
  PositiveScaleExample,
  NegativeScaleExample,
  IncreasingSizeExample,
  DecreasingSizeExample,
  RotateExample,
  RotateXExample,
  RotateYExample,
  ChangeColorExample,
  SpringVerticalMotionExample,
  LoopRotateExample,
  EasingBounceExample,
  SequenceExample,
  ParallelExample,
  DelayExample,
  StaggerExample
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
  },
  increasingSize: {
    title: 'Increasing size example',
    component: IncreasingSizeExample
  },
  decreasingSize: {
    title: 'Decreasing size example',
    component: DecreasingSizeExample
  },
  rotate: {
    title: 'Rotate example',
    component: RotateExample
  },
  rotateX: {
    title: 'RotateX example',
    component: RotateXExample
  },
  rotateY: {
    title: 'RotateY example',
    component: RotateYExample
  },
  changeColor: {
    title: 'Change color example',
    component: ChangeColorExample
  },
  spring: {
    title: 'Spring example',
    component: SpringVerticalMotionExample
  },
  loop: {
    title: 'Loop example',
    component: LoopRotateExample
  },
  easingBounce: {
    title: 'Easing bounce example',
    component: EasingBounceExample
  },
  sequence: {
    title: 'Sequence example',
    component: SequenceExample
  },
  parallel: {
    title: 'Parallel example',
    component: ParallelExample
  },
  delay: {
    title: 'Delay example',
    component: DelayExample
  },
  stagger: {
    title: 'Stagger example',
    component: StaggerExample
  }
}

export default class App extends React.Component {
  state = {
    currentExample: 'stagger' // Change to see an example
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
