import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { Fonts } from "../../assets/utils/fonts";
import colors from "../../styles/colors";

export default class Categories extends Component {
  constructor(props) {
    super(props);
  }

  get Categories() {
    const { categories } = this.props;
    const cards = [];
    return categories.map((category, index) => {
      return (
          <TouchableOpacity style={styles.card}>
            <Image source={category.photo} style={styles.image} />
            <Text style={styles.catName}>{category.catName}</Text>
          </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.wrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {this.Categories}
        {this.Categories}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20
  },
  
  card: {
    display: "flex",
    flexDirection: "column",
    width: 180,
    height: 180,
    marginLeft: 10,
  },

  cardWrapper: {
    marginLeft: 10,
    marginRight: 10
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 8
  },

  catName: {
    textAlign: "center",
    fontFamily: Fonts.JosefinSansBold,
    color: colors.headerGrey
  }
});
