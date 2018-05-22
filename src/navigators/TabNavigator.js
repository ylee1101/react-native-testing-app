import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TabNavigator, TabBarBottom } from "react-navigation";

// TabNavigator screens
import ReportScreen from "../screens/ReportScreen";
import DocumentScreen from "../screens/DocumentScreen";
import SearchScreen from "../screens/SearchScreen";
import SavedScreen from "../screens/SavedScreen";
import colors from "../styles/colors";

const MainTabNavigator = TabNavigator(
  {
    REPORT: { screen: ReportScreen },
    DOCUMENT: { screen: DocumentScreen },
    SEARCH: { screen: SearchScreen },
    SAVED: { screen: SavedScreen }
  },
  {
    initialRouteName: "REPORT"
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontWeight: "600",
        marginBottom: 5
      }
      //   activeTintColor: colors.blue01
      //   activeBackgroundColor: colors.blue01,
      //   inactiveBackgroundColor: colors.blue01
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom"
  }
);

export default MainTabNavigator;
