import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Input, Item } from 'native-base';

class SearchBox extends Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{
                    borderWidth: 2, borderRadius: 10, width: '95%', height: 45,
                    marginLeft: '2%', borderColor: '#1A5CAD', marginTop: 10, backgroundColor: 'rgba(255,255,255,0.5)'
                }}>
                    <Item style={{ borderColor: 'transparent' }}>
                        <Image source={require('../images/search.png')} style={{
                            width: 20, height: 20,
                            marginHorizontal: 12, marginBottom: 12,
                        }} />
                        <Input placeholder='Search'
                            style={{ color: '#1A5CAD', marginBottom: 10, padding: 10 }} />
                    </Item>
                </View>
            </View>
        );
    }
}

export default SearchBox;

