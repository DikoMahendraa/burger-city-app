import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ClipboardPen, LockKeyhole, Mail} from 'lucide-react-native';
import {FormProvider, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {
  confirmPasswordValidation,
  forgotPasswordSchema,
  verifyOTPSchema,
} from '../../../schemas/authSchema';
import {scale} from '../../../utils';
import {colors} from '../../../constants';
import {useGlobalStore} from '../../../stores';
import AuthLayout from '../../../layouts/AuthLayout';
import {AuthRoutes, navigate} from '../../../navigation';
import {Input, Button, Gap} from '../../../components/atoms';

type FormData = {
  email?: string;
  phone?: string;
  code?: string;
  password?: string;
  confirm_password?: string;
};

const ForgotPasswordOrganism = () => {
  const [switchMethod, setSwitchMethod] = useState<'phone' | 'email'>('email');
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(false);
  const [isSendOTP, setIsSendOTP] = useState<boolean>(false);
  const emailMethod = switchMethod === 'email';

  const {setLoading, isLoading} = useGlobalStore();
  const methods = useForm<FormData>({
    resolver: zodResolver(
      isSendOTP
        ? verifyOTPSchema
        : isConfirmPassword
        ? confirmPasswordValidation
        : forgotPasswordSchema,
    ),
  });

  const values = methods.getValues();

  const setButtonText = (() =>
    isSendOTP ? 'Verify' : isConfirmPassword ? 'Process' : 'Send')();

  const onProcessAction = methods.handleSubmit(async ({email, phone}) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      if (isSendOTP) {
        methods.reset({});
        setIsSendOTP(false);
        setIsConfirmPassword(true);
      } else if (isConfirmPassword) {
        methods.reset({});
        setIsConfirmPassword(false);
        navigate(AuthRoutes.SIGN_IN);
      } else {
        setIsSendOTP(true);
        const resetData = emailMethod
          ? {phone, code: '', email: ''}
          : {phone: '', code: '', email};
        methods.reset({...resetData});
      }
    } finally {
      setLoading(false);
    }
  });

  const onWithPhone = useCallback(() => {
    return setSwitchMethod(emailMethod ? 'phone' : 'email');
  }, [emailMethod]);

  const setPlaceholder = (() => {
    if (isSendOTP) {
      return 'Code OTP';
    } else {
      return emailMethod ? 'Phone number' : 'Email address';
    }
  })();

  const setPrefix = (() =>
    isSendOTP ? (
      <ClipboardPen color={colors.disabled} size={20} />
    ) : (
      <Mail color={colors.disabled} size={20} />
    ))();

  const setDescription = (() => {
    if (isConfirmPassword) {
      return 'Please enter a new password and confirm the password';
    } else {
      return isSendOTP
        ? `A text message with a 4-digit verification code was just sent to ${
            values[emailMethod ? 'phone' : 'email']
          }`
        : `For your security, a one time password has been sent to your ${
            emailMethod ? 'phone number' : 'email address'
          }. Please enter it below to continue.`;
    }
  })();

  const renderComponent = () => {
    if (isConfirmPassword) {
      return (
        <View>
          <Input
            placeholder="New password"
            name="password"
            prefix={<LockKeyhole color={colors.disabled} size={20} />}
            placeholderTextColor={colors.disabled}
            secureTextEntry
          />
          <Gap height={12} />
          <Input
            name="confirm_password"
            placeholder="Confirm Password"
            secureTextEntry
            prefix={<LockKeyhole color={colors.disabled} size={20} />}
            placeholderTextColor={colors.disabled}
          />

          <Gap height={34} />
          <Button
            text="Confirm"
            weight="600"
            isLoading={isLoading}
            disabled={isLoading}
            onPress={onProcessAction}
            size="large"
          />
        </View>
      );
    } else {
      return (
        <View>
          <Input
            name={isSendOTP ? 'code' : emailMethod ? 'phone' : 'email'}
            placeholder={setPlaceholder}
            prefix={setPrefix}
            secureTextEntry={false}
            placeholderTextColor={colors.disabled}
          />

          <Gap height={34} />
          <Button
            disabled={isLoading}
            isLoading={isLoading}
            text={setButtonText}
            weight="600"
            onPress={onProcessAction}
            size="large"
          />

          <Gap height={34} />

          {!isSendOTP && (
            <Text style={styles.textSignIn}>
              With{' '}
              <TouchableOpacity disabled={isLoading} onPress={onWithPhone}>
                <Text style={styles.textWithPhone}>
                  {emailMethod ? 'Email' : 'Phone Number'}
                </Text>
              </TouchableOpacity>
            </Text>
          )}
        </View>
      );
    }
  };

  return (
    <AuthLayout>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Forgot password</Text>
          <Gap height={26} />
          <Text style={styles.description}>{setDescription}</Text>
        </View>
        <Gap height={40} />
        <FormProvider {...methods}>{renderComponent()}</FormProvider>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: scale(32),
    top: scale(240),
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: scale(20),
    fontWeight: '800',
  },
  description: {
    textAlign: 'center',
    marginTop: 4,
    color: colors.white,
    fontSize: scale(14),
    fontWeight: '600',
  },
  textForgotPassword: {
    color: colors.disabled,
    fontSize: scale(14),
  },
  textError: {
    color: colors.error,
    fontSize: scale(12),
  },
  textSignIn: {
    color: colors.white,
    fontWeight: '400',
    fontSize: scale(14),
    textAlign: 'center',
  },
  textWithPhone: {
    color: colors.primary,
    top: 3,
    fontWeight: '700',
  },
});

export default ForgotPasswordOrganism;
