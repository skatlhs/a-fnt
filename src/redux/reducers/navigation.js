import createReducer from '../helpers/createReducer';
import { NavigationActions } from 'react-navigation';
import AppRouteConfigs from '../../navigators/AppRouteConfigs';
import { StatusBar } from 'react-native';

const firstAction = AppRouteConfigs.router.getActionForPathAndParams('LoggedOut');
const initialNavState = AppRouteConfigs.router.getStateForAction(firstAction);

export const nav = (state = initialNavState, action) => {
   let nextState = AppRouteConfigs.router.getStateForAction(action, state);

   if (action.routeName === 'TurnOnNotifications' || action.routeName === 'LoggedIn') {
     StatusBar.setBarStyle('dark-content', true);
   }
   return nextState || state;
};