//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './Styles';
import ButtonCom from '../../components/ButtonCom';
import { moderateScale } from 'react-native-size-matters';
// create a component
const SignifyScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.TextStyles}>Settings</Text>
                    <View style={styles.FlexView}>
                        <Text style={styles.TextStyles1}>Wallet Repair</Text>

                    </View>
                    <View style={styles.MainStyles}>
                        <Text style={styles.TextStyles2}>Re Scan blockchain file</Text>
                        <Text style={styles.TextStyles3}>The buttons below would restart the command-line options to
                            to repair this wallet,fix issues with corrupt blockchain files or
                            missing/Obsolete transactions</Text>


                        <View style={styles.BoxButton}>

                            <ButtonCom btnText="Salvage Wallet"
                                btnStyle={styles.btnStyle}
                                textStyle={styles.textStyle2}
                                onPress={() => alert('abc')}


                            />
                            <View style={{ marginRight: moderateScale(17) }}></View>
                            <Text style={styles.TextStyles4}>Attempt to recover private key{'\n'}
                                from corrupt wallet.dat
                            </Text>


                        </View>
                        <View style={styles.BoxButton}>

                            <ButtonCom btnText="Salvage Wallet"
                                btnStyle={styles.btnStyle}
                                textStyle={styles.textStyle2}
                                onPress={() => alert('abc')}


                            />

                            <View style={{ marginRight: moderateScale(17) }}></View>


                            <Text style={styles.TextStyles4}>Re scan the blockchain for {'\n'}
                                missing wallet transaction</Text>


                        </View>
                        <View style={styles.BoxButton}>

                            <ButtonCom btnText="Recover transactions 1"
                                btnStyle={styles.btnStyle}
                                textStyle={styles.textStyle2}
                                onPress={() => alert('abc')}


                            />

                            <View style={{ marginRight: moderateScale(17) }}></View>


                            <Text style={styles.TextStyles4}>Recover transactions from block-{'\n'}
                                chain(keep meta data)</Text>


                        </View>
                        <View style={styles.BoxButton}>

                            <ButtonCom btnText="Recover transactions 2"
                                btnStyle={styles.btnStyle}
                                textStyle={styles.textStyle2}
                                onPress={() => alert('abc')}


                            />

                            <View style={{ marginRight: moderateScale(17) }}></View>


                            <Text style={styles.TextStyles4}>Recover transactions from block-{'\n'}
                                chain(drop meta data)</Text>


                        </View>
                        <View style={styles.BoxButton}>

                            <ButtonCom btnText="Upgrade Wallet format"
                                btnStyle={styles.btnStyle}
                                textStyle={styles.textStyle2}
                                onPress={() => alert('abc')}


                            />

                            <View style={{ marginRight: moderateScale(17) }}></View>


                            <Text style={styles.TextStyles4}>Upgrade wallet to latest format{'\n'}
                                onstartup(this is not an update of {'\n'}
                                wallet itself)</Text>


                        </View>
                        <View style={styles.BoxButton}>

                            <ButtonCom btnText="Rebuild index"
                                btnStyle={styles.btnStyle}
                                textStyle={styles.textStyle2}
                                onPress={() => alert('abc')}


                            />

                            <View style={{ marginRight: moderateScale(17) }}></View>


                            <Text style={styles.TextStyles4}>Rebuild blockchain index from{'\n'}
                                current blk000???.dat files</Text>


                        </View>
                        <View style={styles.BoxButton}>

                            <ButtonCom btnText="Delete local blockchain"
                                btnStyle={styles.btnStyle}
                                textStyle={styles.textStyle2}
                                onPress={() => alert('abc')}


                            />

                            <View style={{ marginRight: moderateScale(17) }}></View>


                            <Text style={styles.TextStyles4}>Delete local blockchain so  the{'\n'}
                                wallet synchronizes from start</Text>


                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};


//make this component available to the app
export default SignifyScreen;

