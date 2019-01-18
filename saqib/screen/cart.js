import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Header, Body } from 'native-base';

class Cart extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        
        const { navigate } = this.props.navigation;
        // const { val } = this.props.navigation.state.params;
        // console.log('Cart***************', val);

        return (
            <View >
                <View style={{ marginTop: 22 }} >
                    <Header style={{ backgroundColor: '#1A5CAD' }}>
                        <Body style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row', marginLeft: 10 }}>
                            {/* <View>
           <Image source={require('../images/man.jpg')} style={{height:40,width:40,borderRadius:30}}/> 
           </View> */}
                            <View style={{ marginLeft: 10 }}>
                                {/* <Text style={{fontSize:16,color:'white'}}>Isales</Text> */}
                                <Text style={{ fontSize: 20, color: 'white', fontWeight: '500' }}>My Cart</Text>
                            </View>
                        </Body>
                    </Header>
                    <View>
                        <Card style={{ height: 200, justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={
                                    () => navigate("CheckoutFirst")
                                }>

                                    <Text style={{ color: 'gray' }}>There is no item available in this cart right now</Text>
                                </TouchableOpacity>
                            </View>
                        </Card>
                        {/* ////    just for u///// */}
                    </View>
                </View>
            </View>
        )
    }
}

export default Cart;
