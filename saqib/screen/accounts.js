import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,Button,TextInput ,
    ImageBackground,Dimensions,TouchableOpacity} from 'react-native';
import { Constants,Font,AppLoading } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import {Container, Content, InputGroup, Input, Icon,Item,Card,CardItem,Header,Body} from 'native-base';

class Accounts extends Component{
    static navigationOptions = {
        header: null,
    };

    constructor(){
        super()
        this.state={
          
        }
    }
   

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View >
            <View style={{marginTop:22}} >
            <Header style={{backgroundColor:'#1A5CAD'}} >
           <Body style={{flex: 1,justifyContent:'flex-start',flexDirection:'row',marginLeft:10}}>
           <View>
           <Image source={require('../images/man.jpg')} style={{height:40,width:40,borderRadius:20}}/> 
           </View>
           <View style={{marginLeft:10}}>
               <Text style={{fontSize:16,color:'white'}}>Isales</Text>
               <Text style={{fontSize:16,color:'white'}}>Hello ,Zahid uzair</Text>
           </View>
           </Body>
           <View style={{justifyContent:'flex-end',flexDirection:'row',width:130,height:30,marginTop:15 }}>
                                    <Button
                            title='Login / Sign Up'
                            color="#ff6801"
                            onPress={() => navigate("MainSign")}
                            />
           </View>
          </Header>
          </View>
          <View>
          <Card style={{marginTop:5, height: Dimensions.get('window').height}}>
          <View style={{flexDirection:'column'}}>
            <TouchableOpacity  onPress={
                                    () => navigate("Cart")
                                }>
            <View style={{flexDirection:'row',marginLeft:15,marginTop:5,padding:10}}>
                <Image source={require('../images/order.png')} style={{height:20,width:20}}/>
                <Text style={{marginLeft:30,fontSize:14}}>My Orders</Text>
            </View>
                </TouchableOpacity>
            <View style={{borderBottomWidth:0.5,}}/>
            <TouchableOpacity  onPress={
                                    () => navigate("Home")
                                }>
            <View style={{flexDirection:'row',marginLeft:15,marginTop:5,padding:10}}>
                <Image source={require('../images/back.png')} style={{height:20,width:20}}/>
                <Text style={{marginLeft:30,fontSize:14}}>Return</Text>
            </View>
                </TouchableOpacity>
            <View style={{borderBottomWidth:0.5,}}/>
            <View style={{flexDirection:'row',marginLeft:15,marginTop:5,padding:10}}>
                <Image source={require('../images/man.png')} style={{height:20,width:20}}/>
                <Text style={{marginLeft:30,fontSize:14}}>Account Information</Text>
            </View>
            <View style={{borderBottomWidth:0.5,}}/>
            <TouchableOpacity  onPress={
                                    () => navigate("Setting")
                                }>
            <View style={{flexDirection:'row',marginLeft:15,marginTop:5,padding:10}}>
                <Image source={require('../images/settings.png')} style={{height:20,width:20}}/>
                <Text style={{marginLeft:30,fontSize:14}}>Settings</Text>
            </View>
            </TouchableOpacity>
            <View style={{borderBottomWidth:0.5,}}/>
            <TouchableOpacity  onPress={
                                    () => navigate("Policies")
                                }>
            <View style={{flexDirection:'row',marginLeft:15,marginTop:5,padding:10}}>
                <Image source={require('../images/document.png')} style={{height:20,width:20}}/>
                <Text style={{marginLeft:30,fontSize:14}}>Policies</Text>
            </View>
            </TouchableOpacity>
            <View style={{borderBottomWidth:0.5,}}/>
            <TouchableOpacity  onPress={
                                    () => navigate("DeliveryInfo")
                                }>
            <View style={{flexDirection:'row',marginLeft:15,marginTop:5,padding:10}}>
                <Image source={require('../images/shipped.png')} style={{height:20,width:20}}/>
                <Text style={{marginLeft:30,fontSize:14}}>Delivery Info</Text>
            </View>
            </TouchableOpacity>
            <View style={{borderBottomWidth:0.5,}}/>
            <TouchableOpacity  onPress={
                                    () => navigate("CustomerService")
                                }>
            <View style={{flexDirection:'row',marginLeft:15,marginTop:5,padding:10}}>
                <Image source={require('../images/support.png')} style={{height:20,width:20}}/>
                <Text style={{marginLeft:30,fontSize:14}}>Customer Serivce Info</Text>
            </View>
            </TouchableOpacity>
            <View style={{borderBottomWidth:0.5,}}/>
            <TouchableOpacity  onPress={
                                    () => navigate("Refund")
                                }>
            <View style={{flexDirection:'row',marginLeft:15,marginTop:5,padding:10}}>
                <Image source={require('../images/box-return.png')} style={{height:20,width:20}}/>
                <Text style={{marginLeft:30,fontSize:14}}>Return And Refund Info</Text>
            </View>
            </TouchableOpacity>
            <View style={{borderBottomWidth:0.5,}}/>
            <TouchableOpacity  onPress={
                                    () => navigate("Policies")
                                }>
            <View style={{flexDirection:'row',marginLeft:15,marginTop:5,padding:10}}>
                <Image source={require('../images/development.png')} style={{height:20,width:20}}/>
                <Text style={{marginLeft:30,fontSize:14}}>Career</Text>
            </View>
            </TouchableOpacity>
            <View style={{borderBottomWidth:0.5,}}/>
            </View>
          </Card>
          </View>
            </View>
        )
    }
}

export default Accounts;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  