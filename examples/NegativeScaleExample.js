import React from 'react';
import { Animated, Text } from 'react-native';

class NegativeScaleExample extends React.Component {
  state = {
    animation: new Animated.Value(1)
  }

  componentDidMount() {
    Animated.timing(
      this.state.animation,
      {
        toValue: -2,
        duration: 2000
      }
    ).start();
  }

  render() {
    const animationStyles = {
      transform: [
        { scale: this.state.animation }
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

export { NegativeScaleExample };
