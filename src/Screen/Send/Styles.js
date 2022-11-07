import {StyleSheet} from 'react-native';

import { moderateScale, moderateVerticalScale, scale, verticalScale, } from 'react-native-size-matters';



 export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222126',
        
      },
      header: {
        height: moderateScale(60),
        width: '100%',
        paddingHorizontal:moderateScale(20),
        backgroundColor: '#161415',
        
      },
      headerTxt: {
        color: '#E7E0D8',
        fontWeight: '700',
        lineHeight: 18.29,
        fontSize: 15,
        letterSpacing: -0.3,
        marginTop: 20,
        marginLeft: 18,
      },
      containerHero: {
        flex: 1,
        backgroundColor: '#222126',
        // backgroundColor:'red',
        paddingHorizontal:moderateScale(24),
        paddingVertical:moderateVerticalScale(20)
        
        
      },
      Send: {
        fontFamily: '600',
        fontSize: scale(20),
        lineHeight: 24.38,
        letterSpacing: 0.3,
        color: '#FFFFFF',
        marginBottom:moderateScale(4)
      },
      publicTxt: {
        fontSize: scale(10),
        fontFamily: '400',
        lineHeight: 12.19,
        letterSpacing: -0.3,
        color: '#1BBEE9',
       
      },
      textInput: {
        width: moderateScale(87),
        height: moderateScale(35),
        borderRadius: 6,
        borderColor: '#BAB9BE',
        marginTop: moderateScale(10),
        paddingHorizontal:moderateScale(6),
        borderWidth: 1,
        fontSize: scale(12),
        fontWeight: '400',
        lineHeight: 14.63,
        letterSpacing: -0.3,
        color: '#919095',
      },
      
      textInput1: {
       
        borderRadius: 6,
  
    
        fontSize: scale(12),
        fontWeight: '400',
        lineHeight: 14.63,
        letterSpacing: -0.3,
        color: '#919095',
      },
      textInput2: {
        width: moderateScale(200),
        height: moderateScale(35),
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius: 6,
        borderColor: '#BAB9BE',
        marginTop: moderateScale(10),
        paddingHorizontal:moderateScale(6),
        borderWidth: 1,
        fontSize: scale(12),
        fontWeight: '400',
        lineHeight: 14.63,
        letterSpacing: -0.3,
        color: '#919095',
        flexDirection:'row'
      },
      textInput4: {
        width: moderateScale(320),
        height: moderateScale(35),
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius: 6,
        borderColor: '#BAB9BE',
      
        paddingHorizontal:moderateScale(20),
        borderWidth: 1,
        fontSize: scale(12),
        fontWeight: '400',
        lineHeight: 14.63,
        letterSpacing: -0.3,
        color: '#919095',
        flexDirection:'row'
      },
      addressSection: {
        marginTop: moderateScale(29),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
      },
      labelTxt: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.63,
        letterSpacing: -0.3,
        color: '#D4D1D1',
        marginRight: 20,
      },
      InputDrop: {
        width: 200,
        height: 35,
        borderRadius: 6,
        borderColor: '#BAB9BE',
        marginTop: 40,
        borderWidth: 1,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14.63,
        letterSpacing: -0.3,
        color: '#919095',
      },
      address: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.63,
        letterSpacing: -0.3,
        color: '#D4D1D1',
        marginTop: moderateScale(20),
        marginBottom:moderateScale(10)
      
      },
      label: {
        width: moderateVerticalScale(323),
        height: moderateVerticalScale(35),
       
      
        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius: 6,
        borderColor: '#BAB9BE',
        borderWidth: 1,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14.63,
        letterSpacing: -0.3,
        color: '#919095',
     
      },
      btns: {
        marginTop: 44,
        flexDirection: 'row',
          justifyContent:'center',
        // alignItems: 'center',
        
      },
      add: {
        fontWeight: '400',
        fontSize: 9,
        lineHeight: 10.97,
        letterSpacing: -0.3,
        color: '#919095',
      },
      clear: {
        fontWeight: '400',
        fontSize: 9,
        lineHeight: 10.97,
        letterSpacing: -0.3,
        color: '#F44336',
      },
      customize: {
        fontWeight: '400',
        fontSize: 9,
        lineHeight: 10.97,
        letterSpacing: -0.3,
        color: '#1BBEE9',
      },
      btn1: {
        borderWidth: 1,
        borderColor: '#1BBEE9',
        borderRadius: 6,
        width: 78,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 18,
      },
      btn2: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#772F2D',
        borderRadius: 6,
        width: 78,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12,
      },
      btn3: {
        borderWidth: 1,
        borderColor: '#BAB9BE',
        borderRadius: 6,
        width: 78,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: moderateScale(68),
      },
      totalSend: {
        width: moderateScale(223),
        height: 64,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#BAB9BE',
        justifyContent: 'center',
        // alignItems:'center',
       
        marginTop: 12,
      },
      sendRemaining: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 15.85,
        letterSpacing: -0.3,
        marginTop: 6,
        color: '#FFFFFF',
        padding: 5,
      },
    
      Mdn: {
        fontWeight: '400',
        color: '#919095',
        lineHeight: 14.63,
        letterSpacing: -0.3,
        alignSelf: 'center',
        marginTop: 5,
      },
      SendBtn: {
        width: 90,
        height: 36,
        borderRadius: 6,
        backgroundColor: '#1BBEE9',
        marginTop: 40,
        // marginLeft: 12,
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 24.38,
        letterSpacing: -0.3,
        color: '#FFFFFF',
        // marginLeft: 18,
        marginTop: 28,
      },
      btnfooter: {
        borderBottomWidth: 1,
        width: 264,
        height: 20,
        borderBottomColor: '#FFFFFF',
     
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      btnTxt3: {
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 12.19,
        letterSpacing: -0.3,
        color: '#1BBEE9',
      },
      popUp: {
        width: "100%",
        height: moderateScale(269),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        backgroundColor: '#222126',
        marginTop:moderateScale(-10)
      },
      popUpHeading: {
        fontWeight: '400',
        fontSize: scale(18),
        lineHeight: 21.94,
        letterSpacing: -0.3,
        color: '#FFFFFF',
      },
      paragraph: {
       
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(10),
      },
      paragraphTxt: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.63,
        letterSpacing: -0.3,
        color: '#D4D1D1',
      },
      addressCode:{
        width:moderateScale(276),
        height:moderateScale(33),
        borderRadius:6,
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#1BBEE9',
        marginTop:30,
        padding:10
      },
      btnCancel:{
        width: moderateScale(90),
        height: moderateScale(36),
        borderRadius: 6,
        // backgroundColor: '#1BBEE9',
        marginTop: 40,
        marginLeft: 12,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      Cancel:{
        color:'#F44336'
      },
      urlContainer:{
          flex:1,
          width:'100%',
          height:800,
          backgroundColor:'rgba(0,0,0,0.8)',
          
          position:'absolute',
          justifyContent:'center'
      },
      Url:{
        width:325,
        height:143,
        backgroundColor:'#222126',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#FFFFFF',
        alignSelf:'center',
        
      },
      Modden:{
        width:276,
        height:33,
        borderWidth:1,
        borderColor:'#1BBEE9',
        alignSelf:'center',
        marginTop:21,
        borderRadius:6,
        color:'#919095'
      },
      payment:{
        color:'#FFFFFF',
        fontWeight:'400',
        fontSize:14,
        lineHeight:17,
        letterSpacing:-0.3,
        alignSelf:'center',
        marginTop:17
      },
      ok:{
        width:98,
        height:31,
        borderRadius:6,
        backgroundColor:'#1BBEE9',
        justifyContent:'center',
        alignItems:'center'
      }
 
      
  })