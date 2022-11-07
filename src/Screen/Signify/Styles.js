import {StyleSheet} from 'react-native';

import { moderateScale, moderateVerticalScale, scale, verticalScale, } from 'react-native-size-matters';



 export const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:'#222126',
      paddingVertical:moderateVerticalScale(15)
    },
    TextStyles:{
        fontSize:15,
        color:'#E7E0D8',
        lineHeight:20,
        fontWeight:'600',
        marginBottom:moderateScale(20),
        paddingHorizontal:moderateScale(16),
    },
    FlexView:{
        backgroundColor:'#1D1D1D',
        height:moderateScale(28),
        justifyContent:'center',
        marginBottom:moderateScale(20),

        

    },
    TextStyles1:{
        fontSize:13,
        color:'#D4D1D1',
        fontWeight:'400',
        
        paddingHorizontal:moderateScale(16),
    },
    textStyle2:{
        fontSize:11,
        color:'#FFFFFF',
        fontWeight:'400',
        
    },
    TextStyles2:{
        fontSize:20,
        color:'#FFFFFF',
        fontWeight:'400',
    },
    TextStyles3:{
        fontSize:11,
        color:'#1BBEE9',
        fontWeight:'400',
        marginTop:moderateScale(7),
        paddingBottom:moderateScale(40)
    },
    TextStyles4:{
        fontSize:scale(9),
        color:'#FFFFFF',
        fontWeight:'400',
        lineHeight:14
      
       
    },
    MainStyles:{
        paddingHorizontal:moderateScale(25),

    },
    BoxButton:{
     flexDirection:'row',
     alignItems:'center',
      marginVertical:moderateScale(2)
    },
    btnStyle:{
        width:moderateScale(155),
        backgroundColor:'#1BBEE9',
        alignItems:'center',
        justifyContent:'center'
        
    }
  })