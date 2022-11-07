
import { moderateScale, moderateVerticalScale, verticalScale, scale } from 'react-native-size-matters';

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'black',
        paddingHorizontal: moderateScale(26),
        paddingVertical: 15,




    },
    mainStyles: {
        marginTop: moderateScale(30),
        alignItems:'center'
    },
    TextStyles: {
        color: 'white',
        alignSelf: "flex-end",
        fontSize: scale(12),
        marginTop: moderateScale(6),
        marginBottom:moderateScale(20)
    },
    
  
    TextSub:{
        fontSize: scale(12),
        color:'#FFFFFF',
        lineHeight:15,
        fontWeight:"600",
        marginBottom:moderateScale(30)
        
        
    },

   
    
      
        LgindBtn: {
            width: moderateScale(236),
            alignItems: 'center'
        },
        TextPassword:{
            color:'white',
            fontSize:scale(26),
            fontWeight:"600",
            marginTop:moderateScale(50)
            
            
        }
    


});
export default styles