import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ArrowLeft, Bell, ChevronDown} from 'lucide-react-native';
import {colors} from '../../constants';
import {scale, scaleHeight} from '../../utils';

type TPropsHeader = {
  isBack?: boolean;
  iconOnly?: boolean;
  onPressLeft?: () => void;
  onPressRight?: () => void;
};

const Header: React.FC<TPropsHeader> = ({
  isBack,
  onPressLeft,
  onPressRight,
  iconOnly = false,
}) => {
  return (
    <View style={[styles.header]}>
      {!iconOnly && (
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
      )}

      <View style={styles.logoCenter}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo-text.png')}
          alt="logo-title-burger"
        />
      </View>

      {!iconOnly && (
        <TouchableOpacity onPress={onPressRight}>
          <Bell color={colors.disabled} />
        </TouchableOpacity>
      )}
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
    paddingVertical: scale(24),
    paddingHorizontal: scale(16),
    backgroundColor: colors.white,
    shadowColor: colors['gray-01'],
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  logoCenter: {
    marginTop: 10,
    zIndex: -2,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    left: 0,
    right: 0,
  },
  textLanguage: {
    fontWeight: '600',
    fontSize: scale(14),
    color: colors.primary,
  },
  language: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.primary,
  },
  logo: {
    height: scaleHeight(22),
    width: scale(65),
  },
});
