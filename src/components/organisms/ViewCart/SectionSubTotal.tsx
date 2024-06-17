import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Gap, Label} from '../../atoms';
import {colors} from '../../../constants';
import {formatCurrency} from '../../../utils';

const SectionSubTotal: React.FC<{total: number; fee: number}> = ({
  total = 0,
  fee,
}) => {
  return (
    <>
      <Gap height={24} />
      <View style={styles.dashedLine} />
      <Gap height={12} />
      <View>
        <View style={styles.row}>
          <Label customText="Subtotal" variant="small" weight="normalWeight" />
          <Label
            customText={formatCurrency(total)}
            variant="small"
            weight="normalWeight"
          />
        </View>
        <Gap height={12} />
        <View style={styles.row}>
          <Label
            customText="Delivery Fee"
            variant="small"
            weight="normalWeight"
          />
          <Label
            customText={formatCurrency(fee)}
            variant="small"
            weight="normalWeight"
          />
        </View>
      </View>
      <Gap height={12} />
      <View style={styles.dashedLine} />
    </>
  );
};

export default SectionSubTotal;

const styles = StyleSheet.create({
  dashedLine: {
    width: '100%',
    height: 1,
    borderWidth: 1,
    borderColor: colors['gray-05'],
    borderStyle: 'dashed',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
