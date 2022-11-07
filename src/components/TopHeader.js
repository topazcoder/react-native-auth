import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../styles/styles';


export default function TopHeader({txt,onPress}) {
    return (
        
        <View style={styles.title} >
            <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[Colors.black, Colors.headerGradient]}
          style={{width:'100%', height:70, justifyContent:'center', alignItems:'center'}}
         >
             <TouchableOpacity onPress={onPress} style={styles.img} >
            <Image source={require('../assets/left.png')}  />
            </TouchableOpacity>
        <Text style={styles.txtStyle}>{txt}</Text>
        </LinearGradient>
        </View>
       
    )
}




const styles = StyleSheet.create({


    title: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 70,
        backgroundColor: 'red',
        flexDirection:'row'
    },
    img:{
     position:'absolute',
     left:30,
    
    },
    txtStyle:{
        color:Colors.white,
        fontWeight:'600',
        lineHeight:16.94
    }

})