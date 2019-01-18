import React from "react";
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import { Icon } from 'native-base';
import { Image } from 'react-native';
import Home from './screen/home';
import Categories from './screen/categories';
import Cart from './screen/cart';
// import Detail from './screen/detail';
import Accounts from './screen/accounts';
import ProductView from './screen/ProductView';
import ProductViewFromHome from './screen/ProductViewFromHome';
import MainSign from './SinginUp.js/MainSign'
import CheckoutFirst from './Checkout/CheckoutFIrst'
import PaymentMethod from './Checkout/PaymentMethod'
import TotalPayment from './Checkout/TotalPayment'
import Setting from './AccountPageOption/Setting'
import Policies from "./AccountPageOption/Policies";
import DeliveryInfo from "./AccountPageOption/DeliveryInfo";
import CustomerService from './AccountPageOption/CustomerService'
import Refund from './AccountPageOption/Refund'

const SettingsStack = createStackNavigator({
  Categories: Categories,
  ProductView:ProductView,
  ProductViewFromHome: ProductViewFromHome,
});

const CartStack = createStackNavigator({
  Cart: Cart,
 CheckoutFirst:CheckoutFirst,
 PaymentMethod:PaymentMethod,
 TotalPayment:TotalPayment,
});

const AccountStack= createStackNavigator({
  Account:Accounts,
  MainSign:MainSign,
  Setting:Setting,
  Policies:Policies,
  DeliveryInfo:DeliveryInfo,
  CustomerService:CustomerService,
  Refund:Refund
})

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      // color:"#1A5CAD",
      //tabBarActiveTintColor
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" size={20} style={{ color: "#1A5CAD" }} />
      )
    }
  },
  Categories: {
    screen: SettingsStack,
    navigationOptions: {
      tabBarLabel: "Categories",
      // color:"#1A5CAD",
      //tabBarActiveTintColor
      tabBarIcon: ({ tintColor }) => (
        //   <Icon name="ios-home" size={20} style={{color:"black"}}/>
        <Image source={require('./images/list.png')} style={{ width: 20, height: 20, marginTop: 5 }} />
      )
    }
  },
  Cart: {
    screen: CartStack,
    navigationOptions: {
      tabBarLabel: "Cart",
      // color:"#1A5CAD",
      //tabBarActiveTintColor
      tabBarIcon: ({ tintColor }) => (
        //   <Icon name="ios-home" size={20} style={{color:"black"}}/>
        <Image source={require('./images/shopping-cart.png')} style={{ width: 20, height: 20, marginTop: 5 }} />
      )
    }
  },
  Account: {
    screen: AccountStack,
    navigationOptions: {
      tabBarLabel: "Account",
      // color:"#1A5CAD",
      //tabBarActiveTintColor
      tabBarIcon: ({ tintColor }) => (
        //   <Icon name="ios-home" size={20} style={{color:"black"}}/>
        <Image source={require('./images/profile-man.png')} style={{ width: 20, height: 20, marginTop: 5 }} />
      )
    }
  },
},
  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: '#1A5CAD'
    },
    initialRouteName: 'Account'
  });

export default createAppContainer(AppNavigator);
