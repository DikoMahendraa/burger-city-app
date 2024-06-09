import React, {useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ClipboardPen} from 'lucide-react-native';

import {Input, Button, Gap} from '../../components/atoms';
import AuthLayout from '../../layouts/AuthLayout';
import {colors} from '../../constants';
import {AuthRoutes, navigate} from '../../navigation';

const VerificationOTPScreen = () => {
  const onLogin = useCallback(() => navigate(AuthRoutes.SIGN_IN), []);

  return (
    <AuthLayout>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Enter Verif Code</Text>
          <Gap height={12} />
          <Text style={styles.description}>
            For your security, a Verification Code has been sent to your email
            address. Please enter it below to continue.
          </Text>
        </View>
        <Gap height={40} />
        <View>
          <Input
            placeholder="Code OTP"
            prefix={<ClipboardPen color={colors.disabled} size={20} />}
            placeholderTextColor={colors.disabled}
          />

          <Gap height={34} />
          <Button text="Verify" onPress={onLogin} size="large" />
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
    fontWeight: '400',
  },
});

export default VerificationOTPScreen;
