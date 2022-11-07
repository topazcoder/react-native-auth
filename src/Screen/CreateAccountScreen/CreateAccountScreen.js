//import liraries
import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Head from '../../components/Head';
import TextInputWithLable from '../../components/TextInputWithLable';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import ButtonCom from '../../components/ButtonCom'
import imagePath from '../../components/imagePath';
// import PhoneInput from 'react-native-phone-number-input';


import styles from './Styles';

// create a component
const CreateAccountScreen = ({ navigation }) => {
    const [value, setValue] = useState("");
    const [isTure, setTure] = useState(false)

    const phoneInput = useRef(null);

    return (
        <View style={styles.container}>
            <Head txt={'Create Account'} onPress={() => navigation.goBack()} />
            <TextInputWithLable
                label='Fullname'

                labelText={{ color: '#686767' }}
                inputStyle={{ marginBottom: moderateVerticalScale(35) }}
                keyboardType="email-address"


            />
            <TextInputWithLable
                label='Email Address'

                labelText={{ color: '#686767' }}
                inputStyle={{ marginBottom: moderateVerticalScale(35) }}
                keyboardType="email-address"


            />
            {/* <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode={'NG'}
            containerStyle={{width:'100%',height:48,paddingLeft:10,  borderColor:'rgba(0,0,0,0.2)',borderRadius:5,marginVertical:verticalScale(30),
            borderWidth:1,}}
            textInputStyle={{position:'absolute',}}
            layout="second"
            flagButtonStyle={{backgroundColor: "#A0C9D4"}}
            
          
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            // withDarkTheme
            // withShadow
            // autoFocus
            

          />  */}
            <TextInputWithLable
                label='Password'

                labelText={{ color: '#686767' }}
                inputStyle={{ marginBottom: moderateVerticalScale(35) }}
                keyboardType="email-address"


            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }}

                    onPress={() => setTure(!isTure)}
                    activeOpacity={0.2}

                >
                    <Image source={isTure ? imagePath.checkTick : imagePath.checkTick1}
                        style={{ marginRight: moderateScale(8), width: 20, height: 20 }}
                    />
                    <Text style={{ color: 'white', fontSize: scale(12) }}>I have read and agree to Modden’s
                        <Text style={{ color: '#1BBEE9' }}>  Terms{'\n'} of Service and Privacy Poicy</Text> </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btn}>
                <ButtonCom btnText="Create Account"
                    btnStyle={styles.subBtn}
                    textStyle={{ color: 'white', fontSize: scale(15) }}

                    onPress={() => navigation.navigate('ConfirmOtp')}

                />
            </View>
            <View style={styles.LoginView}>
                <Text style={styles.titleStyles}> Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('VerifyAccount')}>
                    <Text style={styles.BtnTitle}>Login In</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};



//make this component available to the app
export default CreateAccountScreen;

