import React, { Component } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { transparentHeaderStyle } from "../styles/navigation";
import colors from "../styles/colors";
import NavBarButton from "../components/buttons/NavBarButton";
import IconNav from "react-native-vector-icons/Feather";

export default class ReportScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "report section",
    headerLeft: (
      <NavBarButton
        handleButtonPress={() => navigation.goBack()}
        location="left"
        icon={<IconNav name="home" color={colors.beige} size={30} />}
      />
    ),
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.beige
  });
  static navigationOptions = ({ navigation }) => ({
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.beige
  });
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.container}>
          <ScrollView>
            <View>
              <Text style={styles.h2}>Assured Performance Network</Text>
            </View>
            <View>
              <Text style={styles.terms}>
                You have read and agree to the "Terms of Service and Privacy
                Policy" The use of the Collision Care Mobile Application (the
                "Service") is subject to the Agreements and indicates your
                consent to said Agreement. This summary is not intended to
                replace them in their entirety. It is intended for convenience
                purposes only.
              </Text>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.blue01
  },
  container: {
    padding: 10,
    marginTop: 80,
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  terms: {
    margin: 10,
    color: colors.beige
  },
  h2: {
    margin: 10,
    color: "#97C0B7",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
