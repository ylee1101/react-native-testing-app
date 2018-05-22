import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { transparentHeaderStyle } from "../styles/navigation";
import colors from "../styles/colors";

export default class ReportScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.beige
  });
  render() {
    return (
      <View>
        <Text>Report Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
