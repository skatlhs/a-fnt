import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Fonts } from "../assets/utils/fonts";
import colors from "../styles/colors";
import SearchBar from "../components/SearchBar";
import Categories from "../components/explore/Categories";
import Listings from "../components/explore/Listings";
import categoriesList from "../data/categories";
import listings from "../data/listings";
export default class ExploreContainer extends Component {
  
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: "EXPLORE",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="globe" size={22} color={tintColor} />
    )
  });

  renderListings() {
    return listings.map((listing, index) => {
      return (
        <View
          key={`listing-${index}`}
        >
          <Listings
            key={`listing-item-${index}`}
            title={listing.title}
            boldTitle={listing.boldTitle}
            listings={listing.listings}
            showAddToFav={listing.showAddToFav}
          />
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.paddingWrapper}>
          <SearchBar />
        </View>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={styles.paddingWrapper}>
            <Text style={styles.headerExplore}>What do you want to do?</Text>
          </View>
            <Categories categories={categoriesList} />       
          {this.renderListings()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 20
  },
  paddingWrapper: {
    paddingLeft: 15,
    paddingRight: 15
  },

  headerExplore: {
    color: colors.headerGrey,
    fontSize: 22,
    marginBottom: 10,
    fontFamily: Fonts.JosefinSansBold,
    paddingLeft: 4
  },
  
  scrollView: {
    paddingTop: 20,
  },

  scrollViewContent: {
    paddingBottom: 80
  }
});
