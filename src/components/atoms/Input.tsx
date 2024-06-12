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
import {scale, scaleHeight} from '../../utils';
import {Controller, useFormContext} from 'react-hook-form';

interface InputProps extends TextInputProps {
  variant?: 'small' | 'medium' | 'large';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  style?: ViewStyle;
  name: string;
}

const Input: React.FC<InputProps> = ({
  variant = 'medium',
  prefix,
  suffix,
  style,
  name,
  ...rest
}) => {
  const {
    control,
    formState: {errors},
  } = useFormContext();
  const hasError = !!errors[name] || false;

  return (
    <Controller
      control={control}
      render={({field: {onChange, value, onBlur}}) => (
        <View>
          <View
            style={[
              styles.container,
              styles[variant],
              style,
              hasError ? styles.error : {},
            ]}>
            {prefix && <View style={[styles.prefix]}>{prefix}</View>}
            <TextInput
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
              style={styles.input}
              {...rest}
            />
            {suffix && <View style={styles.suffix}>{suffix}</View>}
          </View>
          {hasError && (
            <Text style={styles.errorText}>
              {errors[name]?.message as string}
            </Text>
          )}
        </View>
      )}
      name={String(name)}
    />
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
    height: scaleHeight(40),
  },
  medium: {
    height: scaleHeight(50),
  },
  large: {
    height: scaleHeight(60),
  },
  error: {
    borderWidth: 2,
    borderColor: colors.error,
  },
  errorText: {
    textTransform: 'capitalize',
    fontSize: scale(14),
    color: colors.error,
    marginTop: 5,
  },
});

export default React.memo(Input);
