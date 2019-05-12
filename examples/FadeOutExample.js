import React from 'react';
import { Animated, View } from 'react-native';

class FadeOutExample extends React.Component {
  state = {
    animation: new Animated.Value(1)
  }

  componentDidMount() {
    Animated.timing(
      this.state.animation,
      {
        toValue: 0,
        duration: 2000
      }
    ).start();
  }

  render() {
    const animationStyles = {
      opacity: this.state.animation
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

export { FadeOutExample };
