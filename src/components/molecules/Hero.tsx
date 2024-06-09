import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants';

const Hero = () => {
  return (
    <View style={styles.hero}>
      <Image
        style={styles.heroImg}
        alt="hero-image"
        source={require('../../assets/images/hero-slider-1.png')}
      />

      <View style={styles.containerTextHero}>
        <Text style={styles.textHero}>
          <Text style={styles.fontLight}>World's Greatest </Text>
          Burgers.
        </Text>
      </View>
    </View>
  );
};

export default React.memo(Hero);

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    position: 'relative',
  },
  heroImg: {
    height: 232,
    width: '100%',
    objectFit: 'fill',
  },
  containerTextHero: {
    position: 'absolute',
    top: 0,
    width: '50%',
    paddingVertical: 30,
    paddingHorizontal: 18,
  },
  textHero: {
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 40,
    color: colors.white,
  },
  fontLight: {
    fontWeight: '400',
  },
});
