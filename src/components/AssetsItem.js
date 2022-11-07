import { StyleSheet, View,Image,Text } from 'react-native'
import React from 'react'
// import { Colors, InterText } from '../../../core'
import { moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'

export const AssetsItem = ({ img, quality, price, sub,up }) => {
  return (
    <View style={styles.headersContainer}>
        <View style={{ flex: 1}}>
          <Image source={img}/>
        </View>
        <View style={{ flex: 2}}>
          <Text
            style={styles.headers}
        
          >{quality}</Text>
           <Text
            style={styles.headers1}
        
          >{sub}</Text>
          

        </View>
        <View style={{ flex: 2 ,flexDirection:'row',marginTop:28}}>
          <Text
            style={styles.headers}
          
          >{price}</Text>
           <Text
            style={styles.headers}
          
          >{up}</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  headers: {
    fontSize: moderateVerticalScale(12),
    lineHeight: verticalScale(14),
    color: "black",
    fontWeight:'600'
    
  },
  headers1: {
    fontSize: moderateVerticalScale(12),
    lineHeight: verticalScale(14),
    color: "#C4C4C4",
    
    fontWeight:'600',
    marginTop:12
    
  },
  headersContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(21),
    marginLeft: scale(21),
    marginBottom: 8,
  }
})