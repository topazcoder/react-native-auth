//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import imagePath from '../components/imagePath';

// create a component
const DropDown = ({
  navigation,
  text,
  tools = [],
  debug = [],
  help = [],
  contacts = [],
  options = [],
  data = [],
  value = {},
  onSelect = () => { }
}) => {
  console.log('selected', !!value)
  const [showOptions, setshowOptions] = useState(false)
  const onSelectedItem = (val, i) => {
    console.log(val, i)
    setshowOptions(false)
    onSelect(val, i)
    if (val == data[0]) {
      navigation.navigate('Wallets')
    }
    if (val == data[1]) {
      navigation.navigate('Exporting')
    }
    if (val == tools[0]) {
      navigation.navigate('VerifingMessage')
    }
    if (val == tools[1]) {
      navigation.navigate('Bip38')
    }
    if (val == options[0]) {
      navigation.navigate('Main')
    }
    if (val == options[1]) {
      navigation.navigate('SecondWallet')
    }
    if (val == options[2]) {
      navigation.navigate('Display')
    }
    if (val == debug[0]) {
      navigation.navigate('InformationScreen')
    }
    if (val == debug[1]) {
      navigation.navigate('ConsoleScreen')

    }
    if (val == debug[2]) {
      navigation.navigate('SignifyScreen')

    }
    if (val == contacts[0]) {
      navigation.navigate('ContactsScreen')

    }




  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropDown} onPress={() => setshowOptions(!showOptions)}>
        <Text style={{ color: '#D4D1D1', fontSize: 13, fontWeight: '400' }}>{text}</Text>

        {/* <Text style={{color:'black'}}>{!!value? value?.name: "chose any option"}</Text> */}
        <Image source={imagePath.icDropDown}
          style={{
            transform: [{
              rotate: showOptions ? '90deg' : '0deg',

            }]
          }}
        />
      </TouchableOpacity>
      {showOptions && (
        <View>
          {data.map((val, i, id) => {
            return (
              <TouchableOpacity key={String(i)}
                onPress={() => { onSelectedItem(val, i) }}
                style={{
                  backgroundColor: val.id == val.id ? '#1D1D1D' : 'white', marginTop: 8,

                }}
              >

                <Text style={{ color: '#D4D1D1', fontSize: 12, fontWeight: '800', paddingTop: 9, paddingBottom: 9 }}>{val.name}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      )}
      {showOptions && (
        <View>
          {tools.map((val, i, id) => {
            return (
              <TouchableOpacity key={String(i)}
                onPress={() => { onSelectedItem(val, i) }}
                style={{
                  backgroundColor: val.id == val.id ? '#1D1D1D' : 'white', marginTop: 8,

                }}
              >

                <Text style={{ color: '#D4D1D1', fontSize: 12, fontWeight: '800', paddingTop: 9, paddingBottom: 9 }}>{val.name}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      )}
      {showOptions && (
        <View>
          {options.map((val, i, id) => {
            return (
              <TouchableOpacity key={String(i)}
                onPress={() => { onSelectedItem(val, i) }}
                style={{
                  backgroundColor: val.id == val.id ? '#1D1D1D' : 'white', marginTop: 8,

                }}
              >

                <Text style={{ color: '#D4D1D1', fontSize: 12, fontWeight: '800', paddingTop: 9, paddingBottom: 9 }}>{val.name}</Text>
              </TouchableOpacity>
            )
          })}
          {showOptions && (
            <View>
              {debug.map((val, i, id) => {
                return (
                  <TouchableOpacity key={String(i)}
                    onPress={() => { onSelectedItem(val, i) }}
                    style={{
                      backgroundColor: val.id == val.id ? '#1D1D1D' : 'white', marginTop: 8,

                    }}
                  >

                    <Text style={{ color: '#D4D1D1', fontSize: 12, fontWeight: '800', paddingTop: 9, paddingBottom: 9 }}>{val.name}</Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          )}
          {showOptions && (
            <View>
              {help.map((val, i, id) => {
                return (
                  <TouchableOpacity key={String(i)}
                    onPress={() => { onSelectedItem(val, i) }}
                    style={{
                      backgroundColor: val.id == val.id ? '#1D1D1D' : 'white', marginTop: 8,

                    }}
                  >

                    <Text style={{ color: '#D4D1D1', fontSize: 12, fontWeight: '800', paddingTop: 9, paddingBottom: 9 }}>{val.name}</Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          )}
          {showOptions && (
            <View>
              {contacts.map((val, i, id) => {
                return (
                  <TouchableOpacity key={String(i)}
                    onPress={() => { onSelectedItem(val, i) }}
                    style={{
                      backgroundColor: val.id == val.id ? '#1D1D1D' : 'white', marginTop: 8,

                    }}
                  >

                    <Text style={{ color: '#D4D1D1', fontSize: 12, fontWeight: '800', paddingTop: 9, paddingBottom: 9 }}>{val.name}</Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          )}
        </View>
      )}

    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    // justifyContent:'center',
    // alignItems:'center'
  },
  dropDown: {
    width: "100%",
    backgroundColor: '#222126',
    borderRadius: 4,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

//make this component available to the app
export default DropDown
  ;
