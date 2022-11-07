
import { Image, StyleSheet, Text, View, Button, TouchableOpacity, } from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import Head from '../../components/Head';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

import ButtonCom from '../../components/ButtonCom';
export default function ConfirmOtp({ navigation }) {
  return (
    <View style={styles.container}>
      <Head  onPress={() => navigation.goBack()} />



      <Text style={styles.OptTEXT}>Verify Account</Text>
      <Text style={styles.OptSub}>
        Enter the code sent to your email or phone number
      </Text>
      <View
        style={{
          marginVertical: moderateVerticalScale(70),
          // backgroundColor:'pink',
          paddingHorizontal: moderateScale(40),
          alignItems:'center'
        }}
      >
        <OTPInputView
          style={{ height: moderateScale(47), }}
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />

        <View style={styles.btn}>
          <ButtonCom btnText="Verify"
            btnStyle={styles.LgindBtn}
            textStyle={{ color: 'white', fontSize: scale(15) }}

            onPress={() => navigation.navigate('VerifyAccount')}

          />
        </View>
        <View style={styles.LoginView}>
          <View style={styles.WrapView}>
            <Text style={styles.titleStyles}>Didnt recieve any code?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('VerifyAccount')}>
              <Text style={styles.BtnTitle}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 20



  },

  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  OptTEXT: {
    fontSize: scale(25),
    lineHeight: 31,
    fontStyle: 'normal',
    color: '#FFFFFF',
   
    fontWeight: '600'

  },

  OptSub: {
    fontSize: scale(12),
    lineHeight: 15,
    fontStyle: 'normal',
    color: '#E1E1E1',
    fontWeight: '600',
    marginTop:moderateScale(4)
    
  },
  borderStyleBase: {
    width: moderateScale(36),
    height: moderateScale(47),
  },
  underlineStyleBase: {
    width: moderateScale(47),
    height: moderateScale(47),
    borderWidth: 1,

    borderRadius: 5,
    backgroundColor: "#A0C9D4"

  },
  btn: {
      marginTop:moderateScale(50)

  },
  titleStyles: {
    fontSize: scale(12),
    color: "white"
  },
  BtnTitle: {
    fontSize: scale(12),
    color: '#1BBEE9'
  },

  LoginView: {


    marginTop: moderateScale(13),
    justifyContent: 'center',
    flexDirection: 'row'

  },
  LoginView: {
    alignItems: 'center'

  },

  WrapView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  LgindBtn: {
    width: 236,
    alignItems: 'center'
  }
});
