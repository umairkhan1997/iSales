import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView} from 'react-native';
import { Constants,Font,AppLoading } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
import {Container, Content, InputGroup, Input, Icon,Item,Card,CardItem,Header,Body,Button} from 'native-base';

class SignUp extends Component{
    constructor(){
        super()
        this.state={
          
        }
    }
   

    render(){
        return(
            <View style={styles.container}>
                    <ScrollView>
            <Card style={{height:Dimensions.get('window').height}}>
                <View style={{justifyContent:'center',flexDirection:'row',marginTop:20}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:"#1A5CAD",letterSpacing:2}}>Register for a new account</Text>
                </View>
                <KeyboardAvoidingView behavior="padding">
                <View style={{marginTop:50}}>
                <Item>
            <Input placeholder="First Name" />
          </Item>
                </View>
                <View style={{marginTop:20}}>
                <Item>
            <Input placeholder="Last Name" />
          </Item>
                </View>
                <View style={{marginTop:20}}>
                <Item>
            <Input placeholder="Phone Number" />
          </Item>
                </View>
                <View style={{marginTop:20}}>
                <Item>
            <Input placeholder="Email" />
          </Item>
                </View>
                <View style={{marginTop:20}}>
                <Item>
            <Input placeholder="Password" />
          </Item>
                </View>
                {/* <View style={{justifyContent:'center',flexDirection:'row',marginTop:20}}>
                <Button
                            title='Sign Up'
                            color="#ff6801"
                            
                            
                            />
                </View> */}
                   <View >
                                <Button onPress={this.CheckTextInputIsEmptyOrNot}
                                    style={{
                                        marginTop: 30, color: 'white', backgroundColor: '#ff6801',
                                        marginHorizontal: "5%", width: '90%', textAlign: 'center', borderRadius: 20, height: 40, marginBottom: 100
                                    }}>
                                    <Text style={{ color: 'white', marginLeft: '40%', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>Log In</Text>
                                </Button>

                            </View>
                </KeyboardAvoidingView>
                </Card>
            </ScrollView>
            </View>
        )
    }
}

export default SignUp;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });
  