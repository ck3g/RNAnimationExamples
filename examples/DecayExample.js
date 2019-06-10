import React from 'react';
import { Animated, View } from 'react-native';

class DecayExample extends React.Component {
  state = {
    animation: new Animated.Value(-150)
  }

  componentDidMount() {
    Animated.decay(
      this.state.animation,
      {
        toValue: 200,
        duration: 2000,
        velocity: 0.95,
        deceleration: 0.998
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

export { DecayExample };
