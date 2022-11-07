import { moderateScale, moderateVerticalScale, verticalScale, scale } from 'react-native-size-matters';

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
    backgroundColor:'black'
     




    },MainContainer:{
       
       
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    MenuIcon:{
        width:scale(21),
        height:scale(21),
        alignSelf:'flex-end'
        
    },
    TextStyles:{
        fontSize:11,
        fontWeight:'400',
        color:'#D4D1D1',
        lineHeight:13
        

    },
    SubText:{
        fontSize:15,
        fontWeight:'400',
        color:'rgba(231, 224, 216, 1)'

    },
    Text2Styles:{
        fontSize:11,
        fontWeight:'400',
        color:'#D4D1D1',
        alignSelf:'flex-start'
        

    },
    Text1Styles:{
        fontSize:scale(17),
        fontWeight:'600',
        color:'#E7E0D8',
        lineHeight:21
    
        

    },
    styleTex2:{
        fontSize:scale(13),
        fontWeight:'400',
        color:'#29EAB1',
        lineHeight:21
    },
    text:{
       color:"white",
       fontSize:scale(13),
       fontWeight:'400'
    },
    btn:{
   width:moderateScale(80),
   height:moderateScale(32),
   backgroundColor:'#1BBEE9',
   justifyContent:'center',
   alignItems:"center"
   
    },
    btn1:{
        width:moderateScale(110),
        height:moderateScale(32),
        backgroundColor:'#1BBEE9',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
        
        
         },
    FlexView:{
   flexDirection:'row',
   marginBottom:2
//    justifyContent:'space-between'
    },
    MainStyles:{
        backgroundColor:"#222126",
        flex:2,
        paddingHorizontal: 15,
        paddingVertical:5,
        marginBottom:moderateScale(10)
        
    },
    styleText:{
        fontSize:scale(15),
        fontWeight:'600',
        color:'#E7E0D8',
        lineHeight:21

    },
    styleText1:{
        fontSize:scale(10),
        fontWeight:'400',
        color:'#1BBEE9',
        lineHeight:21,
        marginBottom:moderateScale(23)
        

    },
    FlexText:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:moderateScale(20)
    }
   
  
  


});
export default styles