//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Head from '../../components/Head';
import TextInputWithLable from '../../components/TextInputWithLable'
import imagePath from '../../components/imagePath';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonCom from '../../components/ButtonCom'
import ReduxWrapper from '../../utils/reduxWrapper';
import styles from './styles';

function CreateAccount ({ navigation,}) {

    return (
        <View style={styles.container}>
            <Head txt={'Create Account'} onPress={() => navigation.goBack()} />
            <TextInputWithLable
                label='Login in'

                labelText={{ color: '#686767' }}
                inputStyle={{ marginBottom: moderateVerticalScale(35) }}
                keyboardType="email-address"
                

            />
            <TextInputWithLable
                label='Email Address'

                labelText={{ color: '#686767' }}
                inputStyle={{ marginBottom: moderateVerticalScale(35) }}
                keyboardType="email-address"

            /><TextInputWithLable
                label='Phone number'

                labelText={{ color: '#686767' }}
                inputStyle={{ marginBottom: moderateVerticalScale(35) }}
                keyboardType="email-address"


            /><TextInputWithLable
                label='Password'

                labelText={{ color: '#686767' }}
                inputStyle={{ marginBottom: moderateVerticalScale(35) }}
                keyboardType="email-address"


            />


            <View style={styles.btn}>
                <ButtonCom btnText="Create Account"
                    btnStyle={styles.LgindBtn}
                    textStyle={{ color: 'white', fontSize: 15 }}

                    onPress={() => navigation.navigate('CreateAccountScreen')}

                />
            </View>
            <View style={styles.LoginView}>
                <View style={styles.WrapView}>
                    <Text style={styles.titleStyles}> Already have an account? </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('ConfirmOtp')}>
                        <Text style={styles.BtnTitle}>Login in</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = {
    
};
export default  ReduxWrapper(mapStateToProps, mapDispatchToProps, CreateAccount);

