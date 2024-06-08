import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';

const image = {uri: require('../assets/images/intro-background.png')};

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image.uri}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.shadowContainer} />
        <View style={styles.burgerLogo}>
          <Image source={require('../assets/images/burger-logo.png')} />
        </View>
        {children}
      </ImageBackground>
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  burgerLogo: {
    position: 'absolute',
    top: 100,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
