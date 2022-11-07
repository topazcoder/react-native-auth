import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Switch, } from 'react-native'
import React, { useState, useEffect } from 'react'
// import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
// import CheckBox from 'expo-checkbox';
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters';

import imagePath from '../../components/imagePath';



export default function Main({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [isTure, setTure] = useState(false)

    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [counter, setCounter] = useState(1);
    const [counter1, setCounter1] = useState(1);

    const incrementCounter = () => setCounter(counter + 1);
    const decrementCounter = () => setCounter(counter - 1);
    if (counter <= 0) {
        decrementCounter = () => setCounter(1);
        // setCounter(1)
    }
    const incrementCounter1 = () => setCounter1(counter1 + 1);
    const decrementCounter1 = () => setCounter1(counter1 - 1);

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

                    <Text style={styles.inputText}>Main</Text>



                </View>
                <View style={styles.subContainer}>
                    <View style={styles.cartStyle}>
                        <View style={styles.textbtnContainer}>

                            <Text style={styles.stylesText1}>Main</Text>
                            <Text style={styles.stylesText2}>Customize the main application functions</Text>

                        </View>

                        <View style={styles.switchContainer}>

                            <Text style={styles.switchText}>Start MDDN on  system login</Text>
                            <View>
                                <Switch
                                    trackColor={{ false: "#736E6E", true: "#ffffff" }}
                                    thumbColor={isEnabled ? "#D9D9D9" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </View>
                        <View style={styles.switchContainer}>

                            <Text style={styles.switchText}>Sizes of Database niches</Text>
                            <View style={styles.countContainer}>
                                <Text style={{ paddingLeft: 5, color: '#919095' }}>{counter}</Text>
                                <View>
                                    <TouchableOpacity onPress={incrementCounter}>
                                        <Image source={require('../../assets/up.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={decrementCounter}>
                                        <Image source={require('../../assets/down2.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.switchContainer}>

                            <Text style={styles.switchText}>Number of script verification thread</Text>
                            <View style={styles.countContainer}>
                                <Text style={{ paddingLeft: 5, color: '#919095' }}>{counter1}</Text>
                                <View>

                                    <TouchableOpacity onPress={incrementCounter}>
                                        <Image source={require('../../assets/up.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={decrementCounter}>
                                        <Image source={require('../../assets/down2.png')} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>

                    </View>
                    <View style={styles.textbtnContainer}>

                        <Text style={styles.stylesText1}>Window</Text>
                        <Text style={styles.stylesText2}>Customize the application window options</Text>

                    </View>
                    {/* <View style={styles.checkBox}>

                        <Text style={styles.checkText}>Minimize to the tray instead of the taskbar</Text>
                      
                    </View> */}
                    <View style={{ justifyContent: "center",marginTop:moderateScale(10)}}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }}

                            onPress={() => setTure(!isTure)}
                            activeOpacity={0.2}

                        >
                            <Image source={isTure ? imagePath.checkbox : imagePath.checkbox}
                                style={{ marginRight: moderateScale(8), width: 13, height: 13 }}
                            />
                            <Text style={styles.checkText}>Minimize to the tray instead of the taskbar</Text>

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
                            <Text style={styles.checkText}>Minimize on close</Text>

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