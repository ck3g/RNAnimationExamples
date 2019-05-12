import React from 'react';
import { Animated, Text } from 'react-native';

class IncreasingSizeExample extends React.Component {
  state = {
    animation: new Animated.Value(100)
  }

  componentDidMount() {
    Animated.timing(
      this.state.animation,
      {
        toValue: 200,
        duration: 2000
      }
    ).start();
  }

  render() {
    const animationStyles = {
      width: this.state.animation,
      height: this.state.animation
    };

    return (
      <Animated.View style={[objectStyles.object, animationStyles]}>
        <Text style={objectStyles.text}>Hello World</Text>
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

export { IncreasingSizeExample };
