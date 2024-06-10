import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CircleUserRound, LockKeyhole, Mail} from 'lucide-react-native';

import {Input, Button, Gap} from '../../../components/atoms';
import AuthLayout from '../../../layouts/AuthLayout';
import {colors} from '../../../constants';
import {AuthRoutes, navigate} from '../../../navigation';

const SignUpWithEmailOrganism = () => {
  const onNextVerify = useCallback(() => navigate(AuthRoutes.VERIFY_OTP), []);
  const onSignUpWithPhone = useCallback(
    () => navigate(AuthRoutes.SIGN_UP_PHONE),
    [],
  );

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
        <View>
          <Input
            placeholder="Username"
            prefix={<CircleUserRound color={colors.disabled} size={20} />}
            placeholderTextColor={colors.disabled}
          />
          <Gap height={16} />
          <Input
            placeholder="Email"
            prefix={<Mail color={colors.disabled} size={20} />}
            placeholderTextColor={colors.disabled}
          />
          <Gap height={16} />
          <Input
            placeholder="Password"
            prefix={<LockKeyhole color={colors.disabled} size={20} />}
            secureTextEntry
            placeholderTextColor={colors.disabled}
          />
          <Gap height={16} />
          <Input
            placeholder="Confirm Password"
            prefix={<LockKeyhole color={colors.disabled} size={20} />}
            placeholderTextColor={colors.disabled}
            secureTextEntry
          />
          <Gap height={10} />

          <Gap height={34} />
          <Button text="Next" onPress={onNextVerify} size="large" />
          <Gap height={34} />
          <Text style={styles.textSignIn}>
            With
            <TouchableOpacity onPress={onSignUpWithPhone}>
              <Text style={styles.textWithPhone}> Phone Number</Text>
            </TouchableOpacity>
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
    fontSize: 22,
    fontWeight: '800',
  },
  description: {
    textAlign: 'center',
    marginTop: 4,
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  textSignIn: {
    color: colors.white,
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
  },
  textWithPhone: {
    color: colors.primary,
    top: 3,
    fontWeight: '700',
  },
});

export default SignUpWithEmailOrganism;