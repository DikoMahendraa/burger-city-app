import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {LockKeyhole, Mail} from 'lucide-react-native';

import {Input, Button, Gap, RadioButton} from '../../../components/atoms';
import AuthLayout from '../../../layouts/AuthLayout';
import {colors} from '../../../constants';
import {AuthRoutes, navigate} from '../../../navigation';
import {useAuthStore} from '../../../stores';

const SignInOrganism = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const {login} = useAuthStore();

  const onLogin = useCallback(() => login('email', 'password'), [login]);
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
        <View>
          <Input
            placeholder="Email Address"
            prefix={<Mail color={colors.disabled} size={20} />}
            placeholderTextColor={colors.disabled}
          />
          <Gap height={8} />
          <Input
            placeholder="Password"
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
          <Button text="Sign In" onPress={onLogin} size="large" />
          <Gap height={34} />
          <TouchableOpacity onPress={onSignUp}>
            <Text style={styles.textSignIn}>New user? Sign up</Text>
          </TouchableOpacity>
          <Gap height={34} />
          <Text style={styles.textTnc}>
            By signing up you indicate that you have read and agreed to the
            Patch <Text style={styles.textToS}>Terms of Service</Text>
          </Text>
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 32,
    top: 240,
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 20,
    fontWeight: '800',
  },
  description: {
    textAlign: 'center',
    marginTop: 4,
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  textForgotPassword: {
    color: colors.disabled,
    fontSize: 14,
  },
  textSignIn: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
  },
  formInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTnc: {
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    color: colors.white,
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
  },
  textToS: {
    fontWeight: '800',
  },
});

export default SignInOrganism;
