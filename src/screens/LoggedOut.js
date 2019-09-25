import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import { transparentHeaderStyle } from "../styles/navigation";
import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import NavBarButton from "../components/buttons/NavBarButton";
import { Fonts } from "../assets/utils/fonts";
import Icon from "react-native-vector-icons/FontAwesome";

export default class LoggedOut extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <NavBarButton
        handleButtonPress={() => navigation.navigate("LogIn")}
        location="right"
        color={colors.white}
        text="Log In"
      />
    ),
    headerTransparent: true,
    headerTintColor: colors.white
  });

  onFacebookPress() {
    alert("Facebook button pressed");
  }

  onCreatePress() {
    alert("Create button Pressed!");
  }

  onPressMoreOptions() {
    alert("more options pressed");
  }

  onTermsPress() {
    alert("Terms pressed");
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/img/socialBg5.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.wrapper}>
          <View style={styles.welcomeWrapper}>
            <View style={styles.centerWrapper}>
              <Image
                style={styles.logo2}
                source={require("../assets/img/bestrongLogo.png")}
              />
              <Text style={styles.slogan}>A new way to socialize</Text>
            </View>

            <RoundedButton
              style={styles.createAccountButton}
              text="Create a New Account!"
              textColor={colors.peach}
              background={colors.white}
              fontSize={200}
              icon={
                <Icon name="heart-o" size={20} style={styles.heartButtonIcon} />
              }
              handleOnPress={this.onCreatePress}
            />

            <RoundedButton
              text="Continue with Facebook"
              textColor={colors.white}
              background={"rgba(255, 255, 255, 0.28)"}
              icon={
                <Icon
                  name="facebook-f"
                  size={20}
                  style={styles.facebookButtonIcon}
                />
              }
              handleOnPress={this.onFacebookPress}
            />

            <TouchableOpacity
              style={styles.moreOptions}
              onPress={this.onPressMoreOptions}
            >
              <Text style={styles.moreOptionsText}>About the app</Text>
            </TouchableOpacity>

            <View style={styles.termWrapper}>
              <Text style={styles.bottomTerms}>
                By creating an account, you agree to, and will follow the terms
                and conditions listed below.
              </Text>
            </View>

            <TouchableOpacity onPress={this.onTermsPress}>
              <Text style={styles.termLink}>View Terms &amp; Conditions </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex"
    //backgroundColor: colors.mainPurple,
  },

  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 30,
    fontFamily: Fonts.JosefinSansBold
  },

  centerWrapper: {
    alignItems: "center"
  },

  logo: {
    height: 50,
    marginTop: 50,
    marginBottom: 20
  },

  logo2: {
    height: 60,
    width: 140,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  slogan: {
    fontFamily: Fonts.JosefinSansBold,
    color: colors.white,
    marginBottom: 135
  },

  logo2: {
    height: 60,
    width: 140,
    marginTop: 30,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  welcomeText: {
    color: colors.white,
    fontSize: 25,
    fontWeight: "100",
    marginTop: 70,
    marginBottom: 20
  },

  facebookButtonIcon: {
    color: colors.white,
    position: "relative",
    left: 20,
    top: 2,
    zIndex: 8
  },

  heartButtonIcon: {
    color: colors.peach,
    position: "relative",
    left: 20,
    top: 2,
    zIndex: 8
  },

  moreOptions: {
    marginTop: 90
  },

  moreOptionsText: {
    color: colors.white,
    fontWeight: "bold"
  },

  bottomTerms: {
    color: colors.white,
    fontWeight: "bold"
  },
  flexWrapper: {
    flexDirection: "row"
  },
  termWrapper: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15
  },

  termLink: {
    color: colors.white
  }
});
