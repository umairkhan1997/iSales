import React, { Component } from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import { Container, Root, Card, CardItem, Content, Body, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";

import CategoriesBox from '../components/CategoriesBox';
import CategoriesSideBar from '../components/CategoriesSideBar';

class Categories extends Component {
  static navigationOptions = {
    header: null,
};
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      childData: [],
      productByCategory: [],
      childCategoriesSideBar: false,
      productByCategoryBox: false
    };
  }

  componentDidMount() {
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

  getChildCategories = (value) => {

    fetch(`http://digitalcodeeye.com/ethlon/api/get-child-categories/${value}`)
      .then(response => response.json())
      .then(response =>
        this.setState({
          childData: response
        })
      )
      .catch((error) => {
        console.error(error);
      })
  }

  getProductByCategories = (value, goDetail, val) => {

    goDetail && this.props.navigation.navigate("ProductViewFromHome", { val })

    fetch(`http://digitalcodeeye.com/ethlon/api/get-products-by-category/${value}`)
      .then(response => response.json())
      .then(response =>
        this.setState({
          productByCategory: response,
          childCategoriesSideBar: true,
          productByCategoryBox: true,
        })
      )
      .catch((error) => {
        console.error(error);
      })
  }


  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { data, childData, productByCategory, childCategoriesSideBar, productByCategoryBox } = this.state;
    // console.log('get-parent-categories from Categories Tab********************', data)
    // console.log('get-child-categories from Categories Tab********************', childData)

    if (this.state.loading) {
     
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      
      <Root>
         <Header style={{ backgroundColor: '#1A5CAD',marginTop:22 }}>
      <Body style={{ flex: 1, justifyContent: 'center', flexDirection: 'row',}}>
          <View >
              <Text style={{ fontSize: 22, color: 'white', fontWeight: '500' }}>Categories</Text>
          </View>
      </Body>
  </Header>
        <Container>
          <Grid>
            <Col style={{ height: '100%', width: '20%' }}>
              <ScrollView>

                {
                  childCategoriesSideBar
                    ?
                    <CategoriesSideBar data={childData} getProductByCategories={this.getProductByCategories}  />
                    :
                    <CategoriesSideBar data={data} getChildCategories={this.getChildCategories}  />

                }

              </ScrollView>
            </Col>

            <Col style={{ height: '100%' }}>
              <ScrollView>

                {
                  productByCategoryBox
                    ?
                    <CategoriesBox childData={productByCategory} getProductByCategories={this.getProductByCategories} goDetail={true} />
                    :
                    <CategoriesBox childData={childData} getProductByCategories={this.getProductByCategories} goDetail={false} />
                }

              </ScrollView>
            </Col>
          </Grid>
        </Container>
      </Root>
    )
  }
}

export default Categories;