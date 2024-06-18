import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

interface LoadingScreenProps {
  visible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({visible}) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.blurBackground} />
      <View>
        <ActivityIndicator size="small" color="#fff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  blurBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  loadingText: {
    marginTop: 10,
    color: '#fff',
  },
});
