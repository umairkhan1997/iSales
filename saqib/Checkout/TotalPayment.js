import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Constants,Font,AppLoading } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import {Container, Content, InputGroup, Input, Icon,Item,Card,CardItem,Header,Body,Button} from 'native-base';


class TotalPayment extends Component{
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
                                    () => navigate("CheckoutFirst")
                                }>
   <Image source={require('../images/left-arrow.png')} style={{height:15,width:15,marginTop:2}}/> 
   </TouchableOpacity>
   </View>
                    <View style={{ marginLeft: 10 }}>
                        {/* <Text style={{fontSize:16,color:'white'}}>Isales</Text>
                        <Image source={require('../images/left-arrow.png')} style={{height:40,width:40}}/> */}
                        <Text style={{ fontSize: 14, color: 'white', fontWeight: '400' }}>Cash on Delivery</Text>
                    </View>
                </Body>
            </Header>
            </View>
            <View>
                <Card style={{height:60}}>
                <View style={{flexDirection:'row'}}>
                <View style={{width:'20%'}}>
<Image source={require('../images/payment-methods.png')} style={{width:40,height:40,margin:10}}/>

</View>
<View  style={{width:' 80%'}}>
<Text style={{marginTop:10}}>
You can pay in cash to our courier when you receive the goods at your doorstep.
</Text>
</View>
                </View>
                </Card>
            </View>
            <View style={{marginTop:50}}>
                                <Button 
                                onPress={
                                    () => navigate("TotalPayment")
                                }
                                    style={{
                                        color: 'white', backgroundColor: '#ff6801',
                                        marginHorizontal: "5%", width: '90%', textAlign: 'center', borderRadius: 10, height: 40, marginBottom: 0
                                    }}>
                                    <Text style={{ color: 'white', marginLeft: '40%', 
                                    fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>Place Order</Text>
                                </Button>

                            </View>
        </View>
    )
}
}

export default TotalPayment;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    
    },
  });