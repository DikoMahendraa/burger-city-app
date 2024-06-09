import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ProfileScreen} from '../screens';
import {AppRoutes} from './routes';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={AppRoutes.HOME}>
      <Stack.Screen name={AppRoutes.HOME} component={HomeScreen} />
      <Stack.Screen name={AppRoutes.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
