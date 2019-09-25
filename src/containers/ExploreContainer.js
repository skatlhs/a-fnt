import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ExploreContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'EXPLORE',
    tabBarIcon: ({ tintColor}) => (
      <Icon
        name="globe"
        size={22}
        color={tintColor}
      />
    ),
  });  

  render() {
    return(
      <View style={styles.wrapper}>
        <Text>Explore Container</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 50
  },
});