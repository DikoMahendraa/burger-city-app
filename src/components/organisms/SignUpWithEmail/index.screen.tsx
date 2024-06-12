import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CircleUserRound, LockKeyhole, Mail} from 'lucide-react-native';
import {FormProvider, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {scale} from '../../../utils';
import {colors} from '../../../constants';
import AuthLayout from '../../../layouts/AuthLayout';
import {AuthRoutes, navigate} from '../../../navigation';
import {Input, Button, Gap} from '../../../components/atoms';
import {signUpEmailSchema} from '../../../schemas/authSchema';
import {useAuthStore, useGlobalStore} from '../../../stores';

type FormData = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};

const SignUpWithEmailOrganism = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(signUpEmailSchema),
  });
  const {isLoading, setLoading} = useGlobalStore();
  const {setRegister} = useAuthStore();
  const onSignUpWithPhone = useCallback(
    () => navigate(AuthRoutes.SIGN_UP_PHONE),
    [],
  );

  const onSubmit = methods.handleSubmit(async ({email, username}) => {
    setLoading(true);

    try {
      await new Promise(() =>
        setTimeout(() => {
          setLoading(false);
          setRegister({email, username});
          navigate(AuthRoutes.VERIFY_OTP);
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
          <Text style={styles.title}>Sign Up</Text>
          <Gap height={12} />
          <Text style={styles.description}>
            Create Your Burger City Account
          </Text>
        </View>
        <Gap height={40} />
        <FormProvider {...methods}>
          <View>
            <Input
              name="username"
              placeholder="Username"
              prefix={<CircleUserRound color={colors.disabled} size={20} />}
              placeholderTextColor={colors.disabled}
            />
            <Gap height={16} />
            <Input
              name="email"
              placeholder="Email"
              prefix={<Mail color={colors.disabled} size={20} />}
              placeholderTextColor={colors.disabled}
            />
            <Gap height={16} />
            <Input
              name="password"
              placeholder="Password"
              prefix={<LockKeyhole color={colors.disabled} size={20} />}
              secureTextEntry
              placeholderTextColor={colors.disabled}
            />
            <Gap height={16} />
            <Input
              name="confirm_password"
              placeholder="Confirm Password"
              prefix={<LockKeyhole color={colors.disabled} size={20} />}
              placeholderTextColor={colors.disabled}
              secureTextEntry
            />
            <Gap height={10} />

            <Gap height={34} />
            <Button
              weight="600"
              text="Next"
              isLoading={isLoading}
              disabled={isLoading}
              onPress={onSubmit}
              size="large"
            />
            <Gap height={34} />
            <Text style={styles.textSignIn}>
              With
              <TouchableOpacity
                disabled={isLoading}
                onPress={onSignUpWithPhone}>
                <Text style={styles.textWithPhone}> Phone Number</Text>
              </TouchableOpacity>
            </Text>
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
    fontWeight: '600',
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

export default SignUpWithEmailOrganism;
