import {StyleSheet} from 'react-native';

import { moderateScale, moderateVerticalScale, scale, verticalScale, } from 'react-native-size-matters';



 export const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:'#222126',
      paddingVertical:moderateVerticalScale(15),
      paddingHorizontal:moderateScale(20)
    },
    textInput: {
        width: moderateScale(310),
        height: moderateScale(41),
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
      Text:{
     fontSize:scale(12),
     color:'#FFFFFF',
     marginTop:moderateScale(19),
      },
    TextStyles:{
        fontSize:15,
        color:'#E7E0D8',
        lineHeight:20,
        fontWeight:'600',
        marginBottom:moderateScale(16)
       
    },
    Text1Styles:{
        fontSize:scale(15),
        color:'#E7E0D8',
        lineHeight:20,
        fontWeight:'400',
        marginBottom:moderateScale(10)
       
    },
    Text2Styles:{
        fontSize:scale(10),
        color:'#1BBEE9',
        lineHeight:20,
        fontWeight:'400',
   
       
    },
    Text3Styles:{
        fontSize:scale(10),
        color:'#1BBEE9',
        lineHeight:20,
        fontWeight:'400',
        letterSpacing :moderateScale(-0.3)
   
       
    },
    Text4Styles:{
        fontSize:scale(20),
        color :'#FFFFFF',
        lineHeight:moderateScale(24),
        fontWeight:'400',
        marginTop:moderateScale(20),
        letterSpacing :moderateScale(-0.3)
    
    },
    Text6Styles:{
        fontSize:scale(11),
        color :'#1BBEE9',
        lineHeight:moderateScale(24),
        fontWeight:'400',
        // marginTop:moderateScale(20),
        letterSpacing :moderateScale(-0.3)
    
    },
    FlexView:{
        backgroundColor:'#1D1D1D',
        height:moderateScale(28),
        justifyContent:'center',
        marginBottom:moderateScale(30)

    },
    TextStyles1:{
        fontSize:13,
        color:'#D4D1D1',
        fontWeight:'400',
        
    },
    ImageBox:{
      justifyContent:"center",
      alignItems:'center',
      paddingVertical:moderateScale(40)
    },
    imgStyles:{
        width:moderateScale(75),
        height:moderateScale(75)
    },
    line:{
        borderBottomColor:"#1BBEE9",
        borderBottomWidth:2,
        marginTop:moderateScale(20)
    }
  })