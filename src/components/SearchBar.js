import React, { Component } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import { Fonts } from "../assets/utils/fonts";
import Icon from "react-native-vector-icons/Ionicons";
import InputField from "../components/form/InputField";
import { transparentHeaderStyle } from "../styles/navigation";

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.searchContainer}>
          <Icon
            name="ios-search"
            size={22}
            color={colors.peach}
            style={styles.topIcon}
          />
          <Text style={styles.searchText}>Search for something</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 99,
    paddingBottom: 15,
    borderWidth: 1,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.lightGrey
  },

  searchContainer: {
    display: "flex",
    borderRadius: 25,
    borderWidth: 0,
    backgroundColor: colors.lightGrey,
    height: 50,
    marginTop: 25,
    flexDirection: "row",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
  },

  topIcon: {
    flexDirection: "row",
    paddingRight: 10
  },

  mainSearch: {},

  searchText: {
    color: "#b5b5b5",
    fontSize: 14
  }
});
