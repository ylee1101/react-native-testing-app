import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import FirstScreen from "./src/screens/FirstScreen";
import ReportScreen from "./src/screens/ReportScreen";
import TermsScreen from "./src/screens/TermsScreen";

console.disableYellowBox = true;

const RootStack = createStackNavigator(
  {
    FirstScreen: { screen: FirstScreen },
    ReportScreen: { screen: ReportScreen },
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
