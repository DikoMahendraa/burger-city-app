import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Button, Gap, Label} from '../../atoms';
import {LIST_WALLET, colors} from '../../../constants';
import {formatCurrency, scale, scaleHeight} from '../../../utils';

const OrderPayment: React.FC = () => {
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
          <>
            <TouchableOpacity>
              <Image style={styles.cardWallet} source={item.image} />
            </TouchableOpacity>
            <Gap width={8} />
          </>
        )}
      />
      <Gap height={42} />
      <View>
        <View style={styles.row}>
          <Label text="Subtotal Order" />
          <Label weight="semibold" text={formatCurrency(150000)} />
        </View>
        <Gap height={12} />
        <View style={styles.row}>
          <Label text="Delivery Fee" />
          <Label weight="semibold" text={formatCurrency(50000)} />
        </View>
        <Gap height={24} />
        <View style={styles.dashedLine} />
        <Gap height={24} />
        <View style={styles.row}>
          <Label text="Total Payment" />
          <View>
            <Label weight="semibold" text={formatCurrency(50000)} />
            <Gap height={8} />
            <Label
              weight="semibold"
              size="sm"
              color={colors.disabled}
              text={formatCurrency(24000)}
            />
          </View>
        </View>
      </View>
      <Gap height={42} />
      <Button text="ORDER" weight="600" size="large" />
    </View>
  );
};

export default OrderPayment;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  cardWallet: {
    objectFit: 'contain',
    width: scale(242),
    height: scaleHeight(130),
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
