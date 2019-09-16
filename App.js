import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoggedOut from './src/screens/LoggedOut';
import LogIn from './src/screens/LogIn';

type Props = {};
export default class App extends Component{
  render() {
    return (
    <LogIn />
    );
  }
}

