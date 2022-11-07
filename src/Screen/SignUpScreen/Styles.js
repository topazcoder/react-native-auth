
import { moderateScale, moderateVerticalScale ,verticalScale,scale} from 'react-native-size-matters';

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:moderateVerticalScale(100),
        paddingHorizontal:moderateScale(49),
        backgroundColor:"black"
        
      },
      StyleImage:{
        width:moderateScale(288),
        height:scale(288),
      },
      FlexView:{
        justifyContent: 'center',
         alignItems: 'center',
         marginTop:moderateScale(15)
      },
      ViewImage:{
      justifyContent:"center",
      alignItems:"center"
      },
      TextStyles:{
        fontSize:scale(17),
        color:'white',
       textAlign:'center',
        fontWeight:'400',
        letterSpacing:scale(-1),
        fontStyle:'normal'
        
        
        
        
        
      },
      btn:{
        paddingHorizontal:moderateScale(69), 
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        paddingTop:moderateScale(88)
      }
});
export default styles