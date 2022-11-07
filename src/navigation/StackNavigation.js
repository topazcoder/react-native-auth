


import * as React from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfirmOtp from '../Screen/OPtScreen/ConfirmOtp'



// import HomeScreen from '../Screen/Home/HomeScreen'
import BottamTabNavigation from '../navigation/BottamTabNavigation'
import LoginScreen from '../Screen/Login/LoginScreen'
import CreateAccount from '../Screen/CreateAccount/CreateAccount'
import RegisterScreen from '../Screen/Register/RegisterScreen'
import CreateAccountScreen from '../Screen/CreateAccountScreen/CreateAccountScreen'
import SignScreen from '../Screen/sign_up/SignScreen'
import SignUp from '../Screen/SignUpScreen/SignUp';
import VerifyAccount from '../Screen/VerifyAccount/VerifyAccount'
import LinkSend from '../Screen/LinkSend/LinkSend'
import InformationScreen from '../Screen/Information/InformationScreen'
import ConsoleScreen from '../Screen/Information/ConsoleScreen/ConsoleScreen'
import SignifyScreen from '../Screen/Signify/SignifyScreen'
import OnboardingScreen from '../Screen/Onboarding/OnboardingScreen'
import ContactsScreen from '../Screen/Contacts/ContactsScreen'
import Wallets from '../Screen/Wallets/Wallets';
import Exporting from '../Screen/ExportingAccounts/Exporting';
import VerifingMessage from '../Screen/VerifingMessage/VerifingMessage';
import Bip38 from '../Screen/BIP38Tools/Bip38';
import Main from '../Screen/Main/Main';
import SecondWallet from '../Screen/SecondWallet/SecondWallet';
import Display from '../Screen/Display/Display';
import Home from '../Screen/Home/Home/Home'

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerShown: false,
        }
      }
    >
      <Stack.Screen component={SignUp} name='SignUp' />

      <Stack.Screen component={LoginScreen} name='LoginScreen' />
      <Stack.Screen component={CreateAccount} name='CreateAccount' />
      <Stack.Screen component={CreateAccountScreen} name="CreateAccountScreen" />
      <Stack.Screen component={RegisterScreen} name='RegisterScreen' />
      <Stack.Screen component={SignScreen} name='SignScreen' />
      <Stack.Screen component={VerifyAccount} name='VerifyAccount' />
      <Stack.Screen component={LinkSend} name='LinkSend' />
      <Stack.Screen component={InformationScreen} name='InformationScreen' />
      <Stack.Screen component={ConsoleScreen} name='ConsoleScreen' />
      <Stack.Screen component={SignifyScreen} name='SignifyScreen' />
      <Stack.Screen component={OnboardingScreen} name='OnboardingScreen' />
      <Stack.Screen component={ContactsScreen} name='ContactsScreen' />

      <Stack.Screen component={BottamTabNavigation} name='BottamTabNavigation' />
      <Stack.Screen component={ConfirmOtp} name='ConfirmOtp' />
      <Stack.Screen component={Wallets} name="Wallets" />

      <Stack.Screen component={Exporting} name="Exporting" />
      <Stack.Screen component={VerifingMessage} name="VerifingMessage" />
      <Stack.Screen component={Bip38} name={"Bip38"} />
      <Stack.Screen component={Main} name={"Main"} />
      <Stack.Screen component={SecondWallet} name={"SecondWallet"} />
      <Stack.Screen component={Display} name={"Display"} />
      <Stack.Screen component={Home} name='Home' />
    </Stack.Navigator>
  )
}