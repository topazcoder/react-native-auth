import {StyleSheet} from 'react-native';

import { moderateScale, moderateVerticalScale, scale, verticalScale, } from 'react-native-size-matters';



 export const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:'#F5F5F5',
      paddingVertical:moderateVerticalScale(15),
      paddingHorizontal:moderateScale(24)
      
    },
    ImageStyles:{
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:moderateScale(288),
        height:moderateScale(288)
    },
    paraStyles:{
        fontSize:scale(11),
        lineHeight:scale(28),
        fontWeight:'400',
        marginBottom:moderateScale(30)
        
        
    },
    para1Styles:{
        fontSize:scale(11),
        lineHeight:scale(16),
        fontWeight:'400',
        marginBottom:moderateScale(20)
    },
    para2Styles:{
        fontSize:scale(11),
        lineHeight:scale(16),
        fontWeight:'400',
   
    },
    btnStyle:{
        backgroundColor:'#1BBEE9',
        width:moderateScale(132),
        height:36,
        marginTop:moderateScale(19)
        
    },
    textStyle8:{
       fontSize:scale(12),
       fontWeight:'700'
    }
    

  })