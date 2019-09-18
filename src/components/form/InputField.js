import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import { PropTypes } from "prop-types";
import colors from "../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { Fonts } from "../../assets/utils/fonts";

export default class Inputfield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: props.inputType === 'text' || props.inputType === 'email' ? false : true, 
    };
    this.toggleShowPass = this.toggleShowPass.bind(this);
  }
  
  toggleShowPass() {
    this.setState({ secureInput:!this.state.secureInput });
  }
  
  render() {
    const { labelText, labelTextSize, labelColor, borderColor, textColor, inputType, customStyle, onChangeText } = this.props;
    const { secureInput } = this.state;
    const fontSize = labelTextSize || 18;
    const color = labelColor || colors.peach;
    const borderBottomColor = borderColor;
    const inputColor = textColor || color.mainPurple;
    
    return (
      <View style={[{customStyle}, styles.wrapper]}>
        <Text style={[{ fontSize, color }, styles.label]}>{labelText} </Text>
        {inputType === 'password' ?
          <TouchableOpacity 
            style={styles.showButton}
            onPress={this.toggleShowPass}
          >
            <Text style={styles.showHide}>{secureInput ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
          : null }
        <View style={[{ borderColor }, styles.borderBottom]}>
          <TextInput 
            autoCorrect={false} 
            style={[{color: inputColor}, styles.inputField]}
            secureTextEntry={secureInput}
            onChangeText={onChangeText}
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
  onChangeText: PropTypes.func
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
  },
  
  showButton: {
    position: 'absolute',
    right: 20,
    top: 5
  },
  
  showHide: {
    color: colors.mainOrange,
    fontFamily: Fonts.JosefinSansBold
  },
  
});
