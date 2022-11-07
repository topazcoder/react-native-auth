
import { moderateScale, moderateVerticalScale, verticalScale, scale } from 'react-native-size-matters';

import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor:'#222126',
      paddingHorizontal: moderateScale(20),
      paddingVertical: moderateVerticalScale(20),
    
},
HeaderStyles:{
    paddingBottom:moderateScale(60),
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    
    
},
BtnTitle:{
    fontSize: scale(10),
    fontWeight:'400',
    color: "white",
    alignItems:'center',
    letterSpacing:-0.3,
    lineHeight:12.9,
    color:'#1BBEE9',

},
HeaderTextStyle:{
    fontSize: scale(15),
    fontWeight:'600',
    color: "#E7E0D8",
    alignItems:'center',
    letterSpacing:-0.3,
  
    
},
HeaderText:{
    fontSize: scale(10),
    fontWeight:'400',
    color: "white",
    alignItems:'center',
    letterSpacing:-0.3,
    lineHeight:12.8,
    color:'#919095',
    marginTop:moderateScale(8),
    marginBottom:moderateScale(8)
    
    
},
subText:{
    fontSize: scale(10),
    paddingTop:2,
    fontWeight:'400',
    color: "white",
    alignItems:'center',
    letterSpacing:-0.3,
    lineHeight:12,
    color:'#CACACA',
    marginBottom:moderateScale(8)
   

},
RightText:{
    fontSize: scale(12),
    paddingTop:1,
    fontWeight:'400',
    color: "white",
    alignItems:'center',
    letterSpacing:-0.3,
    lineHeight:12,
    color:'#FFFFFF',
    // marginVertical:moderateScale(4)
    marginBottom:8

 

},
RightText2:{
    fontSize: scale(10),
    fontWeight:'400',
    color: "white",
    alignItems:'center',
    letterSpacing:-0.3,
    lineHeight:12,
    color:'#FFFFFF',
    marginBottom:moderateScale(8)

  

},
btnStyle:{
width:moderateScale(89),
height:moderateScale(25),
backgroundColor:'#222126',
borderWidth:1,
borderColor:'#1BBEE9',
},
btnStyle1:{
    width:moderateScale(56),
    height:moderateScale(25),
    backgroundColor:'#222126',
    borderWidth:1,
    borderColor:'#1BBEE9',
    },
    btnStyle2:{
        width:moderateScale(65),
        height:moderateScale(25),
        backgroundColor:'#222126',
        borderWidth:1,
        borderColor:'#1BBEE9',
       
        },
});
export default Styles;