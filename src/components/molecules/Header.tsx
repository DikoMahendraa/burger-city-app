import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ArrowLeft, Bell, ChevronDown} from 'lucide-react-native';
import {colors} from '../../constants';

type TPropsHeader = {
  isBack?: boolean;
  onPressLeft?: () => void;
  onPressRight?: () => void;
};

const Header: React.FC<TPropsHeader> = ({
  isBack,
  onPressLeft,
  onPressRight,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPressLeft} style={styles.language}>
        {isBack ? (
          <ArrowLeft size={22} color={colors.primary} />
        ) : (
          <>
            <Text style={styles.textLanguage}>EN</Text>
            <ChevronDown color={colors.primary} />
          </>
        )}
      </TouchableOpacity>
      <View style={styles.logoCenter}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo-text.png')}
          alt="logo-title-burger"
        />
      </View>
      <TouchableOpacity onPress={onPressRight}>
        <Bell color={colors.disabled} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    shadowColor: colors['gray-01'],
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  logoCenter: {
    marginTop: 10,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    left: 0,
    right: 0,
  },
  textLanguage: {
    fontWeight: '600',
    fontSize: 14,
    color: colors.primary,
  },
  language: {
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.primary,
  },
  logo: {
    height: 22,
    width: 65,
  },
});
