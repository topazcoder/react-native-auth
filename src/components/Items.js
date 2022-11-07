import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { Colors, Text } from '../../../core';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const renderIcon = (icon) => {
  switch (icon) {
    case 'gift':
      return <Image style={{width:24,height:24,marginTop:3}} source={require('../assets/gift.png')} />;
   
   

    default:
      return null;
  }
};

export const Items = ({ icon, asset, quantity, abbrev, description, current, styleColor}) => {
  return (
    <View style={styles.headersContainer}>
      <View style={{ flex: 4, flexDirection: 'row' }}>
        {renderIcon(icon)}
        <View style={{ marginLeft: 6 }}>
          <Text
            style={styles.abbrev}
          // fontWeight={'medium'}

          >{abbrev}  </Text>
          <Text
            style={styles.desc}
            fontWeight={'regular'}
          >{description}</Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        {/* <Image source={require('../../assets/chart.png')} /> */}
      </View>
      <View style={{ flex: 2 }}>
        


        <Text
          style={{...styles.quantity,...styleColor}}
          fontWeight='regular'
        >{quantity} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    fontSize: moderateVerticalScale(12),
    lineHeight: verticalScale(14),
    color: 'blue',
  },
  headersContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(21),
    // marginLeft: scale(21),
    paddingBottom:10,
      borderBottomWidth:1,
      borderBottomColor:'#A5A5A5'
      
  },
  abbrev: {
    fontSize: verticalScale(10),
    lineHeight: verticalScale(19),
    fontWeight:'600',
    color:'rgba(255, 255, 255, 1)',
    opacity:0.8
    
  },
  desc: {
    fontSize: verticalScale(9),
    lineHeight: verticalScale(10),
    color:'#1BBEE9'
  },
 
  quantity: {
    fontSize: verticalScale(11),
    lineHeight: verticalScale(14),
    color: '#FFFFFF',
    alignSelf:"flex-end",
    marginTop:10
    
  }
});
