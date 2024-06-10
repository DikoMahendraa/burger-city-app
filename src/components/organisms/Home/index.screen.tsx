import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Header,
  Hero,
  ListOffersMenu,
  ListTrackAndOrder,
} from '../../../components/molecules';
import {Gap} from '../../../components/atoms';
import {MainLayout} from '../../../layouts';

const HomeOrganism: React.FC = () => {
  return (
    <MainLayout>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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

export default HomeOrganism;
