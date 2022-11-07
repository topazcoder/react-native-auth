import { StyleSheet, View ,Image,Text} from 'react-native';
import React from 'react';
// import { InterText } from '../../../core';
import { verticalScale } from 'react-native-size-matters';

export const Link = ({ icon, text, style ,img}) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={img}/> 
      <Text style={styles.text} >{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: verticalScale(12),
    lineHeight: verticalScale(14),
    marginTop: verticalScale(11),
  },
});