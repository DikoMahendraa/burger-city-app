import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Star} from 'lucide-react-native';

import {colors} from '../../../constants';
import {Button, Gap} from '../../atoms';
import {scale, scaleHeight} from '../../../utils';

const OrderSuccess = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../../../assets/images/logo-text-white.png')}
            alt="logo-title-burger"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Your Order is Complete!</Text>
          <Gap height={32} />
          <View style={styles.centeredRow}>
            <Image
              style={styles.fireIcon}
              source={require('../../../assets/images/completely.png')}
            />
          </View>
        </View>

        <View style={styles.ratingContainer}>
          {[...Array(3)].map((_, index) => (
            <Star key={index} color={colors.white} fill={colors.white} />
          ))}
          {[...Array(2)].map((_, index) => (
            <Star key={index} color={colors.white} fill={colors.primary} />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <Button
            text="SUBMIT"
            variant="dark"
            size="large"
            weight="800"
            textStyle={styles.buttonText}
          />
          <Gap height={12} />
          <Button
            text="SKIP RATE"
            variant="transparent"
            size="large"
            weight="800"
            textStyle={styles.buttonText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: scaleHeight(62),
    paddingTop: scale(100),
  },
  logoContainer: {
    position: 'absolute',
    top: scale(30),
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    height: scaleHeight(30),
    width: scale(80),
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: scale(36),
    fontWeight: '700',
    textAlign: 'center',
  },
  centeredRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fireIcon: {
    width: scale(140),
    height: scaleHeight(140),
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(100),
  },
  buttonContainer: {
    paddingHorizontal: scale(32),
  },
  buttonText: {
    color: colors.white,
  },
});
