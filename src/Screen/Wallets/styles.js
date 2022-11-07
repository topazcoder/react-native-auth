import { StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale, } from 'react-native-size-matters';



export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#222126'
    },
    subContainer:
    {
        paddingHorizontal: scale(15),
    },
    TextContainer: {
        width: 374,
        height: 29,
        backgroundColor: "#1D1D1D",
        justifyContent: 'center',
        // marginVertical:scale(10)
    },
    inputText: {
        fontSize: 13,
        color: '#D4D1D1',
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 20,
        paddingLeft: 29
    },
    stylesText: {
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 18.29,
        fontFamily: 'almarai-bold',
        color:'white'
        //   color:style.ColorSecondary

    },
    stylesText1:
    {
        fontSize: scale(20),
        fontWeight: '400',
        lineHeight: 24.29,
        color:"white",
        
        // marginLeft: 85
    },
    stylesText2:
    {
        fontSize: 10.5,
        fontWeight: '400',
        lineHeight: 18.29,
        color: '#1BBEE9'
    },
    stylesText3:
    {
        fontSize: 10.5,
        fontWeight: '400',
        lineHeight: 24.29,
        color: '#FFFFFF',
    },
    stylesText4:
    {
        fontSize: 10.5,
        fontWeight: '400',
        lineHeight: 24.29,
        color: 'white',
        padding: 10
    },
    stylesText5:
    {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14.29,
        color: 'white',
        paddingHorizontal: scale(8)
    },
    mainwarp: {
        marginVertical: 30,
        flexDirection: 'row',
        width: "100%",
        justifyContent: "center"


    },
    headerStyle: {
        marginTop: 50,
        marginVertical: moderateVerticalScale(20),

        paddingHorizontal: scale(15),
    },
    headerStyle1: {
        marginVertical: moderateVerticalScale(50),
    },
    headerStyle2: {
        // marginVertical:10
    },
    Iconstyl: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 30,
        width: 55,
        //  backgroundColor:'red',
        marginHorizontal: 5
    },
    contactsIcon: {
        marginLeft: 10,
        paddingLeft: 20,


    },
    txt: {
        fontSize: 8,
        marginTop: 4,
        fontFamily: 'almarai',
    },
    mainbox: {
        width: scale(86),
        opacity: 0.93,
        justifyContent: "center",
        alignItems: 'center',
        //   marginVertical:10
        //   borderColor:"red",borderWidth:2

    },
    styleImage: {
        width: moderateScale(36),
        height: scale(36)
    },
    SearchIcon: {
        fontSize: 20,
        paddingLeft: 10,
        letterSpacing: 10,
        // paddingVertical: scale(10),
        paddingHorizontal: 10
    },
    // Iconstyl: {
    //     borderBottomLeftRadius: 5,
    //     borderTopLeftRadius: 5
    // },
    searchContainer: {
        flexDirection: 'row',

        // marginVertical: scale(10),
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor:'white',
        // backgroundColor: "white",
        borderRadius: 10,
    },
    messageContainer1: {
        width: 325,
        height: 127,
        marginVertical: scale(10),
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "white",
        borderRadius: 6,

    },
    signatureContainer: {
        height: 41,
        justifyContent: 'center',
        marginVertical: scale(10),
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "white",
        borderRadius: 6,
    },
    cartStyle: {
        width: "100%",
        marginVertical: scale(50)

    },
    btnContainer: {
        height: 90,
        width: 325,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 31
    },
    clearBtn: {
        height: 36,
        width: 122,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#1BBEE9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signBtn: {
        height: 36,
        width: 122,
        borderRadius: 6,
        backgroundColor: '#1BBEE9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    twobtn: {

    },
    textbtnContainer: {
        //  flexDirection:'row-reverse',
    },
    clearBtn1: {
        height: 24,
        width: 71,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#1BBEE9',
        alignItems: 'center',
    },
    signBtn1: {
        height: 24,
        width: 71,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#1BBEE9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearText: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 15,
        color: '#ffffff'
    },
    /////////////////////
    switchContainer: {
        marginVertical: 23,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    switchText: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 20,
        color: '#D4D1D1'
    },
    countContainer: {
        height: 31,
        width: 72,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row-reverse',
    },
    checkBox: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginVertical: 10
    },
    checkBox1: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // marginVertical:10
    },
    checkText: {
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 21.19,
        letterSpacing: -0.3,
        marginRight: 4

    },
    btnreset: {
        height: 36,
        width: 122,
        borderRadius: 6,
        backgroundColor: '#1BBEE9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearAll: {
        height: 36,
        width: 122,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#1BBEE9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ///////////////////////////
    countterContainer: {
        height: 31,
        width: 135,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row-reverse',
    },
    checkBox2: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginVertical: 10
    },
    textButton: {
        width: 92,
        height: 36,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    outerText: {
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    btntext: {
        fontSize: 12,
        lineHeight: 15,
        fontStyle: 'normal',
        color: '#FFFFFF'
    },
//////////////////////////////
downlist:{
    // height: 31,
    // width: 135,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row-reverse',
}
})  