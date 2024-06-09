import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';

interface CustomLabelProps extends TextProps {
  customText: string;
  variant?: 'large' | 'normal' | 'small';
  weight?: 'bold' | 'semibold' | 'normal';
}

const CustomLabel: React.FC<CustomLabelProps> = ({
  customText,
  variant = 'normal',
  weight = 'normal',
  style,
  ...rest
}) => {
  return (
    <Text style={[styles[variant], styles[weight], style]} {...rest}>
      {customText}
    </Text>
  );
};

const styles = StyleSheet.create({
  large: {
    fontSize: 20,
  },
  normal: {
    fontSize: 18,
  },
  small: {
    fontSize: 14,
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
