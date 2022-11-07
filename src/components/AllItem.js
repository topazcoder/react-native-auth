import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { Colors, Text } from '../../../core';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';



 const AllItem = ({ img, img1,icon,asset, quantity, abbrev, description, current, Amount, bit,up, network,number,state,completed}) => {
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

        >{quantity}</Text>
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
export default AllItem

const styles = StyleSheet.create({
  headers: {
    fontSize: moderateVerticalScale(12),
    lineHeight: verticalScale(14),
    color: 'green',
  },
  headersContainer: {
    flexDirection: 'row',
    height:scale(40),
    marginTop: verticalScale(25),
    // marginLeft: scale(21),
    paddingHorizontal: scale(15),
   
   
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
  
  


 
 
 
 
  current1: {
    fontSize: verticalScale(10),
    fontWeight:"400",
    lineHeight: verticalScale(14),
    color: 'rgba(0, 0, 0, 05)',
    // opacity:0.9
    
  },

  quantity: {
    fontSize: verticalScale(10),
    lineHeight: verticalScale(12),
    color: 'rgba(0, 0, 0, 0.9)',
    opacity:0.7,
    marginTop:4
  }
  
});
