import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import {createStackNavigator} from '@react-navigation/stack';

import {AppDetailRoutes, AppRoutes} from './routes';
import {
  BurgerMealsScreen,
  BurgerMenuScreen,
  ViewCartScreen,
} from '../screens/Home';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={AppRoutes.BOTTOM_NAVIGATION}
        component={BottomTabNavigator}
      />
      <Stack.Screen
        name={AppDetailRoutes.DETAIL_BURGER_MENU}
        component={BurgerMenuScreen}
      />
      <Stack.Screen
        name={AppDetailRoutes.DETAIL_BURGER_MEALS}
        component={BurgerMealsScreen}
      />
      <Stack.Screen
        name={AppDetailRoutes.DETAIL_CART}
        component={ViewCartScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
