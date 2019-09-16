import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import GradientButton from "../components/buttons/GradientButton";
import { Fonts } from "../assets/utils/fonts";
import Icon from "react-native-vector-icons/FontAwesome";
import InputField from "../components/form/InputField";

import LinearGradient from "react-native-linear-gradient";
const COLORS_GRADIENTS = ["#ff3d78", "#ff7537"];
export default class LogIn extends Component {
  onLoginPress() {
    alert("Login Button Pressed");
  }

  onCreatePress() {
    alert("Create Button Pressed");
  }

  render() {
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

            <GradientButton
              text="Log In"
              textColor={colors.white}
              handleOnPress={this.onLoginPress}
            />   

            <View style={styles.centerWrapper}>
              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spacer}></View>
            <View style={styles.centerWrapper}>
              <Text style={styles.slogan}>Haven't signed up Yet?</Text>
            </View>
            <RoundedButton
              style={styles.createAccountButton}
              text="Create a New Account!"
              textColor={colors.peach}
              background={colors.white}
              fontSize={20}
              icon={
                <Icon name="user-circle" size={20} style={styles.buttonIcon} />
              }
              handleOnPress={this.onCreatePress}
            />
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
    padding: 30,
    fontFamily: Fonts.JosefinSansBold
  },

  scrollViewWrapper: {
    marginTop: 20,
    flex: 1
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
    marginBottom: 20
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
    marginTop: 20,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  loginHeading: {
    fontFamily: Fonts.JosefinSansBold,
    fontSize: 40,
    letterSpacing: -1,
    color: colors.peach,
    marginBottom: 40
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
