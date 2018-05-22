import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { transparentHeaderStyle } from "../styles/navigation";
import colors from "../styles/colors";
import NavBarButton from "../components/buttons/NavBarButton";
import IconHeader from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Ionicons";

export default class ReportScreen extends Component {
  // cannot find a way to edit header
  static navigationOptions = ({ navigation }) => ({
    title: null,
    headerLeft: (
      <NavBarButton
        handleButtonPress={() => navigation.goBack()}
        location="left"
        icon={<IconHeader name="home" color={colors.beige} size={30} />}
      />
    ),
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.beige,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-search" size={22} color={colors.blue01} />
    )
  });

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Text style={styles.header}>Search</Text>
          <Text style={styles.subHeader}>
            Please, follow the instructions thoroughly.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // display: "flex",
    flex: 1,
    backgroundColor: colors.blue01
  },
  scrollview: {
    paddingTop: 20
  },
  scrollViewContent: {
    paddingBottom: 80
  },
  container: {
    padding: 10,
    // marginTop: 20,
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    color: colors.beige,
    fontSize: 30,
    fontWeight: "200",
  },
  subHeader: {
    paddingTop: 20,
    paddingBottom: 20,
    color: colors.beige,
    fontSize: 16,
    fontWeight: "200",
    textAlign: "center"
  }
});
