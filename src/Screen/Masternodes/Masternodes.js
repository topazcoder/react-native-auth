//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView ,Image,ScrollView} from 'react-native';
import ButtonCom from '../../components/ButtonCom';

import Styles from './Styles';
// create a component
const Masternodes = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#161415' }}>
            <View style={Styles.container}>
            <ScrollView>

                <View style={Styles.HeaderBox}>
                    <Text style={Styles.HeadText}>Masternodes</Text>
                </View>
                <View style={Styles.mainStyles}>
                    <Text style={Styles.TextStyles}>Masternodes</Text>
                    <Text style={Styles.subText}>Full nodes that incetivize node operator to perorm the core
                        consensus functions and vote on the treasury system receiving a
                        periodic award</Text>
                       <View style={Styles.ImageView}>
                 <Image style={Styles.ImageStyles} source={require('../../assets/ring.png')}/>
                 <Text style={Styles.TextSubStyles}>No active Masternode yet</Text>
                 </View> 
                 <View style={{alignItems:'center'}}>
                 <ButtonCom btnText='Create Masternode controller'
                    btnStyle={Styles.btnStyle}
                    textStyle={Styles.BtnTitle}
                    onPress={() =>navigation.navigate('SignifyScreen')}
                    // img={require('../../../assets/images/camera.png')}

                />
                 <ButtonCom btnText='Start Inactive/s'
                    btnStyle={Styles.btn2Style}
                    textStyle={Styles.BtnTitle}
                    // onPress={() =>navigation.navigate('Information')}
                    // img={require('../../../assets/images/camera.png')}

                />

                 </View>
      
                </View>
             </ScrollView>
            </View>
        </SafeAreaView>

    );
};


//make this component available to the app
export default Masternodes;