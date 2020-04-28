import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class LoadingCard extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.container}>Loading...</Text>
      </View>
    );
  }
}

export default LoadingCard;
