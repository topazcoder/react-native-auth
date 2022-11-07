//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,SafeAreaView } from 'react-native';
import styles from './styles';
import ButtonCom from '../../components/ButtonCom';
import { scale } from 'react-native-size-matters';

// create a component
const SignScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <View style={styles.mainStyles}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/logoo.png')} style={styles.StyleImage} />
                </View>
                <View style={styles.btn}>
                    <ButtonCom btnText="Login"
                        btnStyle={styles.BtnStyles}
                        textStyle={{ color: '#1BBEE9', fontSize: scale(15) }}

                        onPress={() => navigation.navigate('LoginScreen')}

                    />
                </View>
                <View style={styles.btn}>
                    <ButtonCom btnText="Register"
                        btnStyle={styles.subBtn}
                        textStyle={{ color: 'white', fontSize: scale(15) }}

                        onPress={() => navigation.navigate('CreateAccount')}

                    />
                </View>
            </View>
        </View>
        </SafeAreaView>
    );
};



//make this component available to the app
export default SignScreen;
