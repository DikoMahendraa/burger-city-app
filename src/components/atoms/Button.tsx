import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../../constants';
import {scale} from '../../utils';

interface CustomButtonProps {
  icon?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  suffix?: string | React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  prefix?: string;
  weight?: TextStyle['fontWeight'];
  textStyle?: TextStyle;
  variant?: 'primary' | 'secondary' | 'transparent' | 'dark';
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
  isLoading,
  weight,
  variant = 'primary',
  size = 'medium',
}) => {
  let buttonStyles: ViewStyle[] = [
    styles.button,
    styles[variant],
    isLoading ? styles[isLoading || disabled ? 'disabled' : 'primary'] : {},
  ];
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
      disabled={disabled || isLoading}
      style={buttonStyles}
      onPress={onPress}>
      {isLoading && <ActivityIndicator size="small" color={colors.white} />}
      {prefix && <Text style={styles.prefix}>{prefix}</Text>}
      {icon && icon}
      {!isLoading && text && (
        <Text style={[styles.text, textStyle, {fontWeight: weight}]}>
          {text}
        </Text>
      )}
      {suffix && <Text style={styles.suffix}>{suffix}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.disabled,
  },
  dark: {
    backgroundColor: colors.dark,
  },
  transparent: {
    shadowColor: colors.dark,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: 'transparent',
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
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: scale(16),
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
  disabled: {
    backgroundColor: colors.primary,
    opacity: 0.8,
  },
});

export default React.memo(CustomButton);
