import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CircleUser, Utensils, Home, NotebookText} from 'lucide-react-native';
import {Text, TextStyle} from 'react-native';
import {
  FavoriteScreen,
  HomeScreen,
  OurBurgerScreen,
  ProfileScreen,
} from '../screens/Home';
import {AppRoutes} from './routes';
import {colors} from '../constants';
import {scale} from '../utils';

const LIST_TABS = [
  {
    name: AppRoutes.HOME,
    icon: Home,
    component: HomeScreen,
  },
  {
    name: AppRoutes.OUR_BURGER,
    icon: Utensils,
    component: OurBurgerScreen,
  },
  {
    name: AppRoutes.FAVORITES,
    icon: NotebookText,
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
  const textStyles: TextStyle = {
    fontWeight: focused ? '600' : '400',
    textTransform: 'capitalize',
    fontSize: scale(12),
    textAlign: 'center',
    color: focused ? colors.primary : colors.disabled,
  };
  const replaceUnderScore = name.replaceAll('_', ' ');
  return <Text style={textStyles}>{replaceUnderScore}</Text>;
};

const BottomTabNavigator: React.FC = () => {
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
            tabBarIcon: ({color, focused}) =>
              (
                <item.icon
                  strokeWidth={focused ? 3 : 2}
                  color={color}
                  size={scale(20)}
                />
              ) as JSX.Element,
            tabBarStyle: {
              backgroundColor: colors.white,
              borderTopLeftRadius: scale(24),
              borderTopRightRadius: scale(24),
              shadowColor: colors.dark,
              shadowOffset: {height: 2, width: 0},
              shadowOpacity: 0.4,
            },
            tabBarItemStyle: {
              paddingBottom: scale(6),
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
          name={item.name}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
