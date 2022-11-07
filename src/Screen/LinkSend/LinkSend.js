//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import TextInputWithLable from '../../components/TextInputWithLable';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import ButtonCom from '../../components/ButtonCom'
import styles  from './Styles'


// create a component
const LinkSend = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.TextPassword}>Link Sent</Text>
            <Text style={styles.TextSub}>Please check your email and click on the link to {'\n'}
             reset your password </Text>
           
            <View style={styles.mainStyles}>
                <ButtonCom btnText="Got it"
                    btnStyle={styles.LgindBtn}
                    textStyle={{ color: 'white', fontSize: scale(15) }}

                    onPress={() => navigation.navigate('BottamTabNavigation')}

                />
                <View style={styles.LoginView}>
                    <View style={styles.WrapView}>
                        <Text style={styles.titleStyles}> Didnt recieve any code? </Text>
                        <TouchableOpacity>
                            <Text style={styles.BtnTitle}>Resend</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    );
};


//make this component available to the app
export default LinkSend;
