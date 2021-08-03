import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const LogOut = () =>{
    return (
        <View style={styles.container}>
            <Ionicons name="log-out" size={32}  style={styles.LogOut} />
            <Text style={styles.texto}> Saiu </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    LogOut: {
        flex: 1,
    },
    texto:{
        
        color:'#fff'
    }
})
export default LogOut;