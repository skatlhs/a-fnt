import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import { PropTypes } from "prop-types";
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { Fonts } from "../../assets/utils/fonts";

export default class Inputfield extends Component {
  render() {
    const { labelText, labelTextSize, labelColor, borderColor, textColor, inputType, customStyle } = this.props;
    const fontSize = labelTextSize || 18;
    const color = labelColor || colors.peach;
    const borderBottomColor = borderColor;
    const inputColor = textColor || color.mainPurple;
    
    return (
      <View style={[{customStyle}, styles.wrapper]}>
        <Text style={[{ fontSize, color }, styles.label]}>{labelText} </Text>

        <View style={[{ borderColor }, styles.borderBottom]}>
          <TextInput 
            autoCorrect={false} 
            style={[{color: inputColor}, styles.inputField]}
            secureTextEntry={inputType === 'password'}
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
  customStyle: PropTypes.object
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
    marginTop: 3,
  },
  
  inputField: {
    fontSize: 18
  }
});
