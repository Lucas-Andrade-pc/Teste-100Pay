import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Box(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d4c4c',
    width: 56,
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    elevation: 5,
    
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Box;
