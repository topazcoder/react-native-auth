import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { Colors, Text } from '../../../core';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';



export const Item = ({ img, img1,icon,asset, quantity, abbrev, description, current, Amount, bit,up, network,number,state,completed}) => {
  return (
    <View style={styles.headersContainer}>

      <View style={{ flex: 4, flexDirection: 'row',  }}>
        
       
        <View style={{}}>
          <Image source={img} />

        </View>
        <View style={{ marginLeft: 15 }}>
          <Text
            style={styles.abbrev}
            fontWeight={'medium'}

          > {abbrev}</Text>
          <Text
            style={styles.desc}
            fontWeight={'regular'}

          >{description} </Text>
          <Text
            style={styles.des1}
            fontWeight={'regular'}

          >{Amount} </Text>
          <Text
            style={styles.desc2}
            fontWeight={'regular'}

          >{up} </Text>
          
        </View>
      </View>

      <View style={{ flex: 3.5,}}>
      <Image source={img1} />

        <Text
          style={styles.current}
          fontWeight='regular'
        >{current}</Text>
        <Text
          style={styles.quantity}
          fontWeight='regular'

        >{quantity}</Text>
       <Text
            style={styles.desc3}
            fontWeight={'regular'}

          >{network} </Text>
          <Text
            style={styles.desc4}
            fontWeight={'regular'}

          >{bit} </Text>
          



      </View>
      <View style={{ flex: 3 }}>
        
        <Text
          style={styles.current1}
          fontWeight='regular'
        >{number}</Text>
        <Text
          style={styles.quantity}
          fontWeight='regular'

        >{''}</Text>
       <Text
            style={styles.desc5}
            fontWeight={'regular'}

          >{state} </Text>
          <Text
            style={{...styles.desc6, ...styles.desc6}}
            

          >{completed} </Text>


      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    fontSize: moderateVerticalScale(12),
    lineHeight: verticalScale(14),
    color: 'green',
  },
  headersContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(25),
    // marginLeft: scale(21),
    paddingHorizontal: scale(15),
    // backgroundColor: "pink",
    // borderColor:"red",
    borderBottomColor:'#C4C4C4',
    borderBottomWidth:1,
    // opacity:0.2
  
   

  },
  abbrev: {
    fontSize: verticalScale(16),
    marginLeft:-6,
    lineHeight: verticalScale(19),
  },
  desc: {
    fontSize: verticalScale(11),
    lineHeight: verticalScale(14),
    color: 'rgba(0, 0, 0, 0.5)',
    opacity:0.3,
    marginTop:2
    
  },
  des1:{
    fontSize: verticalScale(10),
    lineHeight: verticalScale(14),
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight:'600',
    opacity:0.5,
    marginTop:11
  },
  desc2:{
    fontSize: verticalScale(8),
    lineHeight: verticalScale(14),
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight:'600',
    opacity:0.5,
    marginVertical:10,
    paddingBottom:15

  },

  desc3:{
    fontSize: verticalScale(10),
    lineHeight: verticalScale(14),
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight:'600',
    opacity:0.5,
    marginTop:14
  },
  desc4:{
    fontSize: verticalScale(8),
    lineHeight: verticalScale(14),
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight:'500',
    opacity:0.5,
    marginVertical:10

  },
  desc5:{
    fontSize: verticalScale(10),
    lineHeight: verticalScale(14),
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight:'600',
    opacity:0.5,
    marginTop:14
  },
  desc6:{
    fontSize: verticalScale(8),
    lineHeight: verticalScale(14),
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight:'500',
    opacity:0.5,
    marginVertical:10

  },
  current: {
    fontSize: verticalScale(11),
    fontWeight:"600",
    lineHeight: verticalScale(14),
    color: 'rgba(0, 0, 0, 0.7)',
    opacity:0.8
    
  },
  current1: {
    fontSize: verticalScale(10),
    fontWeight:"400",
    lineHeight: verticalScale(14),
    color: 'rgba(0, 0, 0, 0.7)',
    opacity:0.4
    
  },

  quantity: {
    fontSize: verticalScale(10),
    lineHeight: verticalScale(12),
    color: 'rgba(0, 0, 0, 0.7)',
    opacity:0.7,
    marginTop:4
  }
  
});
