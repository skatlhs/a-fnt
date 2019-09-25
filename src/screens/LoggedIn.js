import React, { Component } from 'react';
import { transparentHeaderStyle } from '../styles/navigation';
import LoggedInTabNavigator from '../navigators/LoggedInTabNavigator';
import colors from "../styles/colors";

export default class LoggedIn extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: true,
    headerLeft: null,
    gesturesEnabled: false,
  });  

  render() {
  	return (
  	  <LoggedInTabNavigator />
  	);
  }
}