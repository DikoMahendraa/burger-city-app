import React from 'react';
import {Text, TextProps, StyleSheet, ColorValue} from 'react-native';

import {scale} from '../../utils';
import {colors} from '../../constants';
import {TColors} from '../../constants/colors';

interface CustomLabelProps extends TextProps {
  text: string;
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  weight?: 'bold' | 'semibold' | 'normal' | 'light';
  color?: TColors | ColorValue;
  hasScratch?: boolean;
}

const Label: React.FC<CustomLabelProps> = ({
  text,
  size = 'md',
  weight = 'normal',
  color = colors.black,
  style,
  hasScratch = false,
  ...rest
}) => {
  return (
    <Text
      style={[
        styles[size],
        styles[weight],
        {color},
        style,
        [hasScratch ? styles.scratch : null],
      ]}
      {...rest}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  xl: {
    fontSize: scale(24),
  },
  lg: {
    fontSize: scale(20),
  },
  md: {
    fontSize: scale(16),
  },
  scratch: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: 'black',
  },
  sm: {
    fontSize: scale(14),
  },
  xs: {
    fontSize: scale(10),
  },
  bold: {
    fontWeight: '700',
  },
  semibold: {
    fontWeight: '600',
  },
  normal: {
    fontWeight: '400',
  },
  light: {
    fontWeight: '300',
  },
});

export default React.memo(Label);
