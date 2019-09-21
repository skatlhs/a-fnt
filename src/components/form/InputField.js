import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing
} from "react-native";

import { PropTypes } from "prop-types";
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/AntDesign";
import { Fonts } from "../../assets/utils/fonts";

export default class Inputfield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput:
        props.inputType === "text" || props.inputType === "email"
          ? false
          : true,
      scaleCheckmarkValue: new Animated.Value(0)
    };
    this.toggleShowPass = this.toggleShowPass.bind(this);
  }

  scaleCheckmark(value) {
    Animated.timing(this.state.scaleCheckmarkValue, {
      toValue: value,
      duration: 400,
      easing: Easing.easeOutBack
    }).start();
  }

  toggleShowPass() {
    this.setState({ secureInput: !this.state.secureInput });
  }

  render() {
    const {
      labelText,
      labelTextSize,
      labelColor,
      borderColor,
      textColor,
      inputType,
      customStyle,
      onChangeText,
      showCheckmark,
      autoFocus,
      autoCapitalize,
      checkColor
    } = this.props;
    const { secureInput, scaleCheckmarkValue } = this.state;
    const fontSize = labelTextSize || 18;
    const color = labelColor || colors.peach;
    const borderBottomColor = borderColor;
    const inputColor = textColor || color.mainPurple;
    const keyboardType = inputType === "email" ? "email-address" : "default";

    const iconScale = scaleCheckmarkValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0.01, 1.6, 1]
    });

    const scaleValue = showCheckmark ? 1 : 0;
    this.scaleCheckmark(scaleValue);

    return (
      <View style={[{ customStyle }, styles.wrapper]}>
        <Text style={[{ fontSize, color }, styles.label]}>{labelText} </Text>
        {inputType === "password" ? (
          <TouchableOpacity
            style={styles.showButton}
            onPress={this.toggleShowPass}
          >
            <Text style={styles.showHide}>{secureInput ? "Show" : "Hide"}</Text>
          </TouchableOpacity>
        ) : null}
        <Animated.View
          style={[{ transform: [{ scale: iconScale }] }, styles.checkWrapper]}
        >
          <Icon color={checkColor} name="check" size={30} />
        </Animated.View>

        <View style={[{ borderColor }, styles.borderBottom]}>
          <TextInput
            style={[{ color: inputColor }, styles.inputField]}
            secureTextEntry={secureInput}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            autoFocus={autoFocus}
            autoCapitalize={autoCapitalize}
            autoCorrect={false}
          />
        </View>
      </View>
    );
  }
}

Inputfield.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelTextSize: PropTypes.number,
  labelColor: PropTypes.string,
  labelPadding: PropTypes.number,
  inputColor: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
  onChangeText: PropTypes.func,
  showCheckmark: PropTypes.bool.isRequired,
  autoFOcus: PropTypes.bool,
  autoCapitalize: PropTypes.bool
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    marginBottom: 40
  },

  label: {
    marginBottom: 1,
    fontFamily: Fonts.JosefinSansBold
  },

  borderBottom: {
    borderBottomWidth: 1,
    marginTop: 3
  },

  inputField: {
    fontSize: 18
  },

  showButton: {
    position: "absolute",
    right: 20,
    top: 5
  },

  showHide: {
    color: colors.mainOrange,
    fontFamily: Fonts.JosefinSansBold
  },

  checkWrapper: {
    position: "absolute",
    right: 0,
    top: 45
  }
});
