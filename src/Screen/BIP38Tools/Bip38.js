import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Touchable } from 'react-native'
import React, { useState, useEffect } from 'react'
// import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
import { moderateVerticalScale } from 'react-native-size-matters';



export default function Bip38({ navigation }) {
    return (

        <View style={styles.container}>
            <ScrollView bounces={false} style={styles.scrolldiv}
                showsVerticalScrollIndicator={false}
            >


                <View style={styles.headerStyle}>
                    <Text style={styles.stylesText}>Settings</Text>
                </View>

                <View style={styles.TextContainer}>

                    <Text style={styles.inputText}>BIP38 Tool</Text>



                </View>
                <View style={styles.subContainer}>
                    <View style={styles.cartStyle}>
                        <View style={styles.textbtnContainer}>

                            <Text style={styles.stylesText1}>BIP38 Tool</Text>
                              <View style={{flexDirection:"row"}}> 
                            <TouchableOpacity style={styles.clearBtn1}>
                                <Text style={styles.clearText}>Encrypt</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.signBtn1}>
                                <Text style={styles.clearText}>Decrypt</Text>
                            </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{marginBottom:moderateVerticalScale(37)}}>
                             <Text style={styles.stylesText2}>Encrypt your MDDN address(Key pair actually) using BIP38</Text>
                             <Text style={styles.stylesText2}>encryption.Using this mechanism,yoou can share your keys</Text>
                             <Text style={styles.stylesText2}>without middle-man risk, only need to store your passphrase </Text>
                             <Text style={styles.stylesText2}>safely</Text>

                        </View>

                        <View style={styles.headerStyle2}>
                            <View>
                                <Text style={styles.stylesText3}>MDDN address </Text>
                            </View>
                        </View>
                        <View style={styles.searchContainer}>

                           
                            <TextInput
                                style={styles.stylesText4}
                                autoCorrect={false}
                                placeholderTextColor={"#919095"}
                                secureTextEntry
                                placeholder='Enter address'
                            />
                             <View style={styles.Iconstyl}>
                                <TouchableOpacity>
                                <Image source={require('../../assets/contact1.png')} />
                                
                                </TouchableOpacity>
                                <TouchableOpacity>
                                <Image
                                        style={{ height: 10, width: 10 }}
                                        source={require('../../assets/arrowDown.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View>
                    <View style={styles.headerStyle2}>
                        <View>
                            <Text style={styles.stylesText3}>Passphrase</Text>
                        </View>

                    </View>
                    <View style={styles.signatureContainer}>

                        <TextInput
                            style={styles.stylesText5}
                            autoCorrect={false}
                            secureTextEntry
                            placeholderTextColor={"#919095"}
                            placeholder='Enter Passphrase'
                        />
                    </View>
                    </View>
                    <View>
                 <View style={styles.headerStyle2}>
                        <View>
                            <Text style={styles.stylesText3}>Encrypted Key</Text>
                        </View>

                    </View>
                    <View style={styles.signatureContainer}>

                        <TextInput
                            style={styles.stylesText5}
                            autoCorrect={false}
                            secureTextEntry
                            placeholderTextColor={"#919095"}
                            placeholder='Encrypted Key'
                        />
                    </View>
                    </View>
                    <View style={styles.btnContainer}>

                        <TouchableOpacity style={styles.clearBtn}>
                            <Text style={{ color: '#1BBEE9' }}>CLEAR ALL</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.signBtn}>
                            <Text style={{ color: '#ffffff' }}>ENCRYPT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </View>

    )
}
