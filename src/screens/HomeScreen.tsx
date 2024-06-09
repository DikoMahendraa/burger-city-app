import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {AppRoutes, navigate} from '../navigation';

const HomeScreen = () => {
  const goToProfile = () => navigate(AppRoutes.PROFILE);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      <Button title="Go to profile" onPress={goToProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
