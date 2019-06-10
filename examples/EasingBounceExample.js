import React from 'react';
import { Animated, View, Easing } from 'react-native';

class EasingBounceExample extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(
      this.state.animation,
      {
        toValue: 250,
        duration: 3000,
        easing: Easing.bounce
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

export { EasingBounceExample };
