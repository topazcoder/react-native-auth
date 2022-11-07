//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image ,TextInput} from 'react-native';
import { styles } from './Styles';

import { moderateScale } from 'react-native-size-matters';
// create a component
const ContactsScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.TextStyles}>Settings</Text>
                    <View style={styles.FlexView}>
                        <Text style={styles.TextStyles1}>Wallet Repair</Text>

                    </View>
                    <Text style={styles.Text1Styles}>Contacts</Text>
                    <Text style={styles.Text2Styles}>You can add new in the option menu below</Text>
                    <View style={styles.ImageBox}>

                        <Image style={styles.imgStyles} source={require('../../assets/team.png')} />
                        <Text style={styles.Text3Styles}>No contacts yet</Text>

                    </View>
                    <Text style={styles.Text4Styles}>Add new contacts</Text>
                    <View>
                    <Text style={styles.Text6Styles}>Generate new address to generate tokens.</Text>

                    </View>
                    <Text style={styles.Text}>Contact Name</Text>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                    <TextInput
                placeholder="Enter addres"
                placeholderTextColor="#D4D1D1"
                style={styles.textInput}
              />
              </View>
                    <View style={styles.line}></View>
                    <Text style={styles.Text}>Contact Name</Text>
                    <TextInput
                placeholder="Enter addres"
                placeholderTextColor="#D4D1D1"
                style={styles.textInput}
              />


                </ScrollView>
            </View>
        </SafeAreaView>
    );
};


//make this component available to the app
export default ContactsScreen;
