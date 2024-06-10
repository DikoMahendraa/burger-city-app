import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../constants';
import {scale} from '../../utils';

interface RadioButtonProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.radioCircle}>
        {selected && <View style={styles.selectedRb} />}
      </View>
      <Text style={styles.radioText}>{label}</Text>
    </TouchableOpacity>
  );
};

interface Option {
  label: string;
  value: string;
}

interface RadioButtonGroupProps {
  options: Option[];
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handlePress = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <View>
      {options.map(option => (
        <RadioButton
          key={option.value}
          label={option.label}
          selected={selectedOption === option.value}
          onPress={() => handlePress(option.value)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(10),
  },
  radioCircle: {
    height: scale(15),
    width: scale(15),
    borderRadius: 7.5,
    borderWidth: 2,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: scale(8),
    height: scale(8),
    borderRadius: 4,
    backgroundColor: colors.white,
  },
  radioText: {
    color: colors.white,
    marginLeft: scale(10),
    fontSize: scale(14),
  },
});

export default RadioButton;
