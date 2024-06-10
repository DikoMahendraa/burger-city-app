import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Gap} from '../../components/atoms';
import {
  Hero,
  ListOffersMenu,
  ListTrackAndOrder,
} from '../../components/molecules';
import {MainLayout} from '../../layouts';

const HomeScreen = () => {
  return (
    <MainLayout>
      <ScrollView style={styles.container}>
        <Hero />
        <Gap height={12} />
        <ListTrackAndOrder />
        <Gap height={24} />
        <ListOffersMenu />
        <Gap height={12} />
      </ScrollView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
