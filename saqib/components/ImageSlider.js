import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, SafeAreaView, Image } from 'react-native';
import ImageSlider from 'react-native-image-slider';

class Slider extends Component {
  state = {
    data: [],
  }

  componentWillMount() {
    fetch('http://digitalcodeeye.com/ethlon/api/get-banners')
      .then(response => response.json())
      .then(response => {
        response.map(value =>
          this.setState(prevState => ({
            data: [...prevState.data, value.image]
          }))
        )
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    const { data } = this.state;
    // console.log('image Slider *************', data);
    const images = data;

    return (
      <SafeAreaView style={styles.containers}>
        {/* <View style={styles.content1}>
          <Text style={styles.contentText}>Content 1</Text>
         </View> */}
        <ImageSlider
          loop
          autoPlayWithInterval={3000}
          images={images}
          onPress={({ index }) => alert(index)}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View
              key={index}
              style={[
                style,
                styles.customSlide,
                { backgroundColor: index % 2 === 0 ? 'yellow' : 'green' },
              ]}
            >
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index && styles.buttonSelected}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'flex-start',
    height: 350
  },
  content1: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content2: {
    width: '100%',
    height: 100,
    marginTop: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: { color: '#fff' },
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: -25,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonSelected: {
    opacity: 1,
    color: 'red',
  },
  customSlide: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200

  },
  customImage: {
    width: "100%",
    height: "100%",
  },
});

export default Slider;









// ************* Code from Medium.com  Running Successfully ****************

// import React, { Component } from 'react'
// import { Animated, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'

// const deviceWidth = Dimensions.get('window').width
// const FIXED_BAR_WIDTH = 280
// const BAR_SPACE = 10

// const images = [
//   'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
//   'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
//   'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
// ]

// export default class ImageSlider extends Component {

//   numItems = images.length
//   itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
//   animVal = new Animated.Value(0)

//   render() {
//     let imageArray = []
//     let barArray = []
//     images.forEach((image, i) => {
//       console.log(image, i)
//       const thisImage = (
//         <Image
//           key={`image${i}`}
//           source={{uri: image}}
//           style={{ width: deviceWidth }}
//         />
//       )
//       imageArray.push(thisImage)

//       const scrollBarVal = this.animVal.interpolate({
//         inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
//         outputRange: [-this.itemWidth, this.itemWidth],
//         extrapolate: 'clamp',
//       })

//       const thisBar = (
//         <View
//           key={`bar${i}`}
//           style={[
//             styles.track,
//             {
//               width: this.itemWidth,
//               marginLeft: i === 0 ? 0 : BAR_SPACE,
//             },
//           ]}
//         >
//           <Animated.View

//             style={[
//               styles.bar,
//               {
//                 width: this.itemWidth,
//                 transform: [
//                   { translateX: scrollBarVal },
//                 ],
//               },
//             ]}
//           />
//         </View>
//       )
//       barArray.push(thisBar)
//     })

//     return (
//       <View
//         style={styles.container}
//         flex={1}
//       >
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           scrollEventThrottle={10}
//           pagingEnabled
//           onScroll={
//             Animated.event(
//               [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
//             )
//           }
//         >

//           {imageArray}

//         </ScrollView>
//         <View
//           style={styles.barContainer}
//         >
//           {barArray}
//         </View>
//       </View>
//     )
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   barContainer: {
//     position: 'absolute',
//     zIndex: 2,
//     top: 40,
//     flexDirection: 'row',
//   },
//   track: {
//     backgroundColor: '#ccc',
//     overflow: 'hidden',
//     height: 2,
//   },
//   bar: {
//     backgroundColor: '#5294d6',
//     height: 2,
//     position: 'absolute',
//     left: 0,
//     top: 0,
//   },
// })

