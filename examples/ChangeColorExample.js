import React from 'react';
import { Animated, Text } from 'react-native';

class ChangeColorExample extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(
      this.state.animation,
      {
        toValue: 1,
        duration: 3000
      }
    ).start();
  }

  render() {
    const animationStyles = {
      backgroundColor: this.state.animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['orange', 'rgb(0, 200, 0)', 'purple']
      })
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

export { ChangeColorExample };
