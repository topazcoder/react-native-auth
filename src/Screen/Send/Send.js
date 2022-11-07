
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView
} from 'react-native';
import React, { useState } from 'react';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { styles } from './Styles';

export default function Send() {
  const [address, SetAddress] = useState(false);
  const [url, SetUrl] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>0.00 MDDN</Text>
        </View>
        <View style={styles.containerHero}>
          <Text style={styles.Send}>Send</Text>
          <Text style={styles.publicTxt}>Send public coins (MDDN)</Text>
          <View style={styles.addressSection}>
            <View>
              <Text style={styles.labelTxt}>MDDN address or contact label</Text>
              <View style={styles.textInput2}>
                <TextInput
                  placeholder="Enter addres"
                  placeholderTextColor="#D4D1D1"
                  style={styles.textInput1}
                />
                <Image source={require('../../assets/contact.png')} />
              </View>
            </View>
            <View>
              <Text style={styles.labelTxt}>Amount</Text>
              <TextInput
                placeholder="0.00 MDDN"
                placeholderTextColor="#D4D1D1"
                style={styles.textInput}
              />
            </View>
          </View>

          <View>
            <Text style={styles.address}>Address label (Optional)</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TextInput
                placeholder="Enter label"
                placeholderTextColor="#D4D1D1"
                style={styles.textInput4}
              />
            </View>
          </View>

          {address ? (
            <View style={styles.popUp}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: 'space-between',

                  alignItems: 'center',
                  paddingHorizontal: moderateScale(25),
                  paddingVertical: moderateScale(15)

                }}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-around' }}>
                  <View style={{ marginRight: 20 }}></View>

                  <View>
                    <Text style={styles.popUpHeading}>Custom Change Address</Text>
                  </View>
                  <View style={{ marginRight: 20 }}></View>
                  <View>
                    <TouchableOpacity onPress={() => SetAddress(!address)}>
                      <Image style={{ width: moderateScale(32), height: moderateScale(32) }} source={require('../../assets/multiply1.png')} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.paragraph}>
                <Text style={styles.paragraphTxt}>
                  The remainder of the value resultant from the inputs
                </Text>
                <Text style={styles.paragraphTxt}>
                  minus the outputs value goes to the “change”
                </Text>
                <Text style={styles.paragraphTxt}> MDDN aaddress</Text>
              </View>
              <TextInput placeholder='eg dsdjsdhsdsjdshdjsdhdg' placeholderTextColor='#919095' style={styles.addressCode} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity style={styles.btnCancel} onPress={() => SetAddress(!address)} >
                  <Text style={styles.Cancel}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SendBtn} onPress={() => SetAddress(!address)}>
                  <Text style={styles.sendRemaining}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
          <View style={styles.btns}>
            <TouchableOpacity style={styles.btn1}>
              <Text style={styles.customize}>Customize Fee</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
              <Text style={styles.clear}>Clear All</Text>
              <Image
                source={require('../../assets/delete.png')}
                style={{ width: 9, height: 9, marginLeft: 8 }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn3}>
              <Text style={styles.add}>Add Reciepient +</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', alignContent: "center", alignItems: 'center' }}>
            <View style={styles.totalSend}>
              <View>
                <Text style={styles.sendRemaining}>Total to send</Text>
                <Text style={styles.Mdn}>0.00 MDDN</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#1BBEE9',
                  width: 1,
                  height: 50,
                  marginTop: 5,
                }}
              />
              <View>
                <Text style={styles.sendRemaining}>Unlocked remaining</Text>
                <Text style={styles.Mdn}>0.00 MDDN</Text>
              </View>
            </View>
            <View style={{ marginRight: moderateScale(4) }}></View>
            <TouchableOpacity style={styles.SendBtn}>
              <Text style={styles.sendRemaining}>Send</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1,
              width: 322,
              backgroundColor: '#1BBEE9',
              marginTop: 27,
              // marginLeft: 18,
            }}
          />
          <View style={styles.options}>
            <Text style={styles.heading}>Coin Control</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity style={styles.btnfooter}>
                <Text style={styles.btnTxt3}>
                  Select the sources of the coins
                </Text>
              </TouchableOpacity>
              <View></View>
              <Image
                source={require('../../assets/arrowleft.png')}
                style={{ width: 15, height: 15, marginTop: 10 }}
              />
            </View>
            <Text style={styles.heading}>Change Address</Text>
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
              <TouchableOpacity
                style={styles.btnfooter}
                onPress={() => SetAddress(!address)}>
                <Text style={styles.btnTxt3}>Customize the change address</Text>
              </TouchableOpacity>
              <View></View>
              <Image
                source={require(('../../assets/arrowleft.png'))}
                style={{ width: 15, height: 15, marginTop: 10 }}
              />
            </View>
            <Text style={styles.heading}>Open URI</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity style={styles.btnfooter} onPress={() => SetUrl(!url)}>
                <Text style={styles.btnTxt3}>Parse a payment request</Text>
              </TouchableOpacity>
              <View></View>
              <Image
                source={require(('../../assets/arrowleft.png'))}
                style={{ width: 15, height: 15, marginTop: 10 }}
              />
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 20 }} />
        {url ? (
          <View style={styles.urlContainer}>
            <View style={styles.Url}>
              <Text style={styles.payment}>Open payment request from URL or File</Text>
              <TextInput placeholder='Modden:' style={styles.Modden} placeholderTextColor='#919095' />
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 14 }}>
                <TouchableOpacity onPress={() => SetUrl(!url)}>
                  <Text style={{ color: 'red' }}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ok} onPress={() => SetUrl(!url)} >
                  <Text style={styles.sendRemaining}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

