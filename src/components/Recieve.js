import { Image, ScrollView, StyleSheet, Text, View,Button,TextInput } from 'react-native';
import React,{useState} from 'react';
import { scale, verticalScale } from 'react-native-size-matters';



export const Recieve=()=>{
    const [walletAddress, setWalletAddress] = useState(
        '0xf4b3d2Ed5751148c52....29F2c0'
      );
    return(
        
        <View style={styles.phoneContainer}>
        <Text
          style={styles.iwantTo}
          fontWeight={'regular'}
        >Wallet Address </Text>
        <View style={[
          styles.inputStyle,
          styles.inputs,
          styles.containerStyle,
          { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }
        ]}>
          <TextInput style={{paddingLeft:15}}
            placeholder={walletAddress}

          // rightIcon={<Contacts />}
          />
          <Image
            style={{ marginRight: 10 }}
            source={require('../assets/contact.png')} />
        </View>
        <Text
          style={styles.iwantTo2}
          fontWeight={'medium'}
        >Copy your wallet address and send to the sender </Text>
      </View>
      
    )
}

const styles=StyleSheet.create({
    phoneContainer:{
        
    paddingHorizontal: scale(18),
    marginTop: verticalScale(17),
    paddingVertical:10,
    
    },
    inputs: {
        width: '95%',
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'black',
        borderColor: 'black',
        height: 48,
        borderRadius: 5,
        
      },
      containerStyle: {
        paddingHorizontal: 0,
      },
      inputStyle: {
        paddingLeft: 9,
    
      },
      iwantTo: {
        fontSize: verticalScale(11),
        lineHeight: verticalScale(13),
        marginTop: verticalScale(40),
        marginBottom: verticalScale(13),
        // paddingHorizontal:25
        
      },
      iwantTo2:{
        fontSize: verticalScale(11),
        lineHeight: verticalScale(13),
        marginTop: verticalScale(40),
        marginBottom: verticalScale(13),
        paddingHorizontal:30
      }
})