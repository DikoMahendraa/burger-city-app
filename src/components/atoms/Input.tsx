import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import {colors} from '../../constants';
import {scale} from '../../utils';

interface InputProps extends TextInputProps {
  variant?: 'small' | 'medium' | 'large';
  error?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  style?: ViewStyle;
}

const Input: React.FC<InputProps> = ({
  variant = 'medium',
  error,
  prefix,
  suffix,
  style,
  ...rest
}) => {
  return (
    <View>
      <View
        style={[
          styles.container,
          styles[variant],
          style,
          error ? styles.error : {},
        ]}>
        {prefix && <View style={styles.prefix}>{prefix}</View>}
        <TextInput autoCapitalize="none" style={styles.input} {...rest} />
        {suffix && <View style={styles.suffix}>{suffix}</View>}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.white,
    paddingHorizontal: scale(15),
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    fontSize: scale(16),
    textTransform: 'lowercase',
  },
  prefix: {
    marginRight: 8,
  },
  suffix: {
    marginLeft: 8,
  },
  small: {
    height: scale(40),
  },
  medium: {
    height: scale(50),
  },
  large: {
    height: scale(60),
  },
  error: {
    borderWidth: 1,
    borderColor: colors.error,
  },
  errorText: {
    fontSize: scale(12),
    color: colors.error,
    marginTop: 5,
  },
});

export default React.memo(Input);
