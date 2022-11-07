import { View, Text } from 'react-native';
import React from 'react';
import BottamTabNavigation from './src/navigation/BottamTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import 'react-native-gesture-handler'

import StackNavigation from './src/navigation/StackNavigation';

//authentication integration
import {Provider} from 'react-redux';
import storePre from './src/store';



export default function App() {
  
  const {persistor, store} = storePre;

  return (
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StackNavigation/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}