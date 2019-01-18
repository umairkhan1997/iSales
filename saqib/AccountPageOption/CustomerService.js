import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity,ListView} from 'react-native';
import { Constants,Font,AppLoading } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import {Container, Content, InputGroup, Input, Icon,Item,Card,CardItem,Header,Body,Button, ListItem} from 'native-base';


class CustomerService extends Component{
    static navigationOptions = {
        header: null,
    };
constructor(props){
    super(props)
    this.state={

    }
}
render(){
    const { navigate } = this.props.navigation;
    return(
        <View >
          <View style={{ marginTop: 22 }} >
            <Header style={{ backgroundColor: '#1A5CAD' }}>
                <Body style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row', marginLeft: 10 }}>
                    <View>
                    <TouchableOpacity  onPress={
                                    () => navigate("Account")
                                }>
   <Image source={require('../images/left-arrow.png')} style={{height:15,width:15,marginTop:2}}/> 
   </TouchableOpacity>
   </View>
                    <View style={{ marginLeft: 10 }}>
                        {/* <Text style={{fontSize:16,color:'white'}}>Isales</Text>
                        <Image source={require('../images/left-arrow.png')} style={{height:40,width:40}}/> */}
                        <Text style={{ fontSize: 14, color: 'white', fontWeight: '400' }}>Customer Service</Text>
                    </View>
                </Body>
            </Header>
            </View>
            <View>
              <Card style={{height:Dimensions.get('window').height}}>
              <Text style={{margin:5,fontSize:16,fontWeight:'600'}}>
              Service : 
              </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>Its the key part of our business philosophy that No business can grow or Perform better without providing a satisfactory Customer Service.



                        </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>
                        Hence our team is available for 24/7 to serve you in best Possible way </Text>
                       <View style={{flexDirection:'row'}}>
                        <Image source={require('../images/record-button.png')} 
                        style={{width:5,height:5,margin:12}} />
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>24/7 Hotline = 021-24012537</Text>
                       </View>
                       <View style={{flexDirection:'row'}}>
                        <Image source={require('../images/record-button.png')} 
                        style={{width:5,height:5,margin:12}} />
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>Call/whatsapp = 0333-3472537</Text>
                       </View>
                       <View style={{flexDirection:'row'}}>
                        <Image source={require('../images/record-button.png')} 
                        style={{width:5,height:5,margin:12}} />
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>Email Us at = info@isales.pk</Text>
                       </View>
                       <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>You can also send us message at our facebook, Insta , twitter Handles and you will get reply with in One Hour

</Text>
              </Card>
            </View>
            </View>
    )}}

    export default CustomerService;

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        
        },
      });