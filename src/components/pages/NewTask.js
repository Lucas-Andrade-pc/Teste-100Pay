import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Box from '../Box';

import {Roboto_400Regular,
  Roboto_300Light,
  Roboto_700Bold,
  Roboto_100Thin, useFonts} from '@expo-google-fonts/roboto'

import {AppLoading} from 'expo' 


const NewTask = ({navigation}) => {
   
    const [text, setText] = useState('');

    const fonts = useFonts({
      Roboto_400Regular,
      Roboto_300Light,
      Roboto_700Bold,
      Roboto_100Thin,
     })
    if(!fonts) {
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Criar</Text>
        <Text style={styles.texto}>Nova Tarefa</Text>

        <TextInput 
        style={styles.UselessTextInput}
       
        placeholder="Nome da tarefa"
        onChangeText={text => setText(text)}
        defaultValue={text}
        
        ></TextInput>

      <View style={styles.content}>
        <TouchableOpacity style={styles.icons} >
          <Text style={styles.contentData}>Sexta 18, Novembro</Text>
          <Ionicons name="md-calendar-outline" size={32}  style={styles.calendarOutline} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons2}>
          <Text style={styles.contentHora}>1:00 pm - 3:00 pm</Text>
          <Ionicons name="hourglass-outline" size={32}  style={styles.hourglassOutline} />
        </TouchableOpacity>
      </View>
      <View style={styles.W}>
          <Box >
            <Text>W</Text>
          </Box>
          <TouchableOpacity>
            <Text style={{fontSize: 25,
                          marginTop: 50,
                          marginLeft: 50,
                          fontFamily:'Roboto_400Regular', }}>Work</Text>
            <Ionicons name="" style={{}} size={32}   />
          </TouchableOpacity>
      </View>

      <View style={styles.contentButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} >CRIAR TAREFA</Text>
        </TouchableOpacity>
          </View>
      </View>
    )
  
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'flex-start',
    margin: 30,
    marginTop: 100,
    
  },
  texto:{
    fontSize:30,
    fontFamily:'Roboto_700Bold'
    
  },
  UselessTextInput:{
    marginTop: 60,
    maxHeight: 40,
    width: '100%',
    fontSize: 20,
    
  },
  content:{
    alignItems:'flex-start',
    justifyContent:'center',
    marginTop:120,
    marginLeft: 50,
    
  },
  contentData: {
    marginLeft: 20,
    fontSize: 20,
    fontFamily:'Roboto_400Regular'
  },
  contentHora: {
    marginTop: 50,
    marginLeft: 20,
    fontSize: 20,
    fontFamily:'Roboto_400Regular'
  },
  contentButton: {
    
    marginTop: 60,
    fontFamily: 'Roboto_400Regular',
    width: '100%',
  },
  button: {
    
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#4e4e4e',
    height: 60,
    borderRadius:10,
    
    
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontFamily:'Roboto_400Regular'
  },
  icons:{
    flexDirection: 'row-reverse',
  },
  icons2:{
    flexDirection: 'row-reverse',
  },
  calendarOutline:{
    color:"#003bf6",
  },
  hourglassOutline:{
    color:"#ea0000",
    marginTop: 50,
    
  },
  W:{
    flex: 1,
    paddingLeft:10,
    paddingBottom:10,
    marginTop: 100,
    marginLeft:50, 
    height: 85,
    width: 250,
    flexDirection:'row',
    alignItems:'center',
    
    borderRadius:10,
    elevation:1
    
    
    
  }
})
export default NewTask;
