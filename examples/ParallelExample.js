import React from 'react';
import { Animated, View, Easing } from 'react-native';

class ParallelExample extends React.Component {
  state = {
    transformAnimation: new Animated.Value(0),
    fallAnimation: new Animated.Value(0)
  }

  componentDidMount() {
    const transformToBallAnimation = Animated.timing(
      this.state.transformAnimation,
      {
        toValue: 50,
        duration: 1000
      }
    );

    const fallAnimation = Animated.timing(
      this.state.fallAnimation,
      {
        toValue: 250,
        duration: 3000,
        easing: Easing.bounce
      }
    );

    Animated.parallel([
      transformToBallAnimation,
      fallAnimation
    ]).start();
  }

  render() {
    const animationStyles = {
      borderRadius: this.state.transformAnimation,
      transform: [
        { translateY: this.state.fallAnimation }
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

export { ParallelExample };
