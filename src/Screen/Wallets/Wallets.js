import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
// import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';



export default function Wallets({ navigation }) {
    return (

        <View style={styles.container}>
            <ScrollView bounces={false} style={styles.scrolldiv}
                showsVerticalScrollIndicator={false}
            >


                <View style={styles.headerStyle}>
                    <Text style={styles.stylesText}>Settings</Text>
                </View>

                <View style={styles.TextContainer}>

                    <Text style={styles.inputText}>Wallets</Text>



                </View>
                <View style={styles.subContainer}>
                    <View style={styles.cartStyle}>
                        <View style={styles.headerStyle1}>
                            <Text style={styles.stylesText1}>Backup Wallet</Text>
                            <Text style={styles.stylesText2}>Keep your wallet safe by doing regular backups and storing your</Text>
                            <Text style={styles.stylesText2}> backup file externall</Text>
                            <Text style={styles.stylesText2}>This options create a wallet.dat that can be used to recover your</Text>
                            <Text style={styles.stylesText2}>whole balance transaction and addresses on other device</Text>

                        </View>

                        <View style={styles.headerStyle2}>
                            <Text style={styles.stylesText3}>Where</Text>

                        </View>
                        <View style={styles.searchContainer}>
                        <TextInput
                                style={styles.stylesText4}
                                placeholderTextColor={'white'}
                                autoCorrect={false}
                                secureTextEntry
                                placeholder='Select Folder'
                            />
                            <View style={styles.Iconstyl}>
                                {/* <Icon
                                    name='folder1'
                                    // color='#ffffff'
                                    size={14}
                                    style={styles.SearchIcon}
                                /> */}
                                <Image source={require('../../assets/folder.png')}/>
                            </View>
                         


                        </View>
                        <Text numberOfLines={1} style={{ marginVertical: 40 ,color:'#1BBEE9'}}>
                            __________________________________________________
                        </Text>
                        <View style={styles.headerStyle4}>
                            <Text style={styles.stylesText1}>Change Wallet Passphrase</Text>
                            <Text style={styles.stylesText2}>'This will decrypt the whole wallet data and encrypt it back with</Text>
                            <Text style={styles.stylesText2}>the new passsphrase</Text>
                            <Text style={styles.stylesText2}>Remember to write it down and store safely, otherwise you migh</Text>
                            <Text style={styles.stylesText2}> lose access to your fund</Text>

                        </View>
                        <TouchableOpacity style={{ height: 36, width: 142, backgroundColor: '#1BBEE9', borderRadius: 6, justifyContent: 'center', alignItems: 'center', marginVertical: 10 ,alignSelf:'flex-end',marginTop:20}}>
                            <Text style={{ fontSize: 12 }}>Change Passphrase</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>

        </View>

    )
}