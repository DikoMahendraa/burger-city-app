import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import {navigate, goBack} from './NavigationService';
import BottomTabNavigator from './BottomTabNavigator';

import {AuthRoutes, AppRoutes, AppDetailRoutes} from './routes';

export {
  AppNavigator,
  AuthNavigator,
  MainNavigator,
  BottomTabNavigator,
  AuthRoutes,
  AppDetailRoutes,
  navigate,
  AppRoutes,
  goBack,
};
