//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';

// create a component
const ButtonCom = ({
    btnText,
    btnStyle,
    textStyle,
    onPress
}) => {
    console.log('my Prpose+++',onPress)
    return (
       <TouchableOpacity
       activeOpacity={0.8}
       style={{...styles.btnStyle,
        ...btnStyle
    }
    }
    onPress={onPress}
       >
       <Text style={{...styles.textStyles, ...textStyle}}>{btnText}</Text>
       </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle:{
        backgroundColor:"#1BBEE9",
        height:43,
        width:'100%',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    textStyles:{
        fontSize:20,
        color:'white',
        fontFamily:'bold'

    }
});

//make this component available to the app
export default ButtonCom;
