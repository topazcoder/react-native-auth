
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image ,TouchableOpacity} from 'react-native';
import styles from './Styles';
import { Items } from '../../components/Items';


// create a component
const HomeScreen = ({navigation}) => {
    console.log('HomeScreen',HomeScreen)
    return (
        <View style={styles.container}>
            <View style={styles.MainContainer}>
            <TouchableOpacity
            onPress={()=>navigation.openDrawer()}
            >
                <Image style={styles.MenuIcon} source={require('../../assets/menu.png')} />
            </TouchableOpacity>
            <Text style={styles.TextStyles}>Total</Text>
            <Text style={styles.Text1Styles}>28,300.75 MDDN</Text>
            <View style={styles.FlexView}>
                <View style={{ flex: 2.4 }}>
                    <Text style={styles.TextStyles}>Available</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.TextStyles}>Locked</Text>
                </View>


            </View>
            <View style={styles.FlexView}>
                <View style={{ flex: 2.4 }}>

                    <Text style={styles.Text1Styles}>3,272.75 MDDN</Text>
                </View>
                <View style={{ flex: 2 }}>

                    <Text style={styles.Text1Styles}>28,300.75 MDDN</Text>
                </View>



            </View>
            <View style={styles.FlexView}>
                <View style={{ flex: 2.4  }}>

                    <Text style={styles.TextStyles}>Not fully developed</Text>
                </View>

                <View style={{ flex: 2 }}>

                    <Text style={styles.Text2Styles}>Pending</Text>
                </View>


            </View>
            <View style={styles.FlexView}>
                <View style={{ flex: 2.4  }}>

                    <Text style={styles.Text1Styles}>28.00 MDDN</Text>
                </View>
                <View style={{ flex: 2 }}>

                    <Text style={styles.Text1Styles}>3,272.75 MDDN</Text>
                </View>



            </View>
            </View>
            <View style={styles.MainStyles}>
                <Text style={styles.SubText}>Transactions</Text>
                <View style={{marginTop:-3}}>
                    <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
                        <Text style={[styles.TextStyles ,{paddingHorizontal:30}]}>All</Text>
                    
                       <TouchableOpacity>
                  
                    <Image style={{width:10,height:10,}} source={require('../../assets/down.png')}/>
                    </TouchableOpacity>
                    <View style={{paddingRight:31}}></View>
                    
                    <Text style={styles.TextStyles}>data</Text>
                    <View style={{paddingRight:31}}></View>
                   <TouchableOpacity>
                    <Image style={{width:10,height:10}} source={require('../../assets/down.png')}/>
                    </TouchableOpacity> 

                    </View>
                </View>
                <Text style={[styles.TextStyles,{color:'#1BBEE9',marginTop:-6}]}>View your account’s history</Text>
                
                
                <Items abbrev={'Masternode reward MDDN101'} description='Masternode reward MDDN101' icon={'gift'} quantity={'+14.00 MDDN'} />
                <Items abbrev={'Masternode reward MDDN101'} description='Masternode reward MDDN101' icon={'gift'} quantity={'+14.00 MDDN'} />

                <Items abbrev={'Masternode reward MDDN101'} description='Masternode reward MDDN101' icon={'gift'} quantity={'+14.00 MDDN'} styleColor={{color:'#1BBEE9'}}/>
                <Items abbrev={'Masternode reward MDDN101'} description='Masternode reward MDDN101' icon={'gift'} quantity={'+14.00 MDDN'} styleColor={{color:'#1BBEE9'}}/>
                <Items abbrev={'Masternode reward MDDN101'} description='Masternode reward MDDN101' icon={'gift'} quantity={'+14.00 MDDN'} styleColor={{color:'#1BBEE9'}}/>
                <Items abbrev={'Masternode reward MDDN101'} description='Masternode reward MDDN101' icon={'gift'} quantity={'+14.00 MDDN'} styleColor={{color:'#1BBEE9'}}/>
                <Items abbrev={'Masternode reward MDDN101'} description='Masternode reward MDDN101' icon={'gift'} quantity={'+14.00 MDDN'} styleColor={{color:'#1BBEE9'}}/>

       
            </View>


        </View>
    );
};



//make this component available to the app
export default HomeScreen;
