import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView} from 'react-native';
import { Constants,Font,AppLoading } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import {Container, Content, InputGroup, Input, Icon,Item,Card,CardItem,Header,Body,Button} from 'native-base';


class PaymentMethod extends Component{
    static navigationOptions = {
        header: null,
    };
    
constructor(props){
    super(props)
    this.state={

    }
}
render(){
    
    return(
        <View>
            <Text>PaymentMethod</Text>
        </View>
    )
}
}

export default PaymentMethod;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    
    },
  });