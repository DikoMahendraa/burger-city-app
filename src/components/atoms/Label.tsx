import React from 'react';
import {Text, TextProps, StyleSheet, ColorValue} from 'react-native';
import {scale} from '../../utils';
import {colors} from '../../constants';
import {TColors} from '../../constants/colors';

interface CustomLabelProps extends TextProps {
  customText: string;
  variant?: 'large' | 'normal' | 'small' | 'xsmall';
  weight?: 'bold' | 'semibold' | 'normalWeight';
  color?: TColors | ColorValue;
}

const CustomLabel: React.FC<CustomLabelProps> = ({
  customText,
  variant = 'normal',
  weight = 'normalWeight',
  color = colors.black,
  style,
  ...rest
}) => {
  return (
    <Text style={[styles[variant], styles[weight], {color}, style]} {...rest}>
      {customText}
    </Text>
  );
};

const styles = StyleSheet.create({
  large: {
    fontSize: scale(20),
  },
  normal: {
    fontSize: scale(16),
  },
  small: {
    fontSize: scale(14),
  },
  xsmall: {
    fontSize: scale(10),
  },
  bold: {
    fontWeight: '800',
  },
  semibold: {
    fontWeight: '600',
  },
  normalWeight: {
    fontWeight: '400',
  },
});

export default React.memo(CustomLabel);
