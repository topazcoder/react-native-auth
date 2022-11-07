import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Send from '../Screen/Send/Send';
import Recieve from '../Screen/Recieve/Recieve';
import Masternodes from '../Screen/Masternodes/Masternodes';
import Settings from '../Screen/Settings/Settings';
import MyDrawer from '../Screen/../navigation/DrawerNavigator'









const Tab = createBottomTabNavigator();

export default function BottamTabNavigation() {
  return (
    <Tab.Navigator

      screenOptions={{


        headerShown: false,
        tabBarActiveTintColor: '#18F3A7',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: 'black',
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen name="MyDrawer" component={MyDrawer}
        options={{
          tabBarIcon: ({ focused }) => (

            <View style={{
              alignItems: "baseline", justifyContent: "center",
              height: 49, width: 49, borderRadius: 6, alignItems: 'center'
            }}>
              <Image
                source={require('../assets/Home.png')}

                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#18F3A7' : '#666666',


                }}
              />
            </View>

          )
        }}

      />
      <Tab.Screen name="Send " component={Send}
        options={{
          tabBarIcon: ({ focused }) => (

            <View style={{
              alignItems: "baseline", justifyContent: "center",
              height: 49, width: 49, borderRadius: 6, alignItems: 'center'
            }}>
              <Image
                source={require('../assets/Send.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#18F3A7' : '#666666',


                }}
              />
            </View>

          )
        }}

      />
      <Tab.Screen name={"Recieve"} component={Recieve}
        options={{
          tabBarIcon: ({ focused }) => (

            <View style={{
              alignItems: "baseline", justifyContent: "center",
              height: 49, width: 49, borderRadius: 6, alignItems: 'center'
            }}>
              <Image
                source={require('../assets/Revices.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#18F3A7' : '#666666',


                }}
              />
            </View>

          )
        }}

      />
      <Tab.Screen name="Masternodes" component={Masternodes}
        options={{
          tabBarIcon: ({ focused }) => (

            <View style={{
              alignItems: "baseline", justifyContent: "center",
              height: 49, width: 49, borderRadius: 6, alignItems: 'center'
            }}>
              <Image
                source={require('../assets/ring.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#18F3A7' : '#666666',


                }}
              />
            </View>

          )
        }}
      />
      <Tab.Screen name="Settings " component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (

            <View style={{
              alignItems: "baseline", justifyContent: "center",
              height: 49, width: 49, borderRadius: 6, alignItems: 'center',
            }}>
              <Image
                source={require('../assets/setting.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#18F3A7' : '#666666',


                }}
              />
            </View>

          )
        }}

      />

    </Tab.Navigator>
  );
}

