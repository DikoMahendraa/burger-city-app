import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CircleUser, Flame, Home, Star} from 'lucide-react-native';
import {Text, TextStyle} from 'react-native';
import {
  FavoriteScreen,
  HomeScreen,
  OurBurgerScreen,
  ProfileScreen,
} from '../screens/Home';
import {AppRoutes} from './routes';
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

const TabItem: React.FC<{focused: boolean; name: string}> = ({
  focused,
  name,
}) => {
  const textStyles = {
    fontWeight: focused ? '600' : '400',
    textTransform: 'capitalize',
    fontSize: 12,
    color: focused ? colors.primary : colors.disabled,
  };
  const replaceUnderScore = name.replaceAll('_', ' ');
  return <Text style={textStyles as TextStyle}>{replaceUnderScore}</Text>;
};

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
            tabBarLabel: ({focused}) =>
              (<TabItem name={item.name} focused={focused} />) as JSX.Element,
            tabBarIcon: ({color}) =>
              (<item.icon color={color} />) as JSX.Element,
          }}
          name={item.name}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
