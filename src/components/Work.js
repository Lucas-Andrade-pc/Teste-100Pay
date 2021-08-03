import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Work extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#ee1313'}}> dale work </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
    backgroundColor:'#000000'
  }

})
