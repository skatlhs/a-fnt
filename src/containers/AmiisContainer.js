import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class AmiisContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'AMIIS',
    tabBarIcon: ({ tintColor}) => (
      <Icon
        name="people"
        size={22}
        color={tintColor}
      />
    ),
  });  

  render() {
    return(
      <View style={styles.wrapper}>
        <Text>Amiis Container</Text>
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