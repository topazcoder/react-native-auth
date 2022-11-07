//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import ButtonCom from '../../components/ButtonCom'
import styles from './Styles';

// create a component
const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.ViewImage}>
          <Image source={require('../../assets/logoo.png')} style={styles.StyleImage} />
        </View>
        <View style={styles.FlexView}>
          <Text style={styles.TextStyles}>First cryptocurrency forum with its
            own blockchain based on POS</Text>
        </View>

        <View style={styles.btn}>
          <ButtonCom btnText="Get Started"
            btnStyle={{

              width: moderateScale(233),
              backgroundColor: "#1BBEE9"



            }}
            textStyle={{ color: 'white', fontSize: 15 }}

            onPress={() => navigation.navigate('SignScreen')}

          />
        </View>
      </View>
    </SafeAreaView>
  );
};


export default SignUp;
