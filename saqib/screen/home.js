import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import ImageSlider from '../components/ImageSlider';
import SearchBox from '../components/SearchBox';
import ProductCard from '../components/ProductCard';
import JustForFun from '../components/justForFun';
import Categories from '../components/CategoriesHome';

export default class Home extends React.Component {
constructor(props){
  super(props)
  this.state={
    name: "",
    image:"", 
    id:"",
    data:[]
  }

}
componentWillMount(){
  fetch('http://digitalcodeeye.com/ethlon/api/get-products-by-category/9')
  .then(res => res.json())
  .then(res => 
    this.setState({
      data:res
    })
    )
    .catch((error) => {
      console.error(error);
    })
    // .then(res => console.log(res))
}

  render() {
    const { navigate } = this.props.navigation;

    // console.log("hamara state data",this.state.data);

    return (
      <View style={styles.container}>

        {/* Image Slider */}

        <View style={{ flex: 1.5 }} >
          <ImageSlider />
        </View>

        {/* Image Slider End */}


        {/* Search Box */}

        <View style={{ flex: 0.6 }} >
          <SearchBox />
        </View>

        {/* Search Box End */}


        {/* Product & Collection */}

        <View style={{ flex: 2.9 }} >
          <ScrollView>

            {/* ///    Product    // */}

            <ProductCard Heading="Product" navigate={navigate} />

            {/* ///    Product --end   // */}


            {/* ///    Categories -- start   // */}

            <Categories Heading="Categories" />

            {/* ///    Categories -- end   // */}


            {/* ///    JustForFun -- start   // */}

            <JustForFun Heading="Just For Fun" />

            {/* ///    JustForFun -- end   // */}

          </ScrollView>
        </View>

        {/* Product & Collection End */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
  },
});
