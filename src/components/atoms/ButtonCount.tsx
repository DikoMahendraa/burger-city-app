import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants';
import {Minus, Plus} from 'lucide-react-native';

const ButtonCount: React.FC<{
  onPressLeft?: () => void;
  onPressRight?: () => void;
  title?: number;
}> = ({onPressLeft, onPressRight, title = 1}) => {
  return (
    <View style={styles.buttonIncrease}>
      <TouchableOpacity onPress={onPressLeft}>
        <Minus size={12} strokeWidth={3} color={colors.primary} />
      </TouchableOpacity>
      <Text style={styles.textIncrease}>{String(title)}</Text>
      <TouchableOpacity onPress={onPressRight}>
        <Plus size={12} strokeWidth={3} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonCount;

const styles = StyleSheet.create({
  buttonIncrease: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    backgroundColor: colors.white,
    shadowColor: colors.dark,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  textIncrease: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.dark,
  },
});
