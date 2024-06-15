import React, {useCallback} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {ChevronRight, LucideIcon, Pencil} from 'lucide-react-native';

import {Header} from '../../molecules';
import {MainLayout} from '../../../layouts';
import {navigate} from '../../../navigation';
import {scale, scaleHeight} from '../../../utils';
import {Gap, Label, RadioButton} from '../../atoms';
import {SELECT_ORDERS_METHOD, colors} from '../../../constants';

const SectionOrderMethod: React.FC<{
  icon: LucideIcon;
  name: string;
}> = ({name, ...props}) => {
  return (
    <TouchableOpacity style={[styles.row, styles.cardOrderMethod]}>
      <View style={[styles.row]}>
        <props.icon color={colors.disabled} />
        <Gap width={24} />
        <Label color={colors.dark} variant="small" customText={name} />
      </View>
      <RadioButton onPress={() => ({})} selected />
    </TouchableOpacity>
  );
};

const SectionDeliveryAddress: React.FC = () => {
  return (
    <>
      <Label customText="Delivery Address" variant="normal" weight="semibold" />
      <Gap height={30} />
      <View style={styles.row}>
        <View style={styles['delivery-image-address']} />
        <Gap width={20} />
        <View style={styles['delivery-detail-address']}>
          <Label
            style={{maxWidth: '80%'}}
            customText="Cirangpen no 6, Majalaya, Kab Karawang. Jawa Barat"
            color={colors.dark}
            variant="small"
          />

          <Gap height={12} />
          <View style={styles.row}>
            <Label
              customText="Add a note to driver"
              color={colors.disabled}
              variant="small"
            />
            <Pencil size={14} color={colors.primary} />
          </View>
        </View>
      </View>
    </>
  );
};

const SectionSubTotal: React.FC = () => {
  return (
    <>
      <View style={styles.dashedLine} />
      <View style={{paddingVertical: 18}}>
        <View style={styles.row}>
          <Label customText="Subtotal" variant="small" weight="normalWeight" />
          <Label customText="Rp.50.000" variant="small" weight="normalWeight" />
        </View>
        <Gap height={12} />
        <View style={styles.row}>
          <Label
            customText="Delivery Fee"
            variant="small"
            weight="normalWeight"
          />
          <Label customText="Rp.12.000" variant="small" weight="normalWeight" />
        </View>
      </View>
      <View style={styles.dashedLine} />
    </>
  );
};

const SectionTotalPayment: React.FC = () => {
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
        <Label customText="Rp.12.0000" color={colors.dark} weight="semibold" />
      </View>
    </>
  );
};

const SectionItemOrder: React.FC = () => {
  return (
    <View style={[styles.row, {paddingVertical: 12}]}>
      <View style={styles.row}>
        <Label
          color={colors.primary}
          customText="1x"
          variant="small"
          weight="semibold"
        />
        <Gap width={30} />
        <View>
          <Label
            color={colors.dark}
            customText="Chicken Big Burger"
            variant="small"
            weight="normalWeight"
          />
          <Gap height={4} />
          <Label
            color={colors.primary}
            customText="Edit"
            variant="small"
            weight="semibold"
          />
        </View>
      </View>
      <Label color={colors.dark} customText="Rp. 50.000" variant="small" />
    </View>
  );
};

const SectionItemList: React.FC = () => {
  return (
    <FlatList
      data={[{id: '1'}, {id: '3'}, {id: '5'}, {id: '4'}]}
      keyExtractor={item => item.id}
      ListHeaderComponent={
        <>
          <Gap height={30} />
          <View style={styles.row}>
            <Label customText="Item List" variant="normal" weight="semibold" />
            <Label
              color={colors.primary}
              customText="Add Items"
              variant="normal"
              weight="semibold"
            />
          </View>
          <Gap height={30} />
        </>
      }
      renderItem={({}) => <SectionItemOrder />}
      ListFooterComponent={
        <>
          <SectionSubTotal />
          <Gap height={24} />
          <SectionTotalPayment />
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
  const onBack = useCallback(() => navigate('OUR_BURGER'), []);

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
          <SectionOrderMethod icon={item.icon} name={item.name} />
        )}
        ListFooterComponent={
          <>
            <Gap height={30} />
            <SectionDeliveryAddress />
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
