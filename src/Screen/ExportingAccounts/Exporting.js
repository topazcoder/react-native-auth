import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
// import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
import { moderateScale } from 'react-native-size-matters';



export default function Exporting({ navigation }) {
    return (

        <View style={styles.container}>
            <ScrollView bounces={false} style={styles.scrolldiv}
                showsVerticalScrollIndicator={false}
            >


                <View style={styles.headerStyle}>
                    <Text style={styles.stylesText}>Settings</Text>
                </View>

                <View style={styles.TextContainer}>

                    <Text style={styles.inputText}>Exporting Image</Text>



                </View>
                <View style={styles.subContainer}>
                    <View style={styles.cartStyle}>
                        <View style={styles.headerStyle1}>
                            <Text style={styles.stylesText1}>Export Account</Text>
                            <Text style={styles.stylesText2}>Export  your wallet’s accounting data to a csv file</Text>

                        </View>

                        <View style={styles.headerStyle2}>

                            <View>
                                <Text style={styles.stylesText3}>Where</Text>
                            </View>
                            <View></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={styles.stylesText3}>All</Text>
                                <View style={{ paddingHorizontal: moderateScale(7) }}></View>
                                <Image
                                    style={{ height: 10, width: 10 }}
                                    source={require('../../assets/arrowDown.png')} />
                                <Text style={[styles.stylesText3, { marginLeft: 15, color: '#A9A8A8' }]}>Data desc</Text>
                                <View style={{ paddingHorizontal: moderateScale(7) }}></View>
                                <Image
                                    style={{ height: 10, width: 10 }}
                                    source={require('../../assets/arrowDown.png')} />

                            </View>
                        </View>
                        <View style={styles.searchContainer}>


                            <TextInput
                                style={styles.stylesText4}
                                autoCorrect={false}
                                secureTextEntry
                                placeholderTextColor={"white"}
                                placeholder='Select Folder........'
                            />
                            <View style={styles.Iconstyl}>
                                <Image source={require('../../assets/folder.png')} />
                            </View>
                        </View>
                    </View>
                    <Text numberOfLines={1} style={{ color: '#1BBEE9' }}>
                        __________________________________________________
                    </Text>

                    <View style={styles.headerStyle2}>
                        <View>
                            <Text style={styles.stylesText3}>Export address book</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 120 }}>
                            <Text style={styles.stylesText3}>All</Text>
                            <Image
                                style={{ height: 10, width: 10 }}
                                source={require('../../assets/arrowDown.png')} />

                        </View>
                    </View>
                    <View style={styles.searchContainer}>

                        <TextInput
                            style={styles.stylesText4}
                            autoCorrect={false}
                            secureTextEntry
                            placeholderTextColor={"white"}
                            placeholder='Select Folder........'
                        />

                        <View style={styles.Iconstyl}>
                            <Image source={require('../../assets/folder.png')} />

                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>

    )
}
