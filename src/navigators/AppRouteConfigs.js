import {
  createStackNavigator,
} from 'react-navigation-stack';
import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';
import TurnOnNotifications from '../screens/TurnOnNotifications';

const AppRouteConfigs = createStackNavigator({
  LoggedOut: { screen: LoggedOut },

  LogIn: { screen: LogIn },
  ForgotPassword: { screen: ForgotPassword },
  TurnOnNotifications: { screen: TurnOnNotifications },
});

export default AppRouteConfigs;