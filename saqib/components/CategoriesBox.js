import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body } from 'native-base';

class CategoriesBox extends Component {

  render() {
    const { childData, getProductByCategories, goDetail } = this.props;

    return (
      <View>
        {childData.map(value =>
          <Card key={value.id} style={{ flex: 0 }}>
            <CardItem>
              <Body>
                <Image source={{ uri: value.image }} style={{ height: 150, width: '100%', flex: 1 }} resizeMode="center" />
                <TouchableOpacity key={value.id} onPress={
                  () => getProductByCategories(value.id, goDetail, value)
                }>
                  <Text style={{
                    textAlign: "center",
                    textAlignVertical: "center"
                  }}>
                    {value.name}
                  </Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>
        )}
      </View>
    );
  }
}

export default CategoriesBox;