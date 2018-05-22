import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import iPhoneSize from "../helpers/utils";
// import { NavigationActions } from "react-navigation";
import TermsScreen from "./TermsScreen";
import { transparentHeaderStyle } from "../styles/navigation";

const size = iPhoneSize();
let termsTextSize = 14;
let headingTextSize = 29;

if (size === "small") {
  termsTextSize = 13;
  headingTextSize = 25;
}

// const navigateToTabsAction = NavigationActions.navigate({
//   routeName: "Terms"
// });

export default class FirstScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.beige
  });

  constructor(props) {
    super(props);

    this.withoutLoginPress = this.withoutLoginPress.bind(this);
    this.termsPress = this.termsPress.bind(this);
  }

  termsPress() {
    const { navigate } = this.props.navigation;
    navigate("TermsScreen");
  }

    withoutLoginPress() {
      const { navigate } = this.props.navigation;
      navigate("ReportScreen");
    }

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image source={require("../img/ABL-logo2.png")} style={styles.logo} />
          <Text style={styles.welcomeText}>Welcome to Collision Care</Text>
          <RoundedButton
            text="Start Collision Care"
            textColor={colors.blue01}
            background={colors.beige}
            icon={
              <Icon
                name="sign-in"
                size={20}
                style={styles.withoutLoginButtonIcon}
              />
            }
            handleOnPress={this.withoutLoginPress}
          />

          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
              By tapping Continue without Login, Create{" "}
            </Text>
            <Text style={styles.termsText}>
              Account, or More options, I agree to Assured
            </Text>
            <Text style={styles.termsText}>Performance Network's </Text>
            <TouchableHighlight onPress={this.termsPress} style={styles.linkButton}>
              <Text style={styles.termsText}>Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>.</Text>
          </View>

          <View style={styles.version}>
            <Text style={styles.versionText}>
              By Assured Performance Network
            </Text>
            <Text style={styles.versionText}>Version 1.0.0</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.blue01
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 20
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 40,
    marginLeft: 110,
    padding: 10
  },
  welcomeText: {
    fontSize: headingTextSize,
    color: colors.beige,
    fontWeight: "300",
    marginBottom: 40
  },
  withoutLoginButtonIcon: {
    color: colors.blue01,
    position: "relative",
    left: 20,
    zIndex: 8
  },
  version: {
    marginTop: 50
  },
  versionText: {
    color: colors.beige,
    fontSize: 13,
    textAlign: "center"
  },
  termsAndConditions: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 20
  },
  termsText: {
    color: colors.beige,
    fontSize: termsTextSize,
    fontWeight: "600"
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.beige
  }
});
