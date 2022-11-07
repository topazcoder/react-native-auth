import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {Colors} from '../styles/styles'
import  LinearGradient  from 'react-native-linear-gradient'

export  function ButtonComponent(props) {
  return (
    <View style={styles.btnContainer}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[Colors.linear1, Colors.linear2]}
          style={{borderRadius:5}}
         >

      <TouchableOpacity style={[styles.btn,props.style]} onPress={props.onPress} >
          <Text style={styles.text} >{props.message} </Text>
      </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}


const styles = StyleSheet.create({
    btnContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
     width:299,
     height:48,
     borderRadius:5,
     justifyContent:'center',
     alignItems:'center'
    },
    text:{
        fontWeight:'700',
        color:Colors.white,
        fontSize:15,
        lineHeight:18
    }
})