import React from 'react';
import { Animated, Text } from 'react-native';

class LoopRotateExample extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }

  componentDidMount() {
    const rotateAnimation = Animated.timing(
      this.state.animation,
      {
        toValue: 1,
        duration: 2000
      }
    );

    Animated.loop(
      rotateAnimation,
      {
        iterations: 2
      }
    ).start();
  }

  render() {
    const animationStyles = {
      transform: [
        {
          rotate: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })
        }
      ]
    };

    return (
      <Animated.View style={[objectStyles.object, animationStyles]}>
        <Text style={objectStyles.text}>Hello</Text>
      </Animated.View>
    );
  }
}

const objectStyles = {
  object: {
    backgroundColor: 'orange',
    width: 100,
    height: 100
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    padding: 5
  }
}

export { LoopRotateExample };
