import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../styles/styles'
import { moderateVerticalScale } from 'react-native-size-matters'

export default function Head({ txt, navigation, onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.flexVew}> 
      <TouchableOpacity onPress={onPress}
        style={styles.img}
      >
        <Image style={styles.IconStyle} source={require('../assets/icons8.png')} />

      </TouchableOpacity>
      <Text style={styles.txtFont}>{txt}</Text>

      </View>
      <View style={{flex:1}}></View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    minheight: 58,
    flexDirection:'row',
    marginBottom:moderateVerticalScale(50)
    
  
   
  },
  flexVew:{
    flex:2,
    flexDirection:"row",
    alignItems:"center"
  },
 
  IconStyle:{
    width:26,
    height:26
  },
  txtFont: {
    fontSize: 19,
    fontWeight: '400',

    color: 'white',
    paddingHorizontal:15
  }
})

