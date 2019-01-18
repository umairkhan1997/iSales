import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Constants,Font,AppLoading } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import {Container, Content, InputGroup, Input, Icon,Item,Card,CardItem,Header,Body,Button} from 'native-base';


class Refund extends Component{
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
                        <Text style={{ fontSize: 14, color: 'white', fontWeight: '400' }}>Return & Refund
</Text>
                    </View>
                </Body>
            </Header>
            </View>
            <ScrollView>
            <View>
              <Card style={{height:Dimensions.get('window').height}}>
              <Text style={{margin:5,fontSize:16,fontWeight:'600'}}>
                  Info : 
              </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>Following are the basic rules for our return and Refund policy.



                        </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>
                        Rules are subject to changed or altered as per company discretion.
                        </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>
                        Good News: first time in the pakistan we are offering hassle free return and refund policy,
                        </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>
                        once the product met the criteria of return and refund (policy is mentioned bellow) , you do not have to go anywhere ,neither to find any dispatch center nor any dispatch company office.
                        </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>
                        just stay at home with peace of mind, intimate us about the return along with reason, our delivery boy will be at your doorstep within 48 hours.
                        </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>
                        Nothing will be charged for delivery or return
                        </Text>
                        <Text style={{margin:5,marginTop:10,fontSize:16,fontWeight:'600'}}>
                        Return:
                        </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>
                        Product once purchased and delivered can only be returned if it qualifies to below mentioned criteria.
                        </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>
                        1: it is not the same that you've ordered
                        </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>
                        2: there is difference in the product quality from the one which is mentioned in product description in storefront
                        </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>
                        3: product is damaged
                        </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>
                        4: the material is not same as mentioned
                        </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>
                        5: product has been delivered after at least 5 days from the date agreed during the purchase
                        </Text>
                        <Text style={{margin:5,fontSize:14,fontWeight:'400'}}>
                        6: Another product is arrived which is different from the one you've ordered
                        </Text>
                        <Text style={{margin:5,marginTop:10,fontSize:16,fontWeight:'600'}}>
                  Refund : 
              </Text>
              <Text style={{marginLeft:5,fontSize:14,fontWeight:'400'}}>
              once you chose to return the product, refunding will be done within 72 hours after the recollection of the product
                        </Text>
              </Card>
            </View>
              </ScrollView>
            </View>
    )}}

    export default Refund;

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        
        },
      });