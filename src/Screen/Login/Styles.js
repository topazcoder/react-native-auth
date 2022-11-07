
import { moderateScale, moderateVerticalScale, verticalScale, scale } from 'react-native-size-matters';

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'black',
        paddingHorizontal: moderateScale(25),
        paddingVertical: moderateScale(18),




    },
    mainStyles: {
        marginTop: moderateScale(50),
       

    },
    TextStyles: {
        color: 'white',
        alignSelf: "flex-end",
        fontSize: scale(14),
        marginTop: moderateScale(6),
        marginBottom: moderateScale(40)
    }
    ,
    btn: {
        marginVertical: moderateVerticalScale(50),

        alignItems: 'center'



    },
    titleStyles: {
        fontSize: scale(14),
        color: "white"
    },
    BtnTitle: {
        fontSize: scale(14),
        color: '#1BBEE9',
        fontWeight:'400'
        
    },

    LoginView: {
    alignItems:'center'

    },

    WrapView:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    LgindBtn: {
        width: moderateVerticalScale(236),
        alignItems: 'center'
    }



});
export default styles