import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Constants,Font,AppLoading } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import {Container, Content, InputGroup, Input, Icon,Item,Card,CardItem,Header,Body,Button} from 'native-base';


class DeliveryInfo extends Component{
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
                        <Text style={{ fontSize: 14, color: 'white', fontWeight: '400' }}>Delivery Info</Text>
                    </View>
                </Body>
            </Header>
            </View>
            <View>
              <Card style={{height:Dimensions.get('window').height}}>
              <Text style={{margin:5,fontSize:16,fontWeight:'600'}}>
                  Delivery : 
              </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>Normally our Delivery time is 4,5 Days, but on weekends or any govt vacation it can extend upto 7 Days.

                        </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>
                        To Track your Product Please contact us at 0333-3472537


                        </Text>
              </Card>
            </View>
            </View>
    )}}

    export default DeliveryInfo;

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        
        },
      });