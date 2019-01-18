import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

class CategoriesSideBar extends Component {

  render() {
    const { data, getChildCategories } = this.props;

    return (
      <View>
        {data.map(value =>
          <TouchableOpacity key={value.id} onPress={
            () => getChildCategories(value.id)
          }>
            <View style={{ flex: 1, marginLeft: 5, marginRight: 5, marginTop: 5 }}>
              <Image
                style={{ width: '100%', height: 100 }}
                source={{ uri: value.image }}
                resizeMode="center"
              />
              <Text
                style={{
                  textAlign: "center",
                }}
              >
                {value.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default CategoriesSideBar;

