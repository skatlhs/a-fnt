import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import { PropTypes } from "prop-types";
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { Fonts } from "../../assets/utils/fonts";
import LinearGradient from "react-native-linear-gradient";
const COLORS_GRADIENTS = ["#ff3d78", "#ff7537"];


export default class NextArrowButton extends Component {
  render() {
  	const { disabled, handleNextButton } = this.props;
  	const opacityStyle = disabled ? 0.6 : 1;
    return (
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[{opacity: opacityStyle}, styles.button]}
          onPress={handleNextButton}
          //disabled={disabled}
        >
        <LinearGradient
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1.0, y: 1.0 }}
          colors={COLORS_GRADIENTS}
          style={styles.loginButton}
        >
          <View style={styles.buttonTextWrapper2}>
            <View style={styles.buttonTextWrapper}>
              <Text style={styles.buttonText}>Log In</Text>
            </View>
          </View>
        </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func,
};

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'flex-end',
    bottom: 1,
    paddingTop: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  icon: {
    marginRight: -2,
    marginTop: -2,
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
    fontWeight: "bold",
    color: colors.white,
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