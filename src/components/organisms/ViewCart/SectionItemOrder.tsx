import {StyleSheet, View} from 'react-native';
import React from 'react';

import {colors} from '../../../constants';
import {formatCurrency, scale} from '../../../utils';
import {ButtonCount, Gap, Label} from '../../atoms';

const SectionItemOrder: React.FC<{
  price: number;
  total: number;
  name: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}> = ({price = 0, total = 1, name, onPressLeft, onPressRight}) => {
  return (
    <View style={[styles.row, styles.container]}>
      <View style={styles.row}>
        <Label
          color={colors.primary}
          text={total + 'x'}
          size="sm"
          weight="semibold"
        />
        <Gap width={30} />
        <View>
          <Label
            color={colors.dark}
            text={name}
            size="sm"
            weight="normalWeight"
          />
          <Gap height={12} />
          <View style={styles.buttonCounter}>
            <ButtonCount
              onPressLeft={onPressLeft}
              onPressRight={onPressRight}
              title={total}
            />
          </View>
        </View>
      </View>
      <Label color={colors.dark} text={formatCurrency(price)} size="sm" />
    </View>
  );
};

export default SectionItemOrder;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonCounter: {
    width: scale(80),
  },
});
