import { TouchableOpacity, StyleSheet,Text } from 'react-native';
// import { Icon } from 'react-native-elements';


export default CodePicker = ({ onPress, text}) => (
  <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center'}}>
    <Text style={styles.pickerText} text={text} />
    {/* <Icon size={13} name='caret-down' type='ionicon' /> */}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  pickerText: {
    fontSize: 15,
    marginLeft: 9,
    marginRight: 6
  }
})