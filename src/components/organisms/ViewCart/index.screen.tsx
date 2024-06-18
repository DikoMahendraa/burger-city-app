import React, {useCallback, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Header} from '../../molecules';
import {Gap, Label} from '../../atoms';
import {MainLayout} from '../../../layouts';
import {scale, scaleHeight} from '../../../utils';
import {AppRoutes, navigate} from '../../../navigation';
import {SELECT_ORDERS_METHOD, colors} from '../../../constants';

import SectionOrderMethod from './SectionOrderMethod';
import SectionDeliveryAddress from './SectionDeliveryAddress';
import SectionButtonPayment from './SectionButtonPayment';
import SectionItemList from './SectionItemList';

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
            <Label text="Order Method" weight="semibold" />
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
  description: {
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: scaleHeight(22),
    marginTop: scale(22),
    fontSize: scale(16),
    color: colors.disabled,
    paddingHorizontal: scale(30),
  },
});

export default ViewCartOrganism;
