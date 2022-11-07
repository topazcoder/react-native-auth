import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
// import { AntDesign } from '@expo/vector-icons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
// import { Colors, InterText } from '../../../core';
const image1 =require('../assets/Shape.png')

export const Card = ({ title, subText, img ,img1}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title} >{title}</Text>
        <Text  style={styles.sub} >{subText}</Text>
      </View>
      <View style={styles.image}>
         <Image style={{width:50,height:50}} source={img}/> 
        <View style={styles.arrowContainer}>
         <Image style={{width:30,height:30}} source={img1}/> 
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: scale(5),
    backgroundColor: '#C4C4C429',
    paddingHorizontal: scale(19),
    paddingTop: scale(23),
    paddingBottom: scale(18),
    justifyContent: 'space-between',
    width: scale(165),
  },
  title: {
    fontSize: moderateScale(14),
    lineHeight: verticalScale(16),
  },
  sub: {
    fontSize: moderateScale(11),
    lineHeight: verticalScale(13),
    marginTop: scale(8),
  },
  image: {
    marginTop: verticalScale(17),
  },
  arrowContainer: {
    width: scale(40),
    height: scale(40),
    position: 'absolute',
    backgroundColor:"gray",
    borderRadius: scale(40) / 2,
    right: scale(11),
    bottom: scale(5),
    alignItems: 'center',
    justifyContent: 'center'
  },
});
