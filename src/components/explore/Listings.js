import React, { Component } from "react";
import { PropTypes } from 'prop-types';
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
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Listings extends Component {
  
  renderListings() {
    const { listings } = this.props;
    return listings.map((listing, indes) => {
      return (
        <TouchableOpacity 
          style={styles.card}
        >
          <View style={styles.cardContent}>
            <Image 
              style={styles.image}
              resizeMode="contain"
              source={listing.photo}
            />
            <Text style={styles.listingTitle}>{listing.title}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }
  
  render() {
    const { title } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.seeMoreBtn}>
              <Text style={styles.seeMoreText}>See More   
              </Text>
            </TouchableOpacity>
          </View>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={{paddingLeft: 20}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {this.renderListings()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  
  title: {
    color: colors.headerGrey,
    fontSize: 22,
    marginBottom: 1,
    fontFamily: Fonts.JosefinSansBold,
    paddingLeft: 4
  },
  
  seeMoreBtn: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  }, 
  
  seeMoreText: {
    marginRight: 5,
    color: colors.mediumGrey,
  },
  
  arrowIcon: {
    marginLeft: 10,
    marginTop: 10
  },
  
  scrollView: {
    marginTop: 2,
    marginBottom: 15,
    paddingLeft: -20,  
  },
  
  card: {
    marginLeft: 0,
    marginRight: 15,
    width: 235,
    flexDirection: 'column',
    minHeight: 100,
    marginTop: -10
  },
  
  cardContent: {
    textAlign: 'center'
  },
  
  image: {
    flex: 1,
    height: 200,
    width: 235,
    borderRadius: 3,
    marginBottom: 2
  },
  
  listingTitle: {
    marginTop: -10,
  },
  
});
