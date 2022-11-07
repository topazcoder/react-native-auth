//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,SafeAreaView } from 'react-native';
import styles from './Styles';

import Head from '../../components/Head';
import TextInputWithLable from '../../components/TextInputWithLable';
import imagePath from '../../components/imagePath';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import ButtonCom from '../../components/ButtonCom'


// create a component
const LoginScreen = ({ navigation }) => {
    const [isVisble, setVisbal] = useState(true)

    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>


            <Head txt={'Login'} onPress={() => navigation.goBack()} />
            <View style={styles.mainStyles}>
                <TextInputWithLable
                    label='Enter your Email'
                    inputStyle={{ marginBottom: moderateVerticalScale(35) }}
                    keyboardType="email-address"


                />

                <TextInputWithLable
                    label='password'
                    secureTextEntry={isVisble}
                    rightIcon={isVisble ? imagePath.hideEye : imagePath.ShowEye}
                    onPressRight={() => setVisbal(!isVisble)}

                />
            </View>
            <Text style={styles.TextStyles}>Forgot Password?</Text>
            <View style={styles.btn}>
                <ButtonCom btnText="Login"
                    btnStyle={styles.LgindBtn}
                    textStyle={{ color: 'white', fontSize: scale(15)}}

                    onPress={() => navigation.navigate('CreateAccount')}

                />
            </View>
            <View style={styles.LoginView}>
                <View style={styles.WrapView}>
                <Text style={styles.titleStyles}> Don’t Have an Account? </Text>
                 <TouchableOpacity onPress={()=> navigation.navigate('CreateAccount')}>
                     <Text style={styles.BtnTitle}>Register Now</Text>
                 </TouchableOpacity>
                 </View>
            </View>

        </View>
        </SafeAreaView>
    );
};



//make this component available to the app
export default LoginScreen;
