import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Box from './Box';

function Sidebar() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{color: '#fff'}}> imagem 1</Text>
      </View>
      <View>
        <Box style={styles.W}>
          <Text>W</Text>
        </Box>
        <Box style={styles.F}>
          <Text>F</Text>
        </Box>
        <Box style={styles.S}>
          <Text>S</Text>
        </Box>
        <Box style={styles.P}>
          <Text>P</Text>
        </Box>
      </View>
      <View>
        <Text style={{color: '#fff'}}> imagem 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#000000',
    paddingTop: 32,
    paddingBottom: 32,
    paddingRight: 16,
    paddingLeft: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  W: {},
  F: {},
  S: {},
  P: {},
});
export default Sidebar;
