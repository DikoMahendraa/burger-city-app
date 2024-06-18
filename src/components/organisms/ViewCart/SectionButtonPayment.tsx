import {StyleSheet, TouchableOpacity} from 'react-native';
import {ChevronRight} from 'lucide-react-native';
import React, {useCallback} from 'react';

import {Label} from '../../atoms';
import {scale} from '../../../utils';
import {colors} from '../../../constants';
import {AppDetailRoutes, navigate} from '../../../navigation';

const SectionButtonPayment: React.FC = () => {
  const onPaymentMethod = useCallback(() => {
    navigate(AppDetailRoutes.DETAIL_PAYMENT_ORDER);
  }, []);

  return (
    <TouchableOpacity onPress={onPaymentMethod} style={styles.buttonPayment}>
      <Label text="Payment Method" color={colors.white} weight="semibold" />

      <ChevronRight color={colors.white} size={18} />
    </TouchableOpacity>
  );
};

export default SectionButtonPayment;

const styles = StyleSheet.create({
  buttonPayment: {
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    paddingVertical: scale(20),
    marginHorizontal: scale(12),
    borderRadius: scale(32),
    flexDirection: 'row',
    paddingHorizontal: scale(24),
  },
});
