import React from 'react';
import { Animated, View } from 'react-native';

class SpringVerticalMotionExample extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.spring(
      this.state.animation,
      {
        toValue: 250,
        duration: 2000,
        friction: 1,
        tention: 20
      }
    ).start();
  }

  render() {
    const animationStyles = {
      transform: [
        { translateY: this.state.animation }
      ]
    };

    return (
      <Animated.View style={[objectStyles.object, animationStyles]}>
      </Animated.View>
    );
  }
}

const objectStyles = {
  object: {
    backgroundColor: 'orange',
    width: 100,
    height: 100
  }
}

export { SpringVerticalMotionExample };
