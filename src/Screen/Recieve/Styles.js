import {StyleSheet} from 'react-native';
// import style from '../../styles/styles';
import { moderateScale, moderateVerticalScale, scale, verticalScale, } from 'react-native-size-matters';



 export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#222126',
    
      },
      header: {
        height: moderateScale(80),
        width: '100%',
        backgroundColor: '#161415',
        justifyContent: 'center',
        paddingHorizontal: moderateScale(26)
      },
      headerTxt: {
        color: '#E7E0D8',
        fontWeight: '700',
        lineHeight: 18.29,
        fontSize: scale(15),
        letterSpacing: -0.3,
    
      },
      containerHero: {
        flex: 1,
        backgroundColor: '#222126',
        paddingHorizontal: moderateScale(26),
        paddingVertical: moderateScale(24)
      },
      Code_Model: {
        width: moderateScale(184),
        height: moderateScale(184)
      },
      ViewFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginBottom: moderateScale(10),
        // backgroundColor:'red',
      },
      titile:{
    color:'#1BBEE9',
    fontSize:scale(12),
    fontWeight:"400"
    
    
      },
      linkBox:{
        width:moderateScale(278),
        height:moderateScale(43),
        backgroundColor:'black',
        justifyContent:"center",
        alignItems:'center',
        marginBottom:moderateScale(10)
        
        
      },
      BtnBox: {
        flexDirection: 'row', justifyContent: 'space-between'
      },
      btnStyles: {
        borderWidth: 2,
        width: moderateScale(78),
        height: moderateScale(28),
        paddingHorizontal: moderateScale(5),
        borderRadius: moderateScale(5),
        borderColor: '#219653',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    
      },
      btnStyle: {
        width: moderateScale(98),
        height: moderateScale(36),
        backgroundColor: '#1BBEE9'
    
      },
      textStyle8: {
        fontSize: scale(12),
        color: "#FFFFFF"
      },
      btnStyles1: {
        borderWidth: 2,
        width: moderateScale(106),
        height: moderateScale(28),
        paddingHorizontal: moderateScale(5),
        borderRadius: moderateScale(5),
        borderColor: '#219653',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(4),
        marginBottom: moderateScale(40)
    
    
      },
      TexTStyles: {
        fontSize: scale(10),
        fontWeight: '400',
        color: '#919095',
        marginLeft:-1
    
      },
      BoxCode_Model: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: moderateVerticalScale  (20)
      },
      Send: {
        fontFamily: '600',
        fontSize: scale(20),
        lineHeight: 24.38,
        letterSpacing: 0.3,
        color: '#FFFFFF',
      },
      publicTxt: {
        fontSize: scale(10),
        fontFamily: '400',
        lineHeight: 12.19,
        letterSpacing: -0.3,
        color: '#1BBEE9',
        marginTop: moderateScale(6)
    
      },
      textInput: {
        width: moderateScale(276),
        height: moderateScale(33),
        borderRadius: 6,
        borderColor: '#BAB9BE',
        marginTop: 10,
        borderWidth: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
       
        color: '#D4D1D1',
      },

      textInput6: {
        width: moderateScale(276),
        height: moderateScale(33),
        borderRadius: 6,
        borderColor: '#BAB9BE',
         fontSize:10,
         paddingHorizontal:10,
         marginTop:10,
        borderWidth: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
       
        color: '#D4D1D1',
      },
      textInput5: {
        color: '#D4D1D1',
        fontSize:10,
        paddingHorizontal:10
      },
      addressSection: {
        marginTop: 39,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      labelTxt: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.63,
        letterSpacing: -0.3,
        color: '#D4D1D1',
        // marginRight: 20,
        marginTop:moderateScale(10)
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
        marginTop: 15,
        marginLeft: 18,
      },
      label: {
        width: 323,
        height: 35,
    
        paddingHorizontal: 10,
    
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 6,
        borderColor: '#BAB9BE',
        marginTop: 40,
        borderWidth: 1,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14.63,
        letterSpacing: -0.3,
        color: '#919095',
        marginLeft: 18,
      },
      btns: {
        marginTop: 44,
        flexDirection: 'row',
    
        alignItems: 'center',
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
        marginLeft: 18,
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
        marginLeft: 14,
      },
      btn3: {
        borderWidth: 1,
        borderColor: '#BAB9BE',
        borderRadius: 6,
        width: 78,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 86,
      },
      totalSend: {
        width: 223,
        height: 64,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#BAB9BE',
        justifyContent: 'center',
        marginLeft: 18,
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
        marginLeft: 12,
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 24.38,
        letterSpacing: -0.3,
        color: '#FFFFFF',
        
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
        width: 325,
        height: 269,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        alignSelf: 'center',
        bottom: 60,
        right: 12,
        backgroundColor: '#222126',
      },
      popUpHeading: {
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 21.94,
        letterSpacing: -0.3,
        color: '#FFFFFF',
      },
      paragraph: {
        width: 302,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      paragraphTxt: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.63,
        letterSpacing: -0.3,
        color: '#D4D1D1',
      },
      addressCode: {
        width: 276,
        height: 33,
        borderRadius: 6,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#1BBEE9',
        marginTop: 30,
        padding: 10
      },
      btnCancel: {
        width: 90,
        height: 36,
        borderRadius: 6,
        // backgroundColor: '#1BBEE9',
        marginTop: 40,
        marginLeft: 12,
        justifyContent: 'center',
        alignItems: 'center',
    
      },
      Cancel: {
        color: '#F44336'
      },
      urlContainer: {
        flex: 1,
        width: '100%',
        height: 800,
        backgroundColor: 'rgba(0,0,0,0.8)',
        paddingHorizontal: moderateScale(29),
        marginVertical: moderateScale(20),
    
        position: 'absolute',
        justifyContent: 'center',
        alignItems: "center"
    
      },
      Url: {
        width: '100%',
        height: moderateScale(388),
        paddingHorizontal: moderateScale(22),
        paddingVertical: moderateScale(18),
        backgroundColor: '#222126',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FFFFFF',
        alignItems:'center'
    
    
      },
      Modden: {
        width: 276,
        height: 33,
        borderWidth: 1,
        borderColor: '#1BBEE9',
        alignSelf: 'center',
        marginTop: 21,
        borderRadius: 6,
        color: '#919095'
      },
      payment: {
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: scale(18),
    
        letterSpacing: -0.3,
        alignSelf: 'center',
    
      },
      Text11: {
        color: '#D4D1D1',
        fontWeight: '400',
        fontSize: scale(11),
        textAlign: 'center',
        lineHeight: moderateScale(17.63),
        letterSpacing: moderateScale(-0.3),
      },
      btnInput:{
        // backgroundColor:'red'
      },
      Hi:{
       backgroundColor:'red',
    
      },
      ok: {
        width: 98,
        height: 31,
        borderRadius: 6,
        backgroundColor: '#1BBEE9',
        justifyContent: 'center',
        alignItems: 'center'
      }
  })