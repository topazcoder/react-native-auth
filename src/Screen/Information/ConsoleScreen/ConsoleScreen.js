//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image,TextInput ,TouchableOpacity} from 'react-native';
import Styles from './Styles';
import { moderateScale, scale } from 'react-native-size-matters';
import ButtonCom from '../../../components/ButtonCom';
// create a component
const ConsoleScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={Styles.container}>
                <View style={Styles.HeaderStyles}>
                    <Text style={Styles.HeaderTextStyle}>Console</Text>

                    <Text style={{ marginRight: moderateScale(39) }}></Text>
                    <ButtonCom btnText='Open debug file '
                        btnStyle={Styles.btnStyle}
                        textStyle={Styles.BtnTitle}
                        onPress={() => alert('abc')}
                    // img={require('../../../assets/images/camera.png')}

                    />
                    <Text style={{ marginRight: moderateScale(11) }}></Text>

                    <ButtonCom btnText='Backups'
                        btnStyle={Styles.btnStyle1}
                        textStyle={Styles.BtnTitle}
                        onPress={() => alert('abc')}
                    // img={require('../../../assets/images/camera.png')}

                    />




                </View>
                <View style={Styles.BoxStyles}>
                    <Text style={Styles.textStyle}>13:46:08</Text>
                    <Image style={Styles.ImageStyles} source={require('../../../assets/On-grid1.png')} />

                    <Text style={Styles.ParaStyles}>Welcome to the MDDN RPC console.{'\n'}
                        Use up and down arrows to navigate history, and Ctrl-L {'\n'}to clear screen.
                        Type help for an overview of available commands.


                    </Text>
                </View>
                <View style={Styles.BoxInputStyles}>
                <Image style={Styles.ImageStyles2} source={require('../../../assets/collapse_arrow.png')} />
                  <Text style={{marginRight:11}}></Text>
                  <TextInput
                  style={Styles.InputStyle}
                  placeholder='Console Input'
                  />
                  <TouchableOpacity style={Styles.BtnBox}>

                <Image style={Styles.ImageStyles3} source={require('../../../assets/subtract.png')} />

                  </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};



//make this component available to the app
export default ConsoleScreen;

//import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// create a component
// const ConsoleScreen = () => {
//     return (
//         <View style={styles.container}>
//             <Text>ConsoleScreen</Text>
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

//make this component available to the app
// export default ConsoleScreen;

