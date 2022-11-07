import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { Colors, InterText } from '../../../core';
import { verticalScale } from 'react-native-size-matters';

export const HistoryItem = ({ title, id, amount, date }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 12 }}>
      <View>
        <Image source={require('../assets/solana2.png')} />
      </View>
      <View style={{ flex: 1, marginLeft: 23}}>
        <Text fontWeight={'medium'} style={styles.title}>{title}</Text>
        <Text fontWeight={'regular'} style={styles.id}>{id}</Text> 
      </View>
      <View>
        <Text style={styles.amount} fontWeight={'medium'} >{amount}</Text>
        <Text fontWeight={'medium'} style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: verticalScale(12),
    lineHeight: verticalScale(14),
  },
  id: {
    fontSize: verticalScale(11),
    lineHeight: verticalScale(13),
  },
  amount: {
    fontSize: verticalScale(12),
    lineHeight: verticalScale(14),
    color: '#FF0100',
  },
  date: {
    fontSize: verticalScale(5),
    lineHeight: verticalScale(6),
    color: "red",
    textAlign: 'right'
  },
});
