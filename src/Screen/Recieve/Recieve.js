
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
import ButtonCom from '../../components/ButtonCom';
import { styles } from './Styles';
import TextInputWithLable from '../../components/TextInputWithLable';
import imagePath from '../../components/imagePath';



export default function Recieve() {
  const [address, SetAddress] = useState(false);
  const [url, SetUrl] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>0.00 MDDN</Text>
        </View>
        <View style={styles.containerHero}>
          <Text style={styles.Send}>Receive</Text>
          <Text style={styles.publicTxt}>Scan the QR code or copy the address to recieve MDDN</Text>
          <View style={styles.BoxCode_Model}>

            <Image style={styles.Code_Model} source={require('../../assets/Code_Model.png')} />
            <View style={styles.ViewFlex}>
              <View>
              <Text style={styles.titile}>Default</Text>
              </View>
              <View style={{ marginRight: moderateScale(150) }}></View>
              <View>
              <Text style={styles.titile}>8/11/2022 7:05</Text>
              </View>
            </View>
            <View style={styles.linkBox}>
              <Text style={{color:'white'}}>M0xdGHJrtyhdmngot12rStKn4tuyEKR123</Text>
            </View>
            <View style={styles.BtnBox}>
              <TouchableOpacity
                style={styles.btnStyles}
              >
                <Text style={styles.TexTStyles}>Edit</Text>
                <Image source={require('../../assets/edit_file.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnStyles1}
              >
                <Text style={[styles.TexTStyles,{fontSize:10}]}>Generate Address</Text>
                <View style={{marginRight:1}}></View>
                <Image  style={{width:10,height:10}}source={require('../../assets/Group.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnStyles}
              >
                <Text style={styles.TexTStyles}>Copy</Text>
                <Image source={require('../../assets/edit_file.png')} />
              </TouchableOpacity>
            </View>
          </View>




          <View
            style={{


              borderBottomColor: '#1BBEE9',
              borderBottomWidth: 2

            }}
          />
          <View style={styles.options}>
            <Text style={styles.heading}>Coin Control</Text>
            <View style={{ flexDirection: 'row' ,justifyContent:'space-between'}}>
              <TouchableOpacity style={styles.btnfooter}>
                <Text style={styles.btnTxt3}>
                  Select the sources of the coins
                </Text>
              </TouchableOpacity>
              <View></View>
              <Image
                source={require('../../assets/arrowleft.png')}
                style={{width: 15, height: 15,  marginTop: 10}}
              />
            </View>
            <Text style={styles.heading}>Change Address</Text>
            <View style={{ flexDirection: 'row', justifyContent:'space-between'}}>
              <TouchableOpacity
                style={styles.btnfooter}
                onPress={() => SetAddress(!address)}>
                <Text style={styles.btnTxt3}>Customize the change address</Text>
              </TouchableOpacity>
              <View></View>
              <Image
                source={require('../../assets/arrowleft.png')}
               
                style={{width: 15, height: 15, marginTop: 10}}
              />
            </View>
            <Text style={styles.heading}>Open URI</Text>
            <View style={{ flexDirection: 'row',justifyContent:'space-between'}}>
              <TouchableOpacity style={styles.btnfooter} onPress={() => SetUrl(!url)}>
                <Text style={styles.btnTxt3}>Parse a payment request</Text>
              </TouchableOpacity>
              <View ></View>
              <Image
                source={require(('../../assets/arrowleft.png'))}
                style={{width: 15, height: 15, marginTop: 10}}
              />
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 20 }} />
        {url ? (
          <View style={styles.urlContainer}>
            <View style={styles.Url}>
              <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginBottom: moderateScale(16) }}>
                <View style={{ marginRight: moderateScale(7) }}></View>
                <Text style={styles.payment}>New Payment Request</Text>
                <View style={{marginLeft:30}}></View>
                <Image source={require('../../assets/multiply.png')} />

              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.Text11}>Instead of only sharing MDDN address , you can{'\n'}
                  create a payment request, bundling up{'\n'}
                  more information </Text>
              </View>
                <View> 
              <Text style={styles.labelTxt}>Amount</Text>

                <View style={styles.textInput}>
              <TextInput
                placeholder="0.00"
                placeholderTextColor="#D4D1D1"
                style={styles.textInput5}
              />
              <TouchableOpacity  style={{width:moderateScale(40), backgroundColor:'#1BBEE9',height:33,borderRadius:5,justifyContent:'center',alignItems:"center"}}>
                <Text style={{fontSize:10}}>MDDN</Text>
              </TouchableOpacity>
              </View>
              </View>
              <View>
              <Text style={styles.labelTxt}>Label</Text>

              <TextInput
                placeholder="Enter a label for the address"
                placeholderTextColor="#D4D1D1"
                style={styles.textInput6}
              />
              </View>
                <View>
              <Text style={styles.labelTxt}>Description(Optional)</Text>

              <TextInput
                placeholder="Description(Optional)"
                placeholderTextColor="#D4D1D1"
                style={styles.textInput6}
              />
              </View>
              
              
              <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 14, alignItems: "center" }}>
                <TouchableOpacity onPress={() => SetUrl(!url)}>
                  <Text style={{ color: 'red' }}>CANCEL</Text>
                </TouchableOpacity>
                <View style={{marginHorizontal:moderateScale(40)}}></View>
                <ButtonCom btnText="GENERATE"
                  btnStyle={styles.btnStyle}
                  textStyle={styles.textStyle8}
                  onPress={() => navigation.navigate('ContactsScreen')}


                />
              </View>
            </View>

          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}


