
import { moderateScale, moderateVerticalScale, verticalScale, scale } from 'react-native-size-matters';

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'black',
        paddingHorizontal: moderateScale(27),
        paddingVertical: 15,




    },
    mainStyles: {
        marginTop: moderateScale(40),
    },
    TextStyles: {
        color: 'white',
        alignSelf: "flex-end",
        fontSize: scale(14),
        marginTop: moderateScale(6),
        marginBottom:moderateScale(20)
    }
    ,
    btn:{
       
       
        justifyContent:'center',
        alignItems:'center',
        marginTop:moderateScale(40),
      
        
        
        
    },
    subBtn:{
    width:moderateScale(236)
    },
    titleStyles:{
        fontSize:scale(12),
        color:"white",
        fontWeight:'400'
        
    },
    BtnTitle:{
     fontSize:scale(14),
     color:'#1BBEE9'
    },

    LoginView:{
       
        paddingHorizontal:moderateScale(50),
        marginTop:moderateScale(13),
        justifyContent:'center',
        flexDirection:'row'

    }



});
export default styles