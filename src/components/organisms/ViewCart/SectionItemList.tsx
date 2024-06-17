import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';

import {Gap, Label} from '../../atoms';
import {colors} from '../../../constants';
import {useBurgerStore} from '../../../stores';
import {AppRoutes, navigate} from '../../../navigation';

import SectionSubTotal from './SectionSubTotal';
import SectionItemOrder from './SectionItemOrder';
import SectionTotalPayment from './SectionTotalPayment';

const SectionItemList: React.FC = () => {
  const {
    carts,
    getSubTotal,
    getDeliveryFee,
    getTotalPayment,
    increaseOrder,
    decreaseOrder,
  } = useBurgerStore();

  const onAddItems = useCallback(() => {
    navigate(AppRoutes.OUR_BURGER);
  }, []);

  return (
    <FlatList
      data={carts}
      keyExtractor={item => item.id}
      ListHeaderComponent={
        <>
          <Gap height={30} />
          <View style={styles.row}>
            <Label customText="Item List" variant="normal" weight="semibold" />
            <TouchableOpacity onPress={onAddItems}>
              <Label
                color={colors.primary}
                customText="Add Items"
                variant="normal"
                weight="semibold"
              />
            </TouchableOpacity>
          </View>
          <Gap height={12} />
        </>
      }
      renderItem={({item}) => (
        <SectionItemOrder
          onPressLeft={() => decreaseOrder(item.id)}
          onPressRight={() => increaseOrder(item.id)}
          total={Number(item.count)}
          name={item.name}
          price={Number(item.price)}
        />
      )}
      ListFooterComponent={
        <>
          <SectionSubTotal fee={getDeliveryFee()} total={getSubTotal()} />
          <Gap height={24} />
          <SectionTotalPayment total={getTotalPayment()} />
          <Gap height={100} />
        </>
      }
    />
  );
};

export default SectionItemList;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
