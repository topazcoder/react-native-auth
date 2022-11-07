
import { moderateScale, moderateVerticalScale, verticalScale, scale } from 'react-native-size-matters';

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'black',
        paddingHorizontal: moderateScale(25),
        paddingVertical: 15,




    },
    mainStyles: {
        marginTop: moderateScale(40),
    },
    TextStyles: {
        color: 'white',
        alignSelf: "flex-end",
        fontSize: 12,
        marginTop: moderateScale(6),
        marginBottom:moderateScale(20)
    }
    ,
    btn:{
        // paddingHorizontal:moderateScale(55),
        justifyContent:'center',
        alignItems:'center'
        
    },
    titleStyles:{
        fontSize:12,
        color:"white"
    },
    BtnTitle:{
     fontSize:12,
     color:'#1BBEE9'
    },

    LoginView:{
       
        paddingHorizontal:moderateScale(50),
        marginTop:moderateScale(13),
        justifyContent:'center',
        flexDirection:'row'

    },
    LoginView: {
        alignItems:'center'
    
        },
    
        WrapView:{
            flexDirection: 'row',
            justifyContent: 'center'
        },
        LgindBtn: {
            width: 236,
            alignItems: 'center'
        }
    


});
export default styles