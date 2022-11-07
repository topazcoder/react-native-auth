import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { Colors, Text } from '../../../core';
import { scale, verticalScale } from 'react-native-size-matters';

  export const NotificationItem = ({ message, date, sub }) => {
    return (
        <View style={styles.container}>
            <View style={{paddingVertical:8}}>
                <Image source={require('../assets/envelope.png')} />
            </View>
            <View 
            style={{
                height:8,
                width:8,
                borderRadius:20,
                backgroundColor:'#00FC2F',
                marginTop:12,
                marginLeft:5

            }}
            >    
            </View>
            <View style={{ paddingLeft: 9,paddingVertical:8 }}>
                <Text style={styles.text}> {message} </Text>
                <Text style={styles.sub}> {sub}  </Text>
                <Text style={styles.date}> {date} </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: scale(20),
        marginTop: verticalScale(15),
        flexDirection: 'row',
    },
    date: {
        fontSize: verticalScale(8),
        lineHeight: verticalScale(9),
        color: 'rgba(0, 0, 0, 0.5)',
        paddingVertical:4,
        fontWeight:'400'
    },
    sub: {
        fontSize: verticalScale(10),
        lineHeight: verticalScale(12),
        color: 'rgba(0, 0, 0, 0.5)',
        paddingVertical:4
    },
    text: {
        fontSize: verticalScale(12),
        lineHeight: verticalScale(14),
        paddingVertical:4,
        color:'#000000'
    },
});
