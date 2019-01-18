import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput } from 'react-native';
import { Constants } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import { Item, Input, Icon } from 'native-base';


class Account extends Component{
    constructor(){
        super()
        this.state={
    
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Detail</Text>
            </View>
        )
    }
}

export default Account;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  