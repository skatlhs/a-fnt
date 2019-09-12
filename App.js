import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoggedOut from './src/screens/LoggedOut';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    <LoggedOut />
    );
  }
}

