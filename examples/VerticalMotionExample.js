import React from 'react';
import { Animated, View } from 'react-native';

const TITLE = 'Vertical motion animation';

class VerticalMotionExample extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }

  componentDidMount() {
    this.props.setExampleTitle(TITLE);

    Animated.timing(
      this.state.animation,
      {
        toValue: 250,
        duration: 2000
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

export { VerticalMotionExample };
