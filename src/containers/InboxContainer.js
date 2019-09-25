import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class InboxContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'INBOX',
    tabBarIcon: ({ tintColor}) => (
      <Icon
        name="envelope-o"
        size={22}
        color={tintColor}
      />
    ),
  });  

  render() {
    return(
      <View style={styles.wrapper}>
        <Text>Inbox Container</Text>
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