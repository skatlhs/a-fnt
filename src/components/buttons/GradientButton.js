import React, { Component } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import propTypes from "prop-types";
import colors from "../../styles/colors";

import LinearGradient from "react-native-linear-gradient";
const COLORS_GRADIENTS = ["#ff3d78", "#ff7537"];

export default class GradientButton extends Component {
  render() {
    const {
      text,
      textColor,
      background,
      icon,
      img,
      handleOnPress
    } = this.props;
    const backgroundColor = background || "transparent";
    const color = textColor || colors.black;

    return (
      <TouchableOpacity style={styles.myWidth} onPress={handleOnPress}>
        <LinearGradient
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1.0, y: 1.0 }}
          colors={COLORS_GRADIENTS}
          style={styles.loginButton}
        >
          <View style={styles.buttonTextWrapper2}>
            {img}
            <View style={styles.buttonTextWrapper}>
              {icon}
              <Text style={[{ color }, styles.buttonText]}>{text}</Text>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

GradientButton.propTypes = {
  text: propTypes.string.isRequired,
  textColor: propTypes.string,
  background: propTypes.string,
  icon: propTypes.object,
  handleOnPress: propTypes.func
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },

  buttonTextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },

  buttonTextWrapper2: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },

  buttonText: {
    fontSize: 18,
    width: "100%",
    textAlign: "center",
    fontWeight: "bold"
  },
  
  loginButton: {
    width: "100%",
    padding: 14,
    borderRadius: 10,
    marginBottom: 20,
  },

  myWidth: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  
});
