
//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity ,ScrollView} from 'react-native';

import { moderateScale, moderateVerticalScale, scale, verticalScale} from 'react-native-size-matters';
import styles from './Styles';
import imagePath from '../../../components/imagePath';


// create a component
const Copy = () => {

    const [isTure, setTure] = useState(false)

    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.MainContainer}>
                <View>
                    <Image style={styles.MenuIcon} source={require('../../../assets/menu.png')} />
                </View>

                <View style={styles.FlexView}>
                    <View style={{ flex: 2.4 }}>
                        <Text style={styles.TextStyles}>Maternode syncingl</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.TextStyles}>Next Collateral</Text>
                    </View>


                </View>
                <View style={styles.FlexView}>
                    <View style={{ flex: 2.4 }}>

                        <Text style={styles.Text1Styles}>--/5</Text>
                    </View>
                    <View style={{ flex: 2 }}>

                        <Text style={styles.Text1Styles}>8,00000.00MDDN</Text>
                    </View>



                </View>
                <View style={styles.FlexView}>
                    <View style={{ flex: 2.4 }}>

                        <Text style={styles.TextStyles}>Collateral</Text>
                    </View>

                    <View style={{ flex: 2 }}>

                        <Text style={styles.Text2Styles}>In</Text>
                    </View>


                </View>
                <View style={styles.FlexView}>
                    <View style={{ flex: 2.4 }}>

                        <Text style={styles.Text1Styles}>5,000000MDDN</Text>
                    </View>
                    <View style={{ flex: 2 }}>

                        <Text style={styles.Text1Styles}>2500 Blocks</Text>
                    </View>



                </View>
            </View>
            <View style={styles.MainStyles}>
                <Text style={styles.styleText}>Reward Chart</Text>
                <Text style={styles.styleText1}>Ammount of MDDN earned via staking & Masternodes</Text>
                <View style={styles.FlexText}>
                    <Text style={styles.styleText}>1,062.00 MDDN</Text>
                    <Text style={styles.styleText1}>1,062.00 MDDN</Text>



                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: moderateScale(336), height: moderateScale(7) }} source={require('../../../assets/line.png')} />
                </View>
                <View>
                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: 'row', marginTop: moderateScale(21) }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }}

                            onPress={() => setTure(!isTure)}
                            activeOpacity={0.2}

                        >
                            <Image source={isTure ? imagePath.Rectangle2 : imagePath.Rectangle2}
                                style={{ marginRight: moderateScale(8), width: 20, height: 20 }}
                            />

                            <Text style={{ color: '#1BBEE9' }}> STAKING</Text>
                        </TouchableOpacity>
                        <View style={{ paddingHorizontal: moderateScale(35) }}></View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center" }}

                            onPress={() => setTure(!isTure)}
                            activeOpacity={0.2}

                        >
                            <Image source={isTure ? imagePath.Rectangle2 : imagePath.Rectangle2}
                                style={{ marginRight: moderateScale(8), width: 20, height: 20 }}
                            />

                            <Text style={{ color: '#1BBEE9' }}>MASTERNODE</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ height: moderateScale(300), justifyContent: 'center', alignItems: "center" }}>

                    <Image source={require('../../../assets/gg.png')} style={{ resizeMode: 'cover', width: moderateScale(330), height: moderateScale(240) }} />




                </View>
                <View style={{ flexDirection: 'row', alignContent: 'space-around', alignItems: "center" }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.styleTex2}>Ffjejhfrdm</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.styleTex2}>Ffjejhfrdm</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScale(10),marginBottom:moderateScale(50) }}>
                    <Text style={styles.text}>Dias</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.text}>Messes</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Anos</Text>
                    <TouchableOpacity style={styles.btn1}>
                        <Text style={styles.text}>2022</Text>
                        <Image style={{width:10,height:10}} source={require('../../../assets/arrowDown.png')} />
                    </TouchableOpacity>

                </View>

            </View>

            </ScrollView>
        </View>
    );
};



//make this component available to the app
export default Copy;
