import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Header,
  Hero,
  ListOffersMenu,
  ListTrackAndOrder,
} from '../../../components/molecules';
import {MainLayout} from '../../../layouts';
import {Gap} from '../../../components/atoms';

const HomeOrganism: React.FC = () => {
  return (
    <MainLayout>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Hero />
        <Gap height={12} />
        <ListTrackAndOrder />
        <Gap height={24} />
        <ListOffersMenu label="Best Offers" />
        <Gap height={12} />
        <ListOffersMenu label="Burgers Menu" />
        <Gap height={80} />
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
