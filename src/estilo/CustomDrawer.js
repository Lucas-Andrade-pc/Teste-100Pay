import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Button, SafeAreaView} from 'react-native';
import {DrawerItems, DrawerNavigatorItems} from 'react-navigation-drawer';

function CustomDrawer({...props}) {
  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Image source={require('../assets/logo.png')} />
      </View>
      <Text style={styles.bemVindo}> Bem-Vindo Cliente </Text>

      <Text style={styles.nome}> Nome Cliente </Text>
      <Text style={styles.email}> E-mail logado </Text>
      <SafeAreaView style={styles.content} >
        <DrawerNavigatorItems {...props} />
          
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#000000'
    
  },
  content: {
    flex: 1,
    marginTop: 20,
    
    
  },
  bemVindo: {
    marginLeft: 4,
    fontSize: 20,
    fontFamily: "Roboto_300Light",
  },
  area: {
    marginTop: 60,
    marginLeft: 10,
    marginBottom: 10,
  },
  nome: {
    marginLeft: 5,
    fontSize: 15,
    fontFamily: "Roboto_300Light",
  },
  email: {
    marginLeft: 5,
    fontSize: 15,
    fontFamily: "Roboto_300Light",
  },
});

export default CustomDrawer;
