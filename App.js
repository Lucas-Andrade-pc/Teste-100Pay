import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import  Main  from './src/components/pages/Dashboard'

import Drawer from './Menu';

export default class App extends Component {
  render() {
    return <Drawer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
