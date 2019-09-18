import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import NextArrowButton from "../components/buttons/NextArrowButton";
import GradientButton from "../components/buttons/GradientButton";
import { Fonts } from "../assets/utils/fonts";
import Icon from "react-native-vector-icons/FontAwesome";
import InputField from "../components/form/InputField";
import Notification from '../components/Notification';
import LinearGradient from "react-native-linear-gradient";
const COLORS_GRADIENTS = ["#ff3d78", "#ff7537"];


export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
    }
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
  }
  handleNextButton() {
    alert("Login Button Pressed");
  }
  
  onCreatePress() {
    alert("Create Button Pressed");
  }

  handleCloseNotification() {
    this.setState({ formValid: true });
  }
  render() {
    const { formValid } = this.state;
    const showNotification = formValid ? false : true;
    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.centerWrapper}>
          <Image
            source={require("../assets/img/bestrongLogoColors.png")}
            style={styles.logo2}
          />
          <Text style={styles.slogan}>A new way to socialize</Text>
        </View>

        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeading}>Log In</Text>
            <InputField
              labelText="email"
              labelTextSize={18}
              labelColor={colors.peach}
              borderColor={colors.peach}
              textColor={colors.peach}
              inputType="email"
              customStyle={{ marginBottom: 30 }}
            />

            <InputField
              labelText="password"
              labelTextSize={18}
              labelColor={colors.mainOrange}
              borderColor={colors.mainOrange}
              textColor={colors.mainOrange}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
            />

          <NextArrowButton
            handleNextButton={this.handleNextButton}
          />
              
            <View style={styles.centerWrapper}>
              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>
        <View style={showNotification ? {marginTop: 10} : {}}>
            <Notification
              showNotification={showNotification}
              handleCloseNotification={this.handleCloseNotification}
              type="Error:"
              firstLine="Ooops! Looks like log in info is wrong : /"
              secondLine="Please try again."
             />
          </View>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    fontFamily: Fonts.JosefinSansBold
  },

  scrollViewWrapper: {
    marginTop: 5,
    flex: 1,
    padding: 30,
  },

  scrollView: {
    flex: 1
  },

  centerWrapper: {
    alignItems: "center"
  },

  slogan: {
    fontFamily: Fonts.JosefinSansBold,
    color: colors.peach,
    marginBottom: 15
  },

  welcomeBack: {
    fontFamily: Fonts.JosefinSansBold,
    color: colors.peach,
    marginBottom: 20,
    fontSize: 22
  },

  logo2: {
    height: 60,
    width: 140,
    marginTop: 30,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  loginHeading: {
    fontFamily: Fonts.JosefinSansBold,
    fontSize: 40,
    letterSpacing: -1,
    color: colors.peach,
    marginBottom: 20
  },

  buttonIcon: {
    color: colors.peach,
    position: "relative",
    left: 20,
    top: 2,
    zIndex: 8
  },

  forgot: {
    color: colors.mainOrange
  },

  spacer: {
    marginTop: 15,
    marginBottom: 15
  },

  loginButton: {
    width: "100%",
    padding: 13,
    borderRadius: 10,
    marginBottom: 20
  },

  myWidth: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },

  centerText: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 20
  }
});
