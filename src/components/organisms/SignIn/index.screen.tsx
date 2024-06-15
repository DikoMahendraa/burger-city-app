import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {LockKeyhole, Mail} from 'lucide-react-native';
import {FormProvider, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {scale} from '../../../utils';
import {colors} from '../../../constants';
import AuthLayout from '../../../layouts/AuthLayout';
import {AuthRoutes, navigate} from '../../../navigation';
import {signInSchema} from '../../../schema/authSchema';
import {useAuthStore, useGlobalStore} from '../../../stores';
import {Input, Button, Gap, RadioButton} from '../../../components/atoms';

type FormData = {
  password: string;
  email: string;
};

const SignInOrganism = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const {setLoading, isLoading} = useGlobalStore();
  const {setLogin} = useAuthStore();

  const methods = useForm<FormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = methods.handleSubmit(async ({email}) => {
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setLogin({email});
      setLoading(false);
    }
  });

  const onSignUp = useCallback(() => navigate(AuthRoutes.SIGN_UP_EMAIL), []);
  const onForgotPassword = useCallback(
    () => navigate(AuthRoutes.FORGOT_PASSWORD),
    [],
  );

  return (
    <AuthLayout>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.description}>Login to continue Burger City</Text>
        </View>
        <Gap height={40} />
        <FormProvider {...methods}>
          <View>
            <Input
              name="email"
              placeholder="Email Address"
              prefix={<Mail color={colors.disabled} size={20} />}
              placeholderTextColor={colors.disabled}
            />
            <Gap height={8} />
            <Input
              name="password"
              placeholder="Password"
              secureTextEntry
              prefix={<LockKeyhole color={colors.disabled} size={20} />}
              placeholderTextColor={colors.disabled}
            />
            <Gap height={10} />
            <View style={styles.formInput}>
              <RadioButton
                label="Remember me"
                onPress={() => setRememberMe(!rememberMe)}
                selected={rememberMe}
              />
              <Text style={{color: colors.white}} />
              <TouchableOpacity onPress={onForgotPassword}>
                <Text style={styles.textForgotPassword}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <Gap height={34} />
            <Button
              text="Sign In"
              weight="600"
              isLoading={isLoading}
              disabled={isLoading}
              onPress={onSubmit}
              size="large"
            />
            <Gap height={34} />
            <TouchableOpacity disabled={isLoading} onPress={onSignUp}>
              <Text style={styles.textSignIn}>New user? Sign up</Text>
            </TouchableOpacity>
            <Gap height={34} />
            <Text style={styles.textTnc}>
              By signing up you indicate that you have read and agreed to the
              Patch <Text style={styles.textToS}>Terms of Service</Text>
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
  textSignIn: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: scale(14),
    textAlign: 'center',
  },
  formInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTnc: {
    flexWrap: 'wrap',
    paddingHorizontal: scale(20),
    color: colors.white,
    fontWeight: '400',
    fontSize: scale(12),
    textAlign: 'center',
  },
  textToS: {
    fontWeight: '800',
  },
});

export default SignInOrganism;
