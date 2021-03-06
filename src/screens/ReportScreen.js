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
import Icon from "react-native-vector-icons/FontAwesome";

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
      <Icon name="pencil-square-o" size={22} color={colors.blue01} />
    )
  });

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Text style={styles.header}>Report</Text>
          <Text style={styles.subHeader}>
            Please, follow the instructions thoroughly.
          </Text>
          <Text style={styles.subHeader}>
            Need Date Picker for users to choose date.
          </Text>
          <Text style={styles.subHeader}>
            Take Photo Section, it needs to be expanded like a tab to show the
            list of photos that are need to be taken.
          </Text>
          <Text style={styles.subHeader}>
            Other Driver's Info, it needs to be expanded like a tab to show the
            list.
          </Text>
          <Text style={styles.subHeader}>
            Witness Info, it needs to be expanded like a tab to show the list.
          </Text>
          <Text style={styles.subHeader}>
            What happened Info, it needs to be expanded like a tab to show the
            list.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
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
    fontWeight: "200"
  },
  subHeader: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    color: colors.beige,
    fontSize: 16,
    fontWeight: "200"
  }
});
