import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Gap} from '../components/atoms';
import {
  Header,
  CardTicket,
  Hero,
  ListOffersMenu,
} from '../components/molecules';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Gap height={42} />
        <Header />
        <Hero />
        <Gap height={12} />
        <CardTicket
          title="Track Here"
          description="Order to Track Your Food"
          image={require('../assets/images/burger-track.png')}
        />
        <Gap height={10} />
        <CardTicket
          title="Order Here"
          description="Order to Track Your Food"
          image={require('../assets/images/burger-logo.png')}
        />

        <Gap height={24} />

        <ListOffersMenu />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
