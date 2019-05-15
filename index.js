
import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/Header';
import InsulinCalculator from './src/components/InsulinCalculator';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Loved By!'} />
    <InsulinCalculator />
  </View>
);

AppRegistry.registerComponent('lovedByPoc', () => App);
