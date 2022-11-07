//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,SafeAreaView} from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import Styles from './Styles';
import ButtonCom from '../../components/ButtonCom';

// create a component
const Information = () => {
    return (
          <SafeAreaView style={{flex:1}}>
        <View style={Styles.container}>
            <View style={Styles.HeaderStyles}>
                <Text style={Styles.HeaderTextStyle}>Information</Text>
                <ButtonCom btnText='Network Monitor'
                    btnStyle={Styles.btnStyle}
                    textStyle={Styles.BtnTitle}
                    onPress={() => alert('abc')}
                    // img={require('../../../assets/images/camera.png')}

                />
                <ButtonCom btnText='Backups'
                    btnStyle={Styles.btnStyle1}
                    textStyle={Styles.BtnTitle}
                    onPress={() => alert('abc')}
                    // img={require('../../../assets/images/camera.png')}

                />
                
                <ButtonCom btnText='Wallet Conf'
                    btnStyle={Styles.btnStyle2}
                    textStyle={Styles.BtnTitle}
                    onPress={() => alert('abc')}
                    // img={require('../../../assets/images/camera.png')}

                />


            </View>
            <View style={{marginBottom:moderateScale(30)}}>
                <Text style={Styles.HeaderText}>General</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{justifyContent:'space-around'}}>
                        <Text style={Styles.subText}>Client Version:</Text>
                        <Text style={Styles.subText}>User Agent:</Text>
                        <Text style={Styles.subText}>BerkeleyeDB version:</Text>
                        <Text style={Styles.subText}>Datadir:</Text>
                        <Text style={[Styles.subText,{marginTop:8}]}>Startup Time:</Text>

                    </View>
                    <View style={{ marginRight: moderateScale(14) }}></View>
                    <View style={{justifyContent:'space-between'}}>
                        <Text style={Styles.RightText}>v2.0.0.0-9a9af26-dirty</Text>
                        <Text style={Styles.RightText}>Modden</Text>
                        <Text style={Styles.RightText2}>Berkeley DB 4.8.30: (April  9, 2010)</Text>
                        <Text style={Styles.RightText2}>C:\Users\Blaze\AppData\Roaming\Modden {'\n'}
                            \wallet.dat</Text>
                        <Text style={Styles.RightText2}>Tue Aug 16 13:45:50 2022</Text>

                    </View>


                </View>
            </View>
            <View style={{marginBottom:moderateScale(30)}}>
                <Text style={Styles.HeaderText}>Network</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{justifyContent:'space-between'}}>
                        <Text style={Styles.subText}>Name:</Text>
                        <Text style={Styles.subText}>User Agent:</Text>
                        
                        <Text style={[Styles.subText,{fontSize:scale(11)}]}>No of Masternodes:</Text>

                    </View>
                    <View style={{ marginRight: moderateScale(14) }}></View>
                    <View style={{justifyContent:'space-between'}}>
                        <Text style={Styles.RightText}>main</Text>
                        <Text style={Styles.RightText}>0 (In: 0 / Out: 0)</Text>
                        <Text style={Styles.RightText2}>Total: 0 (IPv4: 0 / IPv6: 0 / Tor: 0 / Unknown: 0)</Text>
                      
                    

                    </View>


                </View>
            </View>
            <View style={{marginBottom:moderateScale(39)}}>
                <Text style={Styles.HeaderText}>Blockchain</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{justifyContent:'space-around'}}>
                        <Text style={Styles.subText}>Current no of blocks:</Text>
                        <Text style={Styles.subText}>Last block time:</Text>
                        <Text style={Styles.subText}>Last block lash:</Text>
                       

                    </View>
                    <View style={{ marginRight: moderateScale(14) }}></View>
                    <View style={{justifyContent:'space-between'}}>
                        <Text style={Styles.RightText}>0</Text>
                        <Text style={Styles.RightText}>Sun Jul 3 04:24:07 2022</Text>
                        <Text style={[Styles.RightText2,{fontSize:6}]}>00000ef20371800a04939c0eea309ba510c69c2114496de3796215ddf6d30a54</Text>
                    
                     

                    </View>


                </View>
            </View>
        </View>
        </SafeAreaView>
    );
};



//make this component available to the app
export default Information;
