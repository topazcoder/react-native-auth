import { createDrawerNavigator } from '@react-navigation/drawer';
// import feed from '../Screen/feed';
import HomeScreen from '../Screen/Home/HomeScreen';
import PadLock from '../Screen/Home/PadLock';
import Moon from '../Screen/Home/Home/Moon';
import StepOver from '../Screen/Home/Home/StepOver';
import Wifi from '../Screen/Home/Home/Wifi';
import Copy from '../Screen/Home/Home/Copy';
import React from 'react';
import { View, Image } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: '#222126',
        headerShown: false,
        drawerStyle: { width: moderateVerticalScale(179), backgroundColor: '#222126', paddingHorizontal: moderateVerticalScale(23) }
      }}

    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen}

        options={{
          drawerIcon: ({ focused }) => (

            <View style={{
              alignItems: "baseline", justifyContent: "center", marginTop: 20, alignItems: 'center',
            }}>
              <Image
                source={require('../assets/folders.png')}

                resizeMode="contain"
                style={{
                  // width:moderateScale(30),
                  // height:moderateScale(30),
                  tintColor: focused ? '#18F3A7' : '#ffffff',


                }}
              />
            </View>

          )
        }}
      />

      <Drawer.Screen name="Copy" component={Copy}
        options={{
          drawerIcon: ({ focused }) => (

            <View style={{
              alignItems: "baseline", justifyContent: "center", marginTop: 20, borderRadius: 6, alignItems: 'center'
            }}>
              <Image
                source={require('../assets/folders.png')}

                resizeMode="contain"
                style={{
                  width: moderateScale(30),
                  height: moderateScale(30),
                  tintColor: focused ? '#18F3A7' : '#ffffff',


                }}
              />
            </View>

          )
        }}
      />
      <Drawer.Screen name="StepOver" component={StepOver}
        options={{
          drawerIcon: ({ focused }) => (

            <View style={{
              alignItems: "baseline", justifyContent: "center", marginTop: 20, borderRadius: 6, alignItems: 'center'
            }}>
              <Image
                source={require('../assets/step.png')}

                resizeMode="contain"
                style={{
                  width: moderateScale(30),
                  height: moderateScale(30),
                  tintColor: focused ? '#18F3A7' : '#ffffff',


                }}
              />
            </View>

          )
        }}
      />
      <Drawer.Screen name="Wifi" component={Wifi}
        options={{
          drawerIcon: ({ focused }) => (

            <View style={{
              alignItems: "baseline", justifyContent: "center", marginTop: 20, borderRadius: 6, alignItems: 'center'
            }}>
              <Image
                source={require('../assets/wifi.png')}

                resizeMode="contain"
                style={{
                  width: moderateScale(30),
                  height: moderateScale(30),
                  tintColor: focused ? '#18F3A7' : '#ffffff',



                }}
              />
            </View>

          )
        }}
      />
      <Drawer.Screen name="PadLock" component={PadLock}
        options={{
          drawerIcon: ({ focused }) => (

            <View style={{
              alignItems: "baseline", justifyContent: "center", marginTop: 20, borderRadius: 6, alignItems: 'center'
            }}>
              <Image
                source={require('../assets/lock.png')}

                resizeMode="contain"
                style={{
                  width: moderateScale(30),
                  height: moderateScale(30),
                  tintColor: focused ? '#18F3A7' : '#ffffff',



                }}
              />
            </View>

          )
        }}
      />
      <Drawer.Screen name="Moon" component={Moon}
        options={{
          drawerIcon: ({ focused }) => (

            <View style={{
              alignItems: "baseline", justifyContent: "center", marginTop: 20, borderRadius: 6, alignItems: 'center'
            }}>
              <Image
                source={require('../assets/moon.png')}

                resizeMode="contain"
                style={{
                  width: moderateScale(30),
                  height: moderateScale(30),
                  tintColor: focused ? '#18F3A7' : '#ffffff',


                }}
              />
            </View>

          )
        }}
      />

    </Drawer.Navigator>
  );
}
