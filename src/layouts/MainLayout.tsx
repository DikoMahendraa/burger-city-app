import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../constants';

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.white,
  },
});
