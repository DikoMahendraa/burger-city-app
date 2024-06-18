import {Pencil, PlusIcon} from 'lucide-react-native';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {Gap, Label} from '../../atoms';
import {colors} from '../../../constants';
import {scale} from '../../../utils';

const SectionDeliveryAddress: React.FC<{
  onPress: () => void;
  visible: boolean;
  value: string;
  onChange: (params: string) => void;
}> = ({visible, onPress, onChange, value}) => {
  return (
    <>
      <Label text="Delivery Address" weight="semibold" />
      <Gap height={30} />
      <View style={styles.row}>
        <View style={styles['delivery-image-address']} />
        <Gap width={20} />
        <View style={styles['delivery-detail-address']}>
          <Label
            style={styles.address}
            text="Cirangpen no 6, Majalaya, Kab Karawang. Jawa Barat"
            color={colors.dark}
            size="sm"
          />
          <Gap height={8} />
          <View style={[styles.row, styles.addNotes]}>
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
                style={styles.inputNotes}
                text={value || 'Add a note to driver'}
                color={colors.disabled}
                size="sm"
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

export default SectionDeliveryAddress;

const styles = StyleSheet.create({
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
  row: {
    flexDirection: 'row',
  },
  address: {
    maxWidth: '80%',
  },
  inputNotes: {
    fontSize: scale(14),
    borderBottomWidth: 1,
    borderBottomColor: colors.disabled,
    paddingBottom: 6,
    width: '80%',
  },
  addNotes: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
