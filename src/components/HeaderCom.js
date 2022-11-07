//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
const HeaderCom = ({Icon,Text}) => {
    console.log('ajfbajfb',Icon)

    return (
        <View style={styles.headerStyle}>

            <TouchableOpacity>
                <Text>{Icon}</Text>
                {/* <Text>{Text}</Text> */}
            </TouchableOpacity>
             <Text></Text>


        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row', 
        alignItems: 'center',
         justifyContent: 'space-between',
          backgroundColor: 'red',
           width: '100%', 
           minHeight: 42,
           backgroundColor:"red"

    },
});

//make this component available to the app
export default HeaderCom;
