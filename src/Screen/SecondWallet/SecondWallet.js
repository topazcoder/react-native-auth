import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Switch, } from 'react-native'
import React, { useState, useEffect } from 'react'
// import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
// import CheckBox from 'expo-checkbox';
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters';


import imagePath from '../../components/imagePath';

export default function SecondWallet({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [isTure, setTure] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (

        <View style={styles.container}>
            <ScrollView bounces={false} style={styles.scrolldiv}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.headerStyle}>
                    <Text style={styles.stylesText}>Settings</Text>
                </View>

                <View style={styles.TextContainer}>

                    <Text style={styles.inputText}>Wallet</Text>



                </View>
                <View style={styles.subContainer}>
                    <View style={styles.cartStyle}>
                        <View style={styles.textbtnContainer}>

                            <Text style={styles.stylesText1}>Wallet</Text>
                            <Text style={styles.stylesText2}>Customize the internal wallet option</Text>

                        </View>
                        <View style={styles.switchContainer}>

                            <Text style={styles.switchText}>Stake split threshold</Text>
                            <View style={styles.countterContainer}>
                                <Text style={{ paddingLeft: 5, color: '#919095' }}>500.0000000000</Text>
                                <View>
                                    <TouchableOpacity>
                                       <Image source={require('../../assets/up.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                    <Image source={require('../../assets/down2.png')}/>
                                      
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                       
                        <View style={{ justifyContent: "center",marginTop:moderateScale(10)}}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }}

                            onPress={() => setTure(!isTure)}
                            activeOpacity={0.2}

                        >
                            <Image source={isTure ? imagePath.checkbox : imagePath.checkbox}
                                style={{ marginRight: moderateScale(8), width: 13, height: 13 }}
                            />
                            <Text style={styles.checkText}>Spend unconfirmed change</Text>

                        </TouchableOpacity>
                    </View>

                    </View>
                    <View style={styles.textbtnContainer}>

                        <Text style={styles.stylesText1}>Network</Text>
                        <Text style={styles.stylesText2}>Customize the mode network options</Text>

                    </View>
                    <View style={{ justifyContent: "center",marginTop:moderateScale(10)}}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }}

                            onPress={() => setTure(!isTure)}
                            activeOpacity={0.2}

                        >
                            <Image source={isTure ? imagePath.checkbox : imagePath.checkbox}
                                style={{ marginRight: moderateScale(8), width: 13, height: 13 }}
                            />
                            <Text style={styles.checkText}>Map Port using UPnP</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: "center",marginTop:moderateScale(10)}}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }}

                            onPress={() => setTure(!isTure)}
                            activeOpacity={0.2}

                        >
                            <Image source={isTure ? imagePath.checkbox : imagePath.checkbox}
                                style={{ marginRight: moderateScale(8), width: 13, height: 13 }}
                            />
                            <Text style={styles.checkText}>Allow incoming connection</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: "center",marginTop:moderateScale(10)}}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }}

                            onPress={() => setTure(!isTure)}
                            activeOpacity={0.2}

                        >
                            <Image source={isTure ? imagePath.checkbox : imagePath.checkbox}
                                style={{ marginRight: moderateScale(8), width: 13, height: 13 }}
                            />
                            <Text style={styles.checkText}>Connect through SOCKS5 proxy (Default Proxy)</Text>

                        </TouchableOpacity>
                    </View>
                   
                   
                  
                    <View style={styles.switchContainer}>

                    <View style={styles.outerText}>
                          <Text style={styles.btntext}>Proxy IP</Text>
                        <View style={styles.textButton}>

                            <Text style={{color: '#919095' }}>127.0.01</Text>

                        </View>
                        </View>

                        <View style={styles.outerText}>
                          <Text style={styles.btntext}>Port</Text>
                        <View style={styles.textButton}>

                            <Text style={{color: '#919095' }}>9050</Text>

                        </View>
                        </View>
                        </View>
                        <View style={styles.btnContainer}>
                        <View style={styles.twobtn}>
                                <View style={{ paddingBottom: 10 }}>
                                    <TouchableOpacity style={styles.clearAll}>
                                        <Text style={{ color: '#1BBEE9' }}>Reset to default</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.clearAll}>
                                    <Text style={{ color: '#1BBEE9' }}>Discard Changes</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.btnreset}>
                                    <Text style={{ color: '#ffffff' }}>Save</Text>
                                </TouchableOpacity>
                            </View>
                         
                        </View>
                    </View>
            </ScrollView>

        </View>

    )
}