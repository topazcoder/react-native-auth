import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Touchable } from 'react-native'
import React, { useState, useEffect } from 'react'
// import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';



export default function VerifingMessage({ navigation }) {
    return (

        <View style={styles.container}>
            <ScrollView bounces={false} style={styles.scrolldiv}
                showsVerticalScrollIndicator={false}
            >


                <View style={styles.headerStyle}>
                    <Text style={styles.stylesText}>Settings</Text>
                </View>

                <View style={styles.TextContainer}>

                    <Text style={styles.inputText}>Sign/Verify message</Text>



                </View>
                <View style={styles.subContainer}>
                    <View style={styles.cartStyle}>
                        <View style={styles.headerStyle1}>
                            <Text style={styles.stylesText1}>Sign/Verify message</Text>
                            <Text style={styles.stylesText2}>You can sign messages with addresses to prove you own them</Text>
                            <Text style={styles.stylesText2}>Be careful not to sign anything vague as phishing attacks may try to </Text>
                            <Text style={styles.stylesText2}>trick you into signing your identity over them.</Text>
                            <Text style={styles.stylesText2}>Only sign fully statement you agree to</Text>


                        </View>

                        <View style={styles.headerStyle2}>
                            <View>
                                <Text style={styles.stylesText3}>MDDN address or contact label</Text>
                            </View>
                        </View>
                        <View style={styles.searchContainer}>


                            <TextInput
                                style={styles.stylesText4}
                                autoCorrect={false}
                                secureTextEntry
                                placeholderTextColor={"#919095"}
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


                    <View style={styles.headerStyle2}>
                        <View>
                            <Text style={styles.stylesText3}>Message</Text>
                        </View>

                    </View>
                    <View style={styles.messageContainer1}>

                        <TextInput
                            style={styles.stylesText5}
                            autoCorrect={false}
                            secureTextEntry
                            placeholderTextColor={'#919095'}
                            placeholder='Write message here.....'
                        />
                    </View>
                    <View style={{marginTop:25}}></View>
                    <View style={styles.headerStyle2}>
                        <View>
                            <Text style={styles.stylesText3}>Signature</Text>
                        </View>

                    </View>
                    <View style={styles.signatureContainer}>

                        <TextInput
                            style={styles.stylesText5}
                            autoCorrect={false}
                            secureTextEntry
                            placeholderTextColor={'#919095'}
                            placeholder='Signature'
                        />
                    </View>
                    <View style={styles.btnContainer}>

                        <TouchableOpacity style={styles.clearBtn}>
                            <Text style={{ color: '#1BBEE9' }}>CLEAR ALL</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.signBtn}>
                            <Text style={{ color: '#ffffff' }}>SIGN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </View>

    )
}