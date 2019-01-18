
import React, { Component } from 'react';
import { View, Image,Text } from 'react-native';
import {Container, Content, InputGroup, Input, Icon,Item,Card,CardItem} from 'native-base';
class JustForFun extends Component {

    render() {
        const { Heading } = this.props;
        return (
<View>
<View >
 <Text style={{fontSize:20,color:'gray',marginTop:10,marginLeft:10}}>{Heading}</Text>
</View>
{/* <ScrollView > */}
<View style={{flexDirection:'column'}}>
<View style={{flexDirection:'row'}}>
<Card style={{height:290,width:200,marginLeft:5}}>
<CardItem >
 <Image source={require('../images/shoes.jpg')} style={{width:"100%",height:160}}/>
</CardItem>
<CardItem >
 <Text style={{fontSize:12}}>Men's Driving Shoes Penny Loafers Casual </Text>
 </CardItem >
 <CardItem >
   <View style={{flexDirection:'row'}}>
 <Text style={{color:"#f57224"}}>Rs </Text>
 <Text style={{color:"#f57224"}}>8646</Text>
 </View>
 </CardItem>
</Card>
<Card style={{height:290,width:200,marginLeft:5}}>
<CardItem >
 <Image source={require('../images/shoes.jpg')} style={{width:"100%",height:160}}/>
</CardItem>
<CardItem >
 <Text style={{fontSize:12}}>Men's Driving Shoes Penny Loafers Casual </Text>
 </CardItem >
 <CardItem >
   <View style={{flexDirection:'row'}}>
 <Text style={{color:"#f57224"}}>Rs </Text>
 <Text style={{color:"#f57224"}}>8646</Text>
 </View>
 </CardItem>
</Card>
</View>
<View style={{flexDirection:'row'}}>
<Card style={{height:290,width:200,marginLeft:5}}>
<CardItem >
 <Image source={require('../images/shoes.jpg')} style={{width:"100%",height:160}}/>
</CardItem>
<CardItem >
 <Text style={{fontSize:12}}>Men's Driving Shoes Penny Loafers Casual </Text>
 </CardItem >
 <CardItem >
   <View style={{flexDirection:'row'}}>
 <Text style={{color:"#f57224"}}>Rs </Text>
 <Text style={{color:"#f57224"}}>8646</Text>
 </View>
 </CardItem>
</Card>
<Card style={{height:290,width:200,marginLeft:5}}>
<CardItem >
 <Image source={require('../images/shoes.jpg')} style={{width:"100%",height:160}}/>
</CardItem>
<CardItem >
 <Text style={{fontSize:12}}>Men's Driving Shoes Penny Loafers Casual </Text>
 </CardItem >
 <CardItem >
   <View style={{flexDirection:'row'}}>
 <Text style={{color:"#f57224"}}>Rs </Text>
 <Text style={{color:"#f57224"}}>8646</Text>
 </View>
 </CardItem>
</Card>
</View>
</View>
</View> );
    }
}

export default JustForFun;
