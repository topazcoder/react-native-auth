//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './Styles';
import TextInputWithLable from '../../components/TextInputWithLable';
import { moderateScale, moderateVerticalScale,verticalScale } from 'react-native-size-matters';
import ButtonCom from '../../components/ButtonCom'


// create a component
const VerifyAccount = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.TextPassword}>Forgot Password</Text>
            <Text style={styles.TextSub}>Enter the email to reset your password  </Text>
            <TextInputWithLable
                    label='Email Address'
                    // placeHolder='Enter address'
                    labelText={{color:'#686767',marginBottom:6}}
                    inputStyle={{ marginBottom: moderateVerticalScale(35)}}
                    keyboardType="email-address"


                />
                <View style={styles.mainStyles}>
                <ButtonCom btnText="Send link"
                    btnStyle={styles.LgindBtn}
                    textStyle={{ color: 'white', fontSize: 15}}

                    onPress={() => navigation.navigate('LinkSend')}

                />

                </View>
        </View>
    );
};



//make this component available to the app
export default VerifyAccount;
