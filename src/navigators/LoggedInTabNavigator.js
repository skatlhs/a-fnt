import React from "react";
import PropTypes from "prop-types";
import { createAppContainer } from "react-navigation";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import ExploreContainer from "../containers/ExploreContainer";
import InboxContainer from "../containers/InboxContainer";
import ProfileContainer from "../containers/ProfileContainer";
import SavedContainer from "../containers/SavedContainer";
import AmiisContainer from "../containers/AmiisContainer";
import colors from "../styles/colors";

const LoggedInTabNavigator = createBottomTabNavigator({
  
  Explore: {
    screen: ExploreContainer
  },
  Amiis: {
    screen: AmiisContainer
  },
  Profile: {
    screen: ProfileContainer
  },
  Inbox: {
    screen: InboxContainer
  },
  Saved: {
    screen: SavedContainer
  },
},
  {
  tabBarOptions: {
    labelStyle:{
    marginBottom: 5,
    },
    activeTintColor: colors.peach
  },
},
  );

const App = createAppContainer(LoggedInTabNavigator);
export default App;