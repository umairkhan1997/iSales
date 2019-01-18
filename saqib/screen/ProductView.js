import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import ImageSliderforProduct from '../components/ImageSliderforProduct';

class ProductView extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>

                <ScrollView>

                    {/* Image Slider */}

                    <View style={{ flex: 1.5 }} >
                        <ImageSliderforProduct />
                    </View>

                    {/* Image Slider End */}


                    {/* Product & Collection */}

                    <View style={{ flex: 2.9 }} >
                        <Card style={{ height: 120 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10, marginTop: 10, color: '#ff6801' }}>
                                        Rs : 6878
                                    </Text>
                                </View>
                                <View style={{ width: '90%' }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 10, marginTop: 5, color: 'black' }}>OnePlus 5T - 6.01" Optic AMOLED Display - 8GB RAM - 128GB ROM - Fingerprint Sensor</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>

                                        <Text style={{ fontSize: 16, color: '#ff6801', fontWeight: 'bold', marginLeft: 10, marginTop: 5 }}>Buy Now</Text>
                                        {/* 8C8E8F */}
                                        <Image source={require('../images/shopping-bag.png')} style={{ width: 20, height: 20, marginLeft: 5, marginTop: 5 }} />

                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 15 }}>

                                        <Text style={{ fontSize: 16, color: '#1A5CAD', fontWeight: 'bold', marginTop: 5 }}>Cart it</Text>
                                        {/* 8C8E8F */}
                                        <Image source={require('../images/shopping-cart.png')} style={{ width: 20, height: 20, marginTop: 5 }} />

                                    </View>
                                </View>

                            </View>
                        </Card>
                        <Card style={{ marginVertical: 10, height: 50, justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                <Text style={{ fontSize: 12, color: '#5f7d95' }}>Specification : </Text>
                                <Text style={{ fontSize: 12, color: 'black' }}>Brand Product , with Warranty , Box content</Text>
                            </View>
                        </Card>
                        <Card style={{ height: 250 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', marginLeft: 15, padding: 10 }}>
                                    <Text style={{ fontSize: 14, color: '#757B80' }}>Delivery Options</Text>
                                </View>
                                <View style={{ borderBottomWidth: 0.3, }} />
                                <View style={{ flexDirection: 'row', marginLeft: 15, padding: 10 }}>
                                    <Image source={require('../images/van.png')} style={{ width: 20, height: 20 }} />
                                    <Text style={{ fontSize: 14, color: '#5f7d95', marginLeft: 10 }}>Home Delivery</Text>
                                </View>
                                {/* <View style={{borderBottomWidth:0.3,}}/> */}
                                <View style={{ flexDirection: 'row', marginLeft: 15, padding: 10 }}>
                                    <Image source={require('../images/payment-method.png')} style={{ width: 20, height: 20 }} />
                                    <Text style={{ fontSize: 14, color: '#5f7d95', marginLeft: 10 }}>Cash on Delivery Available</Text>
                                </View>
                                <View style={{ borderBottomWidth: 0.3, }} />
                                <View style={{ flexDirection: 'row', marginLeft: 10, padding: 10 }}>
                                    <Text style={{ fontSize: 14, color: '#5f7d95', marginLeft: 10 }}>Return & Warranty</Text>
                                </View>
                                <View style={{ borderBottomWidth: 0.3, }} />
                                <View style={{ flexDirection: 'row', marginLeft: 15, padding: 10 }}>
                                    <Image source={require('../images/export.png')} style={{ width: 20, height: 20 }} />
                                    <Text style={{ fontSize: 14, color: '#5f7d95', marginLeft: 10 }}>7 Days money back Gurranty</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: 15, padding: 10 }}>
                                    <Image source={require('../images/security-badge.png')} style={{ width: 20, height: 20 }} />
                                    <Text style={{ fontSize: 14, color: '#5f7d95', marginLeft: 10 }}>1 Year Brand Warranty</Text>
                                </View>
                            </View>

                        </Card>

                    </View>
                </ScrollView>

                {/* Product & Collection End */}

            </View>

        )
    }
}

export default ProductView;

const styles = StyleSheet.create({
    container: {
        //   flex: 1,
        //   backgroundColor: '#fff',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        flex: 1,
        marginTop: 22,
    },
});
