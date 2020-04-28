import React, {Component} from 'react';
import {View, Text} from 'react-native';

class LoadingError extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Loading Error</Text>
      </View>
    );
  }
}

export default LoadingError;