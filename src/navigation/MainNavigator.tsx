import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {AppDetailRoutes, AppRoutes} from './routes';
import BurgerMenuScreen from '../screens/Home/BurgerMenuScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppRoutes.HOME} component={BottomTabNavigator} />
      <Stack.Screen
        name={AppDetailRoutes.DETAIL_BURGER_MENU}
        component={BurgerMenuScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
