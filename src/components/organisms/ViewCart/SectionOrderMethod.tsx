import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LucideIcon} from 'lucide-react-native';
import React from 'react';

import {colors} from '../../../constants';
import {Gap, Label, RadioButton} from '../../atoms';

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
        <Label color={colors.dark} size="sm" text={name} />
      </View>
      <RadioButton onPress={onPress} selected={selected} />
    </TouchableOpacity>
  );
};

export default SectionOrderMethod;

const styles = StyleSheet.create({
  cardOrderMethod: {
    paddingVertical: 8,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
