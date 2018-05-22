import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import FirstScreen from "./src/screens/FirstScreen";
import TermsScreen from "./src/screens/TermsScreen";
import TabNavigator from "./src/navigators/TabNavigator"

console.disableYellowBox = true;

const RootStack = createStackNavigator(
  {
    FirstScreen: { screen: FirstScreen },
    TabNavigator: { screen: TabNavigator },
    TermsScreen: { screen: TermsScreen }
  },
  {
    initialRouteName: "FirstScreen"
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
