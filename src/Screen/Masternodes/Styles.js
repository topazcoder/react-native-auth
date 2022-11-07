
import { moderateScale, moderateVerticalScale, verticalScale, scale } from 'react-native-size-matters';

import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'black',
   




},
HeaderBox:{
    paddingHorizontal: moderateScale(23),
    paddingVertical: moderateVerticalScale(38),
},


HeadText:{
    fontSize: scale(12),
    color: '#E7E0D8',
    fontWeight:'600'
    
},
mainStyles: {
    flex:1,
    
    backgroundColor:'#222126',
   
    paddingHorizontal: moderateScale(23),
    paddingTop: moderateScale(22),
    paddingBottom:moderateScale(40)
},
TextStyles: {
    color: 'white',
    fontSize: scale(20),
    fontWeight:'500',
  
},
subText:{
    fontSize: scale(11),
    fontWeight:'400',
    color: "white",
    alignItems:'center',
    letterSpacing:-0.3,
    lineHeight:12.8,
    color:'#1BBEE9',
    marginTop:moderateScale(5)
    
},
TextSubStyles:{
    fontSize: scale(14),
    fontWeight:'400',
    color: "white",
    alignItems:'center',
    letterSpacing:-0.3,
    lineHeight: 17.07,
    color:'#1BBEE9',
    marginTop:moderateScale(28)


},
ImageView:{
     alignItems:'center',
    marginTop:moderateScale(112),
    marginBottom:moderateScale(130)
    

},
ImageStyles:{
    width:moderateScale(40),
    height:moderateScale(40),
},

btnStyle:{
   backgroundColor:'#1BBEE9',
   height:moderateScale(45),
   width:moderateScale(289),
   alignItems:'center',
   justifyContent:'center',
   marginBottom:moderateScale(25)
   
   
},
btn2Style:{
    backgroundColor:'#1BBEE9',
    height:moderateScale(45),
    width:moderateScale(195),
    alignItems:'center',
    justifyContent:'center'
    
    
 },
  BtnTitle: {
    fontSize: scale( 13.5),
    fontWeight:'400',
    color: "white",
    alignItems:'center',
    letterSpacing:-0.3,
    lineHeight: 16,
    color:'#FFFFFF',
  },





LoginView: {


marginTop: moderateScale(13),
justifyContent: 'center',
flexDirection: 'row'

},
LoginView: {
alignItems: 'center'

},

WrapView: {
flexDirection: 'row',
justifyContent: 'center'
},
LgindBtn: {
width: 236,
alignItems: 'center'
},



  
    LgindBtn: {
        width: 236,
        alignItems: 'center'
    },
    TextPassword:{
        color:'white',
        fontSize:25,
        fontWeight:"600",
        marginTop:moderateScale(50)
        
        
    }
});
export default Styles;