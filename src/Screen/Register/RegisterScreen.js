//import liraries
import React, { Component ,useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import styles from './styles';
import { moderateScale, moderateVerticalScale ,scale,verticalScale} from 'react-native-size-matters';
  import ButtonCom from '../../components/ButtonCom'
  import Head from '../../components/Head';
  import TextInputWithLable from '../../components/TextInputWithLable';
  import imagePath from '../../components/imagePath';

// create a component
const RegisterScreen = ({navigation}) => {
    const [isVisble, setVisbal] = useState(true)

    return (
        <View style={styles.container}>


        <Head txt={'Login'} onPress={() => navigation.goBack()} />
        <View style={styles.mainStyles}>
            <TextInputWithLable
                label='Email Address'
                // placeHolder='Enter address'
                inputStyle={{ marginBottom: moderateVerticalScale(35) }}
                keyboardType="email-address"


            />

            <TextInputWithLable
                label='Password'
                // placeHolder='Enter address'
                secureTextEntry={isVisble}
                rightIcon={isVisble ? imagePath.hideEye : imagePath.ShowEye}
                onPressRight={() => setVisbal(!isVisble)}

            />
        </View>
        <Text style={styles.TextStyles}>Forgot Password?</Text>
        <View style={styles.btn}>
            <ButtonCom btnText="Login"
                btnStyle={styles.LgindBtn}
                textStyle={{ color: 'white', fontSize: 15}}

                onPress={() => navigation.navigate('SignScreen')}

            />
        </View>
        <View style={styles.LoginView}>
            <View style={styles.WrapView}>
            <Text style={styles.titleStyles}> Don’t Have an Account? </Text>
             <TouchableOpacity>
                 <Text style={styles.BtnTitle}>Register Now</Text>
             </TouchableOpacity>
             </View>
        </View>

    </View>
    );
};



//make this component available to the app
export default RegisterScreen;
