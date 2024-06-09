import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {TAuthRoutes} from './routes';

type RootStackParamList = {
  [key: string]: TAuthRoutes;
};

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export function navigate(name: TAuthRoutes, params?: any) {
  navigationRef.current?.navigate(name, params);
}
