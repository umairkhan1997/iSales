import React from "react";
import { createBottomTabNavigator,createMaterialTopTabNavigator , createAppContainer, createStackNavigator } from "react-navigation";
import SignUp from './SignUp'
import SignIn from './SignIn'
import { Icon } from 'native-base';
import { Image } from 'react-native';

// const SettingsStack = createStackNavigator({
//     Categories: Categories,
//     // Detail: Detail,
//     ProductView:ProductView,
//     ProductViewFromHome: ProductViewFromHome,
//   });
  
  const SignNavigation = createMaterialTopTabNavigator({
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        tabBarLabel: "Sign Up",
        // color:"#1A5CAD",
        //tabBarActiveTintColor
       
      }
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        tabBarLabel: "Sign In",
        // color:"#1A5CAD",
        //tabBarActiveTintColor
        // tabBarIcon: ({ tintColor }) => (
        //   //   <Icon name="ios-home" size={20} style={{color:"black"}}/>
        //   <Image source={require('./images/list.png')} style={{ width: 20, height: 20, marginTop: 5 }} />
        // )
      }
    },
    
  },
    {
      tabBarOptions: {
        activeTintColor: "red",
        inactiveTintColor: '#1A5CAD',
        style:{
            backgroundColor:'white',
        }
        
      },tabStyle: {
        
      },
      style: {
        backgroundColor: '#FFFFFF',
        color:'#1A5CAD',
        marginTop:22,
        
      },
      initialRouteName: 'SignUp'
    });
  
  export default createAppContainer(SignNavigation);