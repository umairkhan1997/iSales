import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Card, CardItem } from 'native-base';

class ProductCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      image: "",
      id: "",
      data: []
    }

  }

  componentWillMount() {
  fetch('http://digitalcodeeye.com/ethlon/api/get-products-by-category/9')
      .then(res => res.json())
      .then(res =>
        this.setState({
          data: res
        })
      )
      .catch((error) => {
        console.error(error);
      })
    // .then(res => console.log(res))
  }

  render() {
    const { Heading, navigate } = this.props;
    const { data } = this.state;
    // const { navigate } = this.props.navigation;
    // console.log("hamara state data ProductCard.js", data);

    return (
      <View style={{ flexDirection: "column" }}>
        <View >
          <Text style={{ fontSize: 20, color: 'gray', marginTop: 10, marginLeft: 10 }}>{Heading}</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row' }}>
            {data.map((val, ind) => {
              return (
                <Card key={ind} style={{ height: 220, width: 140, marginLeft: 5 }}>
                  <CardItem >
                    <Image source={{ uri: val.image }} style={{ width: "100%", height: 120 }} />
                  </CardItem>
                  <CardItem style={{ flexDirection: 'column' }}>
                    <Text onPress={() => navigate("ProductViewFromHome", { val })}>{val.name}</Text>
                    {/* <Text>Food Company</Text> */}
                  </CardItem>
                </Card>
              )
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ProductCard;

