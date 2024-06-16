import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ChevronRight} from 'lucide-react-native';
import React from 'react';

import {Gap, Label} from '../../atoms';
import {colors} from '../../../constants';
import {formatCurrency} from '../../../utils';

const SectionTotalPayment: React.FC<{total: number}> = ({total = 0}) => {
  return (
    <>
      <View style={styles.row}>
        <Label
          customText="Add Your Promos Code"
          color={colors.primary}
          weight="semibold"
        />
        <TouchableOpacity>
          <ChevronRight color={colors.disabled} size={18} />
        </TouchableOpacity>
      </View>
      <Gap height={40} />
      <View style={styles.row}>
        <Label
          customText="Total Payment"
          color={colors.dark}
          weight="semibold"
        />
        <Label
          customText={formatCurrency(total)}
          color={colors.dark}
          weight="semibold"
        />
      </View>
    </>
  );
};
export default SectionTotalPayment;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
