import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';

import {Label} from '../atoms';
import {colors} from '../../constants';
import {formatCurrency, scale} from '../../utils';

const FloatingBasket: React.FC<{
  total: number;
  length: string;
  rootStyle?: ViewStyle;
  onPress: () => void;
}> = ({total, length, rootStyle, onPress}) => {
  return (
    <View style={[styles.container, rootStyle]}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <View style={styles.textCount}>
          <Label
            text={String(length)}
            color={colors.primary}
            weight="semibold"
          />
        </View>
        <Label text="View your cart" color={colors.white} />
        <Label
          text={formatCurrency(total)}
          color={colors.white}
          weight="semibold"
        />
      </TouchableOpacity>
    </View>
  );
};

export default FloatingBasket;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: scale(0),
    paddingVertical: scale(12),
    paddingHorizontal: scale(24),
    borderTopEndRadius: 12,
    shadowColor: colors.dark,
    paddingBottom: scale(20),
    shadowOpacity: 0.1,
    borderTopLeftRadius: scale(12),
    zIndex: 30,
  },
  button: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: scale(12),
    paddingHorizontal: scale(16),
    borderRadius: 8,
  },

  textCount: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.white,
    color: colors.primary,
    borderRadius: 6,
    paddingVertical: scale(6),
    paddingHorizontal: scale(12),
  },
});
