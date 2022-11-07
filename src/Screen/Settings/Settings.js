//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,Image,ScrollView} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
// import imagePath from '../../components/imagePath';
import DropDown from '../../components/DropDown';

// create a component
const wallet = [
    {
        id: 1,
        name: 'Wallet',
    },
    {
        id: 2,
        name: 'Exporting Account',
    },
]
const tool = [
    {
        id: 1,
        name: 'Sign/Verify message',
    },
    {
        id: 2,
        name: 'BIP38 Tool',
    },
]
const option = [
    {
        id: 1,
        name: 'Main',
    },
    {
        id: 2,
        name: 'Wallet',
    },
    {
        id: 3,
        name: 'Display',
    },
]
const Debug = [
    {
        id: 1,
        name: 'Information',
    },
    {
        id: 2,
        name: 'Console',
    },
    {
        id: 3,
        name: 'Wallet Repair',
    },
]
const Help = [
    {
        id: 1,
        name: 'Faq',
    },
    {
        id: 2,
        name: 'About MDDN',
    },
]
const Contact = [
    {
        id: 1,
        name: 'Contacts',
    },
  
]
const Settings = ({navigation}) => {
    const [selectedItem, setSelectedItem]=useState(null)
    const onSelect=(item)=>{
      setSelectedItem()
    }
    return (
   
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.styleText}>Settings</Text>
           <DropDown 
           text={'Wallets Data'}
           value={selectedItem}
           navigation={navigation}
           data={wallet}
           onSelect={onSelect}
           />
           <View style={{marginBottom:moderateScale(20)}}></View>
             <DropDown 
           text={'Tools'}  
           value={selectedItem}
           navigation={navigation}
           tools={tool}
           onSelect={onSelect}
           />
           <View style={{marginBottom:moderateScale(20)}}></View>

              <DropDown 
           text={'Options'}  
           value={selectedItem}
           navigation={navigation}
           options={option}
           onSelect={onSelect}
           />
           <View style={{marginBottom:moderateScale(20)}}></View>

                <DropDown 
           text={'Debug'}  
           value={selectedItem}
           navigation={navigation}
           debug={Debug}
           onSelect={onSelect}
           />
           <View style={{marginBottom:moderateScale(20)}}></View>

                <DropDown 
           text={'Help'}  
           value={selectedItem}
           navigation={navigation}
           help={Help}
           onSelect={onSelect}
           />
           <View style={{marginBottom:moderateScale(20)}}></View>

            <DropDown 
           text={'Contacts'}  
           value={selectedItem}
           navigation={navigation}
           contacts={Contact}
           onSelect={onSelect}
           />
           </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:moderateScale(15),
        // marginVertical:20,
        paddingVertical:moderateScale(20),

        backgroundColor: '#222126',
        // justifyContent:'center',
        // alignItems:'center'
    },
    styleText:{
        fontSize:15,
        fontWeight:'600',
        color:'#E7E0D8',
        paddingBottom:63
    },
    dropDown:{
        height:30,
        width:"100%",
        backgroundColor:'white',
        borderRadius:4,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
});

//make this component available to the app
export default Settings
    ;
