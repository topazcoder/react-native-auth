//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image ,ScrollView} from 'react-native';
import { styles } from './Styles';
import ButtonCom from '../../components/ButtonCom';
// create a component
const OnboardingScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ScrollView 
                   showsVerticalScrollIndicator={false}
                >
                <View style={styles.ImageStyles}>
                    <Image style={styles.img} source={require('../../assets/bg.png')} />
                </View>
                <Text style={styles.paraStyles}>Modden version v2.0.0.0-9a9af26-dirty (64-bit)

                    Copyright (C) 2009-2022 The Bitcoin Core Developers

                    Copyright (C) 2014-2022 The Dash Core Developers

                    Copyright (C) 2015-2022 The PIVX Core Developers

                    Copyright (C) 2020-2022 The Decenomy Core Developers

                    This is experimental software.



                </Text>
                <Text style={styles.para1Styles}>
                    Distributed under the MIT software license, see the
                    accompanying file COPYING or {'\n'}
                    http://www.opensource.org/licenses/mit-license.php.

                </Text>
                <Text style={styles.para2Styles}>
                    This product includes software developed by the OpenSSL
                    Project for use in the OpenSSL{'\n'}
                    Toolkit https://www.openssl.org/ and cryptographic{'\n'}
                    software written by Eric Young and UPnP software{'\n'}
                    written by Thomas Bernard.

                </Text>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <ButtonCom btnText="ok"
                                btnStyle={styles.btnStyle}
                                textStyle={styles.textStyle8}
                                onPress={() => navigation.navigate('ContactsScreen')}


                            />
                            </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};



//make this component available to the app
export default OnboardingScreen;
