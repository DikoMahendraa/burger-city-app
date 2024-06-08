import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignupScreen from '../screens/SignUpScreen';
import {AuthRoutes} from './routes';
import IntroScreen from '../screens/IntroScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={AuthRoutes.INTRO}>
      <Stack.Screen name={AuthRoutes.INTRO} component={IntroScreen} />
      <Stack.Screen name={AuthRoutes.SIGNIN} component={SignInScreen} />
      <Stack.Screen name={AuthRoutes.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
