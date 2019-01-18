import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Card, CardItem } from 'native-base';

class Categories extends Component {
    state = {
        data: [],
    }

    componentWillMount() {
        fetch('http://digitalcodeeye.com/ethlon/api/get-parent-categories')
            .then(response => response.json())
            .then(response =>
                this.setState({
                    data: response
                })
            )
            .catch((error) => {
                console.error(error);
            })
    }

    render() {
        const { Heading } = this.props;
        const { data } = this.state;
        // console.log('get-parent-categories********************', data)

        return (
            <View style={{ flexDirection: "column" }}>
                <View >
                    <Text style={{ fontSize: 20, color: 'gray', marginTop: 10, marginLeft: 10 }}>{Heading}</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row' }}>
                        {data.map(value =>
                            <Card key={value.id} style={{ height: 220, width: 140, marginLeft: 5 }}>
                                <CardItem >
                                    <Image source={{ uri: value.image }} style={{ width: "100%", height: 120 }} />
                                </CardItem>
                                <CardItem style={{ flexDirection: 'column' }}>
                                    <Text
                                        onPress={() => navigate("ProductViewFromHome", { value })}
                                    >
                                        {value.name}
                                    </Text>
                                </CardItem>
                            </Card>
                        )}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Categories;
