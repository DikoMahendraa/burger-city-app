import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormProvider, useForm} from 'react-hook-form';
import {ClipboardPen} from 'lucide-react-native';

import {scale} from '../../../utils';
import {colors} from '../../../constants';
import AuthLayout from '../../../layouts/AuthLayout';
import {AuthRoutes, navigate} from '../../../navigation';
import {Input, Button, Gap} from '../../../components/atoms';
import {useAuthStore, useGlobalStore} from '../../../stores';
import {verifyOTPSchema} from '../../../schemas/authSchema';

const VerificationOTPOrganism = () => {
  const methods = useForm<{code: string}>({
    resolver: zodResolver(verifyOTPSchema),
  });
  const {
    users: {phone},
  } = useAuthStore();
  const {isLoading, setLoading} = useGlobalStore();

  const onVerifyCode = methods.handleSubmit(async () => {
    setLoading(true);

    try {
      await new Promise(() =>
        setTimeout(() => {
          setLoading(false);
          navigate(AuthRoutes.SIGN_IN);
        }, 2000),
      );
    } finally {
      setLoading(false);
    }
  });

  return (
    <AuthLayout>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Enter Verif Code</Text>
          <Gap height={12} />
          <Text style={styles.description}>
            For your security, a Verification Code has been sent to your{' '}
            {phone ? 'phone number' : 'email address'}. Please enter it below to
            continue.
          </Text>
        </View>
        <Gap height={40} />
        <FormProvider {...methods}>
          <View>
            <Input
              name="code"
              placeholder="Code OTP"
              prefix={<ClipboardPen color={colors.disabled} size={20} />}
              placeholderTextColor={colors.disabled}
            />

            <Gap height={34} />
            <Button
              text="Verify"
              weight="600"
              disabled={isLoading}
              isLoading={isLoading}
              onPress={onVerifyCode}
              size="large"
            />
          </View>
        </FormProvider>
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
    fontSize: scale(22),
    fontWeight: '800',
  },
  description: {
    textAlign: 'center',
    marginTop: 4,
    color: colors.white,
    fontSize: scale(16),
    fontWeight: '400',
  },
});

export default VerificationOTPOrganism;
