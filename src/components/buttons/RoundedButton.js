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

export default class RoundedButton extends Component {
  render() {
    const { text, textColor, background, icon, img, handleOnPress } = this.props;
    const backgroundColor = background || "transparent";
    const color = textColor || colors.black;

    return (
      <TouchableOpacity
        style={[{ backgroundColor }, styles.wrapper]}
        onPress={handleOnPress}
      >
        <View style={styles.buttonTextWrapper2}>
          {img}
          <View style={styles.buttonTextWrapper}>
            {icon}
            <Text style={[{ color }, styles.buttonText]}>{text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

RoundedButton.propTypes = {
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
    //    borderWidth: 1,
    //    borderColor: colors.white,
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
    fontSize: 17,
    width: "100%",
    textAlign: "center",
    fontWeight: "bold"
  }
});
