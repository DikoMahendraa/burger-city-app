import React from 'react';
import {Text, TextProps} from 'react-native';

interface CustomLabelProps extends TextProps {
  customText: string;
}

const CustomLabel: React.FC<CustomLabelProps> = ({customText, ...rest}) => {
  return <Text {...rest}>{customText}</Text>;
};

export default React.memo(CustomLabel);
