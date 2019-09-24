import React, { Component } from 'react';
import { StatusBar, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { Root, configureStore} from './src/navigators/AppNavigator';

console.disableYellowBox = true;

class App extends Component{
  render() {
    return (
      <Provider store={configureStore({})}>
        <Root />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);

export default App;