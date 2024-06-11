import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '../../constants';
import {scale} from '../../utils';

interface CustomButtonProps {
  icon?: React.ReactNode;
  text?: string;
  onPress: () => void;
  suffix?: string | React.ReactNode;
  disabled?: boolean;
  prefix?: string;
  textStyle?: TextStyle;
  size?: 'small' | 'medium' | 'large' | 'wide';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  text,
  onPress,
  suffix,
  disabled,
  prefix,
  textStyle,
  size = 'medium',
}) => {
  let buttonStyles: ViewStyle[] = [styles.button];
  switch (size) {
    case 'small':
      buttonStyles.push(styles.small);
      break;
    case 'medium':
      buttonStyles.push(styles.medium);
      break;
    case 'large':
      buttonStyles.push(styles.large);
      break;
    case 'wide':
      buttonStyles.push(styles.wide);
      break;
    default:
      buttonStyles.push(styles.medium);
      break;
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      style={buttonStyles}
      onPress={onPress}>
      {prefix && <Text style={styles.prefix}>{prefix}</Text>}
      {icon && icon}
      {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
      {suffix && <Text style={styles.suffix}>{suffix}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
  },
  small: {
    paddingVertical: scale(5),
    paddingHorizontal: scale(10),
  },
  medium: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
  },
  large: {
    paddingVertical: scale(15),
    paddingHorizontal: scale(25),
  },
  wide: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(100),
  },
  text: {
    color: 'white',
    fontSize: scale(16),
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
  prefix: {
    marginRight: 5,
  },
  suffix: {
    marginLeft: 5,
  },
});

export default React.memo(CustomButton);
