import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {ChevronRight, LucideIcon, Pencil, PlusIcon} from 'lucide-react-native';

import {Header} from '../../molecules';
import {MainLayout} from '../../../layouts';
import {useOurBurgerStore} from '../../../stores';
import {ButtonCount, Gap, Label, RadioButton} from '../../atoms';
import {AppRoutes, navigate} from '../../../navigation';
import {SELECT_ORDERS_METHOD, colors} from '../../../constants';
import {formatCurrency, scale, scaleHeight} from '../../../utils';

const SectionOrderMethod: React.FC<{
  icon: LucideIcon;
  name: string;
  selected: boolean;
  onPress: () => void;
}> = ({name, selected = false, onPress, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.row, styles.cardOrderMethod]}>
      <View style={[styles.row]}>
        <props.icon color={colors.disabled} />
        <Gap width={24} />
        <Label color={colors.dark} variant="small" customText={name} />
      </View>
      <RadioButton onPress={onPress} selected={selected} />
    </TouchableOpacity>
  );
};

const SectionDeliveryAddress: React.FC<{
  onPress: () => void;
  visible: boolean;
  value: string;
  onChange: (params: string) => void;
}> = ({visible, onPress, onChange, value}) => {
  return (
    <>
      <Label customText="Delivery Address" variant="normal" weight="semibold" />
      <Gap height={30} />
      <View style={{flexDirection: 'row'}}>
        <View style={styles['delivery-image-address']} />
        <Gap width={20} />
        <View style={styles['delivery-detail-address']}>
          <Label
            style={{maxWidth: '80%'}}
            customText="Cirangpen no 6, Majalaya, Kab Karawang. Jawa Barat"
            color={colors.dark}
            variant="small"
          />
          <Gap height={8} />
          <View style={[styles.row, {paddingRight: 24}]}>
            {visible ? (
              <TextInput
                multiline
                value={value}
                placeholder="Enter your notes"
                onChangeText={onChange}
                style={styles.inputNotes}
              />
            ) : (
              <Label
                customText={value || 'Add a note to driver'}
                color={colors.disabled}
                variant="small"
              />
            )}
            <TouchableOpacity onPress={onPress}>
              {visible ? (
                <PlusIcon size={16} color={colors.primary} />
              ) : (
                <Pencil size={16} color={colors.primary} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const SectionSubTotal: React.FC<{total: number; fee: number}> = ({
  total = 0,
  fee,
}) => {
  return (
    <>
      <View style={styles.dashedLine} />
      <View style={{paddingVertical: 18}}>
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
      <View style={styles.dashedLine} />
    </>
  );
};

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

const SectionItemOrder: React.FC<{
  price: number;
  total: number;
  name: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}> = ({price = 0, total = 1, name, onPressLeft, onPressRight}) => {
  return (
    <View style={[styles.row, {paddingVertical: 12}]}>
      <View style={styles.row}>
        <Label
          color={colors.primary}
          customText={total + 'x'}
          variant="small"
          weight="semibold"
        />
        <Gap width={30} />
        <View>
          <Label
            color={colors.dark}
            customText={name}
            variant="small"
            weight="normalWeight"
          />
          <Gap height={12} />
          <View style={{width: 100}}>
            <ButtonCount
              onPressLeft={onPressLeft}
              onPressRight={onPressRight}
              title={total}
            />
          </View>
        </View>
      </View>
      <Label
        color={colors.dark}
        customText={formatCurrency(price)}
        variant="small"
      />
    </View>
  );
};

const SectionItemList: React.FC = () => {
  const {
    carts,
    subTotal,
    deliveryFee,
    totalPayment,
    setIncreaseOrder,
    setDecreaseOrder,
  } = useOurBurgerStore();

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
          onPressLeft={() => setDecreaseOrder(item)}
          onPressRight={() => setIncreaseOrder(item)}
          total={Number(item.count)}
          name={item.name}
          price={Number(item.price)}
        />
      )}
      ListFooterComponent={
        <>
          <SectionSubTotal fee={deliveryFee()} total={subTotal()} />
          <Gap height={24} />
          <SectionTotalPayment total={totalPayment()} />
          <Gap height={100} />
        </>
      }
    />
  );
};

const SectionButtonPayment: React.FC = () => {
  return (
    <TouchableOpacity style={styles.buttonPayment}>
      <Label
        customText="Payment Method"
        color={colors.white}
        variant="normal"
        weight="semibold"
      />

      <ChevronRight color={colors.white} size={18} />
    </TouchableOpacity>
  );
};

const ViewCartOrganism: React.FC = () => {
  const onBack = useCallback(() => navigate(AppRoutes.OUR_BURGER), []);
  const [selectMethod, setSelectMethod] = useState<string>();
  const [notes, setNotes] = useState<{visible: boolean; value: string}>({
    visible: false,
    value: '',
  });

  const onSelectMethod = useCallback((name: string) => {
    setSelectMethod(name);
  }, []);

  const onChangeNotes = useCallback(
    (params: string) => {
      setNotes({...notes, value: params});
    },
    [notes],
  );

  return (
    <MainLayout>
      <Header isBack onPressLeft={onBack} />
      <FlatList
        data={SELECT_ORDERS_METHOD}
        style={styles.container}
        ListHeaderComponent={
          <>
            <Gap height={24} />
            <Label
              customText="Order Method"
              variant="normal"
              weight="semibold"
            />
            <Gap height={14} />
          </>
        }
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <SectionOrderMethod
            icon={item.icon}
            name={item.name}
            selected={selectMethod === item.name}
            onPress={() => onSelectMethod(item.name)}
          />
        )}
        ListFooterComponent={
          <>
            <Gap height={30} />
            <SectionDeliveryAddress
              visible={notes.visible}
              value={notes.value}
              onChange={onChangeNotes}
              onPress={() => setNotes({...notes, visible: !notes.visible})}
            />
            <SectionItemList />
          </>
        }
        showsVerticalScrollIndicator={false}
      />
      <SectionButtonPayment />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(24),
  },
  'delivery-image-address': {
    height: 80,
    width: 80,
    borderRadius: 6,
    backgroundColor: colors['gray-05'],
  },
  'delivery-detail-address': {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  description: {
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 22,
    marginTop: scale(22),
    fontSize: scale(16),
    color: colors.disabled,
    paddingHorizontal: scale(30),
  },
  inputNotes: {
    width: '80%',
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.disabled,
    paddingBottom: 6,
  },
  containerContain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: scale(250),
    height: scaleHeight(200),
    objectFit: 'contain',
  },
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
  cardOrderMethod: {
    paddingVertical: 8,
  },
});

export default ViewCartOrganism;
