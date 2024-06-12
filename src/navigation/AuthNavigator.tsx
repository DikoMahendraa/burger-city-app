import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthRoutes} from './routes';
import IntroScreen from '../screens/IntroScreen';
import {
  ForgotPasswordScreen,
  SignInScreen,
  SignUpWithEmailScreen,
  SignUpWithPhoneScreen,
  VerificationOTPScreen,
} from '../screens/Authentication';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={AuthRoutes.INTRO}>
      <Stack.Screen name={AuthRoutes.INTRO} component={IntroScreen} />
      <Stack.Screen name={AuthRoutes.SIGN_IN} component={SignInScreen} />
      <Stack.Screen
        name={AuthRoutes.SIGN_UP_EMAIL}
        component={SignUpWithEmailScreen}
      />
      <Stack.Screen
        name={AuthRoutes.SIGN_UP_PHONE}
        component={SignUpWithPhoneScreen}
      />
      <Stack.Screen
        name={AuthRoutes.VERIFY_OTP}
        component={VerificationOTPScreen}
      />
      <Stack.Screen
        name={AuthRoutes.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
