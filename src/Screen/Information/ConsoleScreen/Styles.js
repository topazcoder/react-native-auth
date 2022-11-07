
import { moderateScale, moderateVerticalScale, verticalScale, scale } from 'react-native-size-matters';

import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222126",
        paddingHorizontal: moderateScale(25),
        paddingVertical: moderateVerticalScale(15),

    },
    HeaderStyles: {
        paddingBottom: moderateScale(66),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    BtnTitle: {
        fontSize: scale(10),
        fontWeight: '400',
        color: "white",
        alignItems: 'center',
        letterSpacing: -0.3,
        color: '#1BBEE9',

    },
    HeaderText: {
        fontSize: scale(10),
        fontWeight: '400',
        color: "white",
        alignItems: 'center',
        letterSpacing: -0.3,
        lineHeight: 12.8,
        color: '#919095',
        marginTop: moderateScale(8),
        marginBottom: moderateScale(8)


    },


    HeaderTextStyle: {
        fontSize: scale(15),
        fontWeight: '600',
        color: "#E7E0D8",
        alignItems: 'center',
        letterSpacing: -0.3,


    },

    btnStyle: {
        width: moderateScale(89),
        height: moderateScale(25),
        backgroundColor: '#222126',
        borderWidth: 1,
        borderColor: '#1BBEE9',
    },
    btnStyle1: {
        width: moderateScale(65),
        height: moderateScale(25),
        backgroundColor: '#222126',
        borderWidth: 1,
        borderColor: '#1BBEE9',
    },
    btnStyle2: {
        width: moderateScale(65),
        height: moderateScale(25),
        backgroundColor: '#222126',
        borderWidth: 1,
        borderColor: '#1BBEE9',

    },

    BoxStyles: {
        width: "100%",
        height: moderateScale(238),
        borderColor: '#1BBEE9',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: moderateScale(7),
        paddingVertical: moderateScale(30),
        flexDirection: "row",



    },

    textStyle: {
        fontSize: scale(9),
        fontWeight: '400',
        color: "#919095",
        letterSpacing: -0.3,
        // marginRight:3
    },
    ImageStyles: {
        width: moderateScale(10),
        height: moderateScale(10),
        marginHorizontal:4

    },
    ParaStyles: {
        marginRight: 5,
        fontSize: scale(8),
        fontWeight: '400',
        color: "#919095",
        lineHeight: 10,
        letterSpacing: -0.3,


    },
    BoxInputStyles: {
        marginTop: moderateScale(200),
        flexDirection: 'row',
        alignItems: 'center'


    },
    ImageStyles2: {
        width: moderateScale(20),
        height: moderateScale(20)
    },
    ImageStyles3: {
        width: moderateScale(15),
        height: moderateScale(15)
    },
    InputStyle: {
        height: moderateScale(35),
        width: moderateScale(271),
        paddingHorizontal: 8,
        borderColor: '#1BBEE9',
        borderWidth: 1,
        borderRadius: 10

    },
    BtnBox: {
        height: moderateScale(35),
        width: moderateScale(25),
        paddingHorizontal:4,
        borderColor: '#1BBEE9',
        borderWidth: 1,
        borderRadius: 10,
        alignContent: "center",
        justifyContent: 'center'


    }
});
export default Styles;