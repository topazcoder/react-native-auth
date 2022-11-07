// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
// import { color } from 'react-native-elements/dist/helpers';
// import { moderateScale, moderateVerticalScale ,verticalScale} from 'react-native-size-matters';
// import imagePath from '../components/imagePath';
// import {Colors} from '../styles/styles';


// const TextInputWithLable = ({
//   label,
//   PlaceHolder,
//   onchangeText = () => { },
//   inputStyle = {},
//   rightIcon,
//   onPressRight,
//   ...props

// }) => {

//   return (
//     <View style={styles.container}>
//       <View style={{ ...styles.inputStyle, ...inputStyle }}>
//         <Text>{label}</Text>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center",marginTop:-20 }}>
//           <TextInput placeholder={PlaceHolder}
//           placeholderTextColor={Colors.inputTextColor}

//             style={styles.inlineStyle}


//             {...props}

//           />

//           {!!rightIcon ?
//             <TouchableOpacity
//               onPress={onPressRight}

//             >
//               <Image style={{ tintColor: "rgba(0,0,0,0.42)", width:20, height:20 ,marginRight:10}}
//                 source={rightIcon} />
//             </TouchableOpacity> : null
//           }
//         </View>
//       </View>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   inputStyle: {
//     borderColor: "rgba(0,0,0,.08)",
//     // borderColor:"red",
//     borderWidth: 1,
//     borderRadius: moderateScale(4),



//   },
//   inlineStyle: {
//     padding: moderateVerticalScale(8),
//     marginHorizontal:10,
//     color: Colors.black,
//     backgroundColor:"transparent",



//     fontSize: verticalScale(13),

//     flex:1
//   }
// });

// //make this component available to the app
// export default TextInputWithLable;


//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { moderateVerticalScale, moderateScale, scale } from 'react-native-size-matters';
// import { inlineStyles } from 'react-native-svg';
import imagePath from '../components/imagePath';


// create a component
const TextInputWithLable = ({
  label,
  placeHolder,
  onChangeText = () => { },
  inputStyle = {},
  rightIcon,
  onPressRight,
  labelText,
  inputStyle2,
  flexView,
  ...props


}

) => {
  return (
    <View

      style={{ ...styles.inputStyle, ...inputStyle }}>
      <Text style={{ ...styles.labelTextStyle, ...labelText }}>{label}</Text>
      <View style={{...styles.flexView,...flexView}}>
        <TextInput
          placeholder={placeHolder}
          style={{...styles.inlineStyle ,...inputStyle2}}
          {...props}



        />
        {!!rightIcon ?
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPressRight}

          >
            <Image source={rightIcon} style={{ tintColor: "rgba(0,0,0,0.5)", width: 20, height: 20, marginRight: 10 }} />
          </TouchableOpacity> : null}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.5)",
    borderRadius: moderateScale(5),




  },
  inlineStyle: {
    paddingVertical: moderateVerticalScale(8),
    fontSize: scale(14),
    color: 'rgba(0,0,0,0.5)',
    flex: 1,
    



  },
  labelTextStyle: {
    fontSize: scale(12),
    fontWeight: '600',

    color: 'white',
    marginBottom: 8


  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: '#A0C9D4',
    marginTop: moderateScale(2),
    borderRadius: 5,
    minHeight: 50



  }
});

//make this component available to the app
export default TextInputWithLable;

