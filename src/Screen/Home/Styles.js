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
    FlexView:{
   flexDirection:'row',
   marginBottom:2
//    justifyContent:'space-between'
    },
    MainStyles:{
        backgroundColor:"#222126",
        flex:2,
        paddingHorizontal: 15,
        paddingVertical:5
        
    }
   
  
  


});
export default styles