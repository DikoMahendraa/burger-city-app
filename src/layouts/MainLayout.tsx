import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../constants';
import {Header} from '../components/molecules';

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {children}
    </SafeAreaView>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.white,
  },
});
