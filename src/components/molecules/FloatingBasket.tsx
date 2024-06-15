import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';

import {Label} from '../atoms';
import {colors} from '../../constants';
import {formatCurrency, scale} from '../../utils';

const FloatingBasket: React.FC<{
  total: number;
  length: string;
  rootStyle?: ViewStyle;
}> = ({total, length, rootStyle}) => {
  return (
    <View style={[styles.container, rootStyle]}>
      <TouchableOpacity onPress={() => ({})} style={styles.button}>
        <View style={styles.textCount}>
          <Label
            customText={String(length)}
            color={colors.primary}
            weight="semibold"
            variant="normal"
          />
        </View>
        <Label
          customText="View your cart"
          color={colors.white}
          variant="normal"
        />
        <Label
          customText={formatCurrency(total)}
          color={colors.white}
          weight="semibold"
          variant="normal"
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
    zIndex: 20,
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
