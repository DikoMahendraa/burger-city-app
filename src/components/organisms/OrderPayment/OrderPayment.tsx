import React, {useCallback} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Gap, Label} from '../../atoms';
import {LIST_WALLET, colors} from '../../../constants';
import {formatCurrency, scale, scaleHeight} from '../../../utils';
import {useBurgerStore, useGlobalStore} from '../../../stores';

const OrderPayment: React.FC = () => {
  const {submitOrder, getDeliveryFee, getSubTotal, getTotalPayment} =
    useBurgerStore();
  const {isLoading, setLoading} = useGlobalStore();

  const onOrder = useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      submitOrder();
    }, 3000);
  }, [setLoading, submitOrder]);

  return (
    <View style={styles.container}>
      <Gap height={24} />
      <Label text="Select Wallet" weight="semibold" />
      <Gap height={12} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={LIST_WALLET}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View style={styles.walletItem}>
            <TouchableOpacity>
              <Image style={styles.cardWallet} source={item.image} />
            </TouchableOpacity>
            <Gap width={8} />
          </View>
        )}
      />
      <Gap height={42} />
      <View>
        <OrderSummaryRow
          label="Subtotal Order"
          value={formatCurrency(getSubTotal())}
        />
        <Gap height={12} />
        <OrderSummaryRow
          label="Delivery Fee"
          value={formatCurrency(getDeliveryFee())}
        />
        <Gap height={24} />
        <View style={styles.dashedLine} />
        <Gap height={24} />
        <View style={styles.row}>
          <Label text="Total Payment" />
          <View>
            <Label weight="semibold" text={formatCurrency(getTotalPayment())} />
            <Gap height={8} />
            <Label
              weight="semibold"
              size="sm"
              hasScratch
              color={colors.disabled}
              text={formatCurrency(24000)}
            />
          </View>
        </View>
      </View>
      <Gap height={42} />
      <Button
        disabled={isLoading}
        onPress={onOrder}
        text="ORDER"
        weight="600"
        size="large"
      />
    </View>
  );
};

const OrderSummaryRow: React.FC<{label: string; value: string}> = ({
  label,
  value,
}) => (
  <View style={styles.row}>
    <Label text={label} />
    <Label weight="semibold" text={value} />
  </View>
);

export default OrderPayment;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(24),
  },
  walletItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardWallet: {
    width: scale(242),
    height: scaleHeight(130),
    objectFit: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dashedLine: {
    width: '100%',
    height: 1,
    borderWidth: 1,
    borderColor: colors['gray-05'],
    borderStyle: 'dashed',
  },
});
