
import { moderateScale, moderateVerticalScale ,verticalScale,scale} from 'react-native-size-matters';

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor: 'black',
        paddingHorizontal:moderateScale(67),
        paddingTop:moderateScale(80),
      
        
        
        
    },
    BtnStyles:{
        backgroundColor: 'black',
                    borderColor:'#1BBEE9',
                    borderWidth:1,
                    marginVertical:moderateVerticalScale(30),
                    width:moderateScale(236),
        
    },
    btn:{
      justifyContent:'center',
      width:moderateScale(236)

    },
    subBtn:{
        marginVertical:moderateScale(20)
    },
    mainStyles:{

alignItems:'center',
paddingVertical:moderateVerticalScale(73)
    },
    StyleImage:{
        width:moderateScale(288),
        height:moderateScale(288),
     
        
      },
});
export default styles