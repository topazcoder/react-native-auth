import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Colors } from '../styles/styles'

export default function Header() {
    return (
        <View style={styles.headerSection}>
             <Image source={require('../assets/header.png')} style={styles.img} />
        </View>
    )
}

 
  const styles = StyleSheet.create({

    headerSection: {
        width: '100%',
        height: '30%',
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    
      },
      img:{
          resizeMode:'cover',
          width:150,
          height:150
      }
  })
