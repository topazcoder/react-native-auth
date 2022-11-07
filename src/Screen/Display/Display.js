import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Switch, } from 'react-native'
import React, { useState, useEffect } from 'react'
// import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
// import CheckBox from 'expo-checkbox';

import imagePath from '../../components/imagePath';
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters';

export default function Display({ navigation }) {
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

                    <Text style={styles.inputText}>Display</Text>



                </View>
                <View style={styles.subContainer}>
                    <View style={styles.cartStyle}>
                        <View style={styles.textbtnContainer}>

                            <Text style={styles.stylesText1}>Display</Text>
                            <Text style={styles.stylesText2}>Customize the display  view options</Text>

                        </View>
                        <View style={styles.switchContainer}>

                            <Text style={styles.switchText}>Language</Text>
                            <View style={styles.downlist}>
                                <View>

                                    <TouchableOpacity>
                                        <Image
                                            style={{ height: 13, width: 13 }}
                                            source={require('../../assets/arrowDown.png')} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ paddingHorizontal: 5, color: '#919095' }}>(Default)</Text>

                            </View>
                        </View>
                        <View style={styles.switchContainer}>

                            <Text style={styles.switchText}>Unit to show ammounts</Text>
                            <View style={styles.downlist}>
                                <View>

                                    <TouchableOpacity>
                                        <Image
                                            style={{ height: 13, width: 13 }}
                                            source={require('../../assets/arrowDown.png')} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ paddingHorizontal: 5, color: '#919095' }}>MDDN</Text>

                            </View>
                        </View>
                        <View style={styles.switchContainer}>

                            <Text style={styles.switchText}>Unit to show ammounts</Text>
                            <View style={styles.downlist}>
                                <View>

                                    <TouchableOpacity>
                                        <Image
                                            style={{ height: 13, width: 13 }}
                                            source={require('../../assets/arrowDown.png')} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ paddingHorizontal: 5, color: '#919095' }}>2</Text>

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
                            <Text style={styles.checkText}>Hide stake chart in the dashboard</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnContainer}>
                        <View>
                            <TouchableOpacity style={styles.btnreset}>
                                <Text style={{ color: '#ffffff' }}>CLEAR ALL</Text>
                            </TouchableOpacity>
                        </View>
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
                    </View>
                </View>
            </ScrollView>

        </View>

    )
}