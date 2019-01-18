import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Constants,Font,AppLoading } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import {Container, Content, InputGroup, Input, Icon,Item,Card,CardItem,Header,Body,Button} from 'native-base';


class CheckoutFirst extends Component{
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
                                    () => navigate("Cart")
                                }>
   <Image source={require('../images/left-arrow.png')} style={{height:15,width:15,marginTop:2}}/> 
   </TouchableOpacity>
   </View>
                    <View style={{ marginLeft: 10 }}>
                        {/* <Text style={{fontSize:16,color:'white'}}>Isales</Text>
                        <Image source={require('../images/left-arrow.png')} style={{height:40,width:40}}/> */}
                        <Text style={{ fontSize: 14, color: 'white', fontWeight: '400' }}>Check Out</Text>
                    </View>
                </Body>
            </Header>
            </View>
            <ScrollView>
            <View style={{marginTop:10}}>
                <Text style={{fontSize:12,color:"gray",marginLeft:10}}>Ship to</Text>
                <Text style={{fontSize:12,color:'black',marginLeft:10}}>
                    Person Name
                </Text>
                <Text style={{fontSize:12,color:'black',marginLeft:10,marginTop:10,color:"gray"}}>Address Address Address Address Address Address Address Address Address
                Address Address Address Address Address Address Address Address
                </Text>
            </View>
            {/* <View style={{borderBottomWidth:0.6,width:'90%',borderBottomColor:'gray'}}/> */}
            <View style={{marginTop:5}}>
            <Card style={{height:400,marginTop:10,height:Dimensions.get('window').height}}>
                        <View>
                        <View>
                            <View style={{marginTop:10,justifyContent:'flex-start',flexDirection:'row',
                           marginLeft:10}}>
                            <Image source={require('../images/box.png')} style={{width:13,height:13,marginTop:3}}/>
                            <Text style={{marginLeft:5,fontSize:12}}>
                                Package
                                </Text>
                            </View>
                            <View style={{justifyContent:'flex-end',flexDirection:'row',marginRight:10}}>
                            <Text style={{fontSize:12}}>
                                Shipped By iSales
</Text>
                            </View>
                            </View>

                            <View style={{borderWidth:0.5,width:'35%',height:"15%",
                            marginLeft:20,marginTop:5,backgroundColor:"#F6E7F3",borderColor:"#F6E7F3"}}>
                                <Text style={{margin:5,fontSize:12}}>
                                    Rs .35
                                </Text>
                                <Text style={{margin:5,fontSize:10,marginBottom:5}}>
                                    Shipping Charges only 
                                </Text>
                            </View>
                            <View style={{borderBottomWidth:0.6,width:'90%',borderBottomColor:'gray',
                            marginLeft:"5%",marginTop:20}}/>
                            <View style={{flexDirection:'row',marginTop:20,marginLeft:10}}>
                            <View style={{width:'30%'}}>
                                <Image source={require('../images/juicer.jpg')} style={{height:100,width:100}}/>
                            </View>
                            <View style={{width:"70%",marginLeft:5,marginTop:20}}>
                                <Text>Item Name Item Name Item Name Item Name Item Name </Text>
                                <View style={{flexDirection:'row',marginTop:5}}>
                                    <Text style={{color:'#ff6801',fontSize:14,fontWeight:'bold'}}>Rs .</Text>
                                    <Text style={{color:'#ff6801'}}>78678</Text>
                                </View>
                            </View>
                            </View>
                            <View style={{borderBottomWidth:0.6,width:'90%',borderBottomColor:'gray',
                            marginLeft:"5%",marginTop:20}}/>
                                <View style={{justifyContent:'flex-end',flexDirection:'row',margin:10}}>
                                <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#ff6801',fontSize:14,fontWeight:'bold'}}> TOTAL Rs .</Text>
                                <Text style={{color:'#ff6801'}}>95697</Text>
                                </View>
                                </View>
                            </View>
                            <View >
                                <Button 
                                onPress={
                                    () => navigate("TotalPayment")
                                }
                                    style={{
                                        color: 'white', backgroundColor: '#ff6801',
                                        marginHorizontal: "5%", width: '90%', textAlign: 'center', borderRadius: 20, height: 40, marginBottom: 0
                                    }}>
                                    <Text style={{ color: 'white', marginLeft: '40%', 
                                    fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>Place Order</Text>
                                </Button>

                            </View>
                                   
                       
            </Card>
            </View>
            </ScrollView>
            </View>
    )
}


}

export default CheckoutFirst;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    
    },
  });