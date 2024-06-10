import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CircleUser, Flame, Home, Star} from 'lucide-react-native';
import {AppRoutes} from './routes';
import {
  FavoriteScreen,
  HomeScreen,
  OurBurgerScreen,
  ProfileScreen,
} from '../screens/Home';
import {colors} from '../constants';

const LIST_TABS = [
  {
    name: AppRoutes.HOME,
    icon: Home,
    component: HomeScreen,
  },
  {
    name: AppRoutes.OUR_BURGER,
    icon: Flame,
    component: OurBurgerScreen,
  },
  {
    name: AppRoutes.FAVORITES,
    icon: Star,
    component: FavoriteScreen,
  },
  {
    name: AppRoutes.PROFILE,
    icon: CircleUser,
    component: ProfileScreen,
  },
];

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.disabled,
      }}
      initialRouteName={AppRoutes.HOME}>
      {LIST_TABS.map(item => (
        <Tab.Screen
          key={item.name}
          options={{
            tabBarLabel: item.name,
            tabBarLabelStyle: {
              fontWeight: '400',
              fontSize: 12,
              textTransform: 'capitalize',
            },
            tabBarStyle: {
              paddingTop: 4,
              height: 80,
            },
            tabBarIcon: ({color}) =>
              (<item.icon color={color} size={22} />) as JSX.Element,
          }}
          name={item.name}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
