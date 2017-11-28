import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions, Platform, PixelRatio} from 'react-native';


var _ = require('lodash');
// import TestComponent from './Components/Test.js';
import Obliques from './Components/Obliques';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
{/*        <TestComponent />*/}
        <Obliques />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
