import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ClipboardPen, LockKeyhole, Mail} from 'lucide-react-native';

import {Input, Button, Gap} from '../../../components/atoms';
import AuthLayout from '../../../layouts/AuthLayout';
import {colors} from '../../../constants';
import {AuthRoutes, navigate} from '../../../navigation';
import {scale} from '../../../utils';

const ForgotPasswordOrganism = () => {
  const [input, setInput] = useState<string>();
  const [textSendTo, setTextSendTo] = useState<string>();
  const [sendVerification, setSendVerification] = useState<boolean>(false);
  const [withPhone, setWithPhone] = useState<boolean>(false);
  const [passNotMatch, setPassNotMatch] = useState<boolean>(false);
  const [password, setPassword] = useState<{new: string; confirm: string}>({
    new: '',
    confirm: '',
  });
  const [isCreateNewPassword, setIsCreateNewPassword] =
    useState<boolean>(false);

  const onProcess = useCallback(() => {
    setTextSendTo(input);

    if (input) {
      setSendVerification(true);
      setInput('');
    } else {
      setSendVerification(false);
    }
  }, [input]);

  const onVerify = useCallback(() => {
    setIsCreateNewPassword(true);
  }, []);

  const onSubmit = useCallback(() => {
    if (password.new === password.confirm) {
      navigate(AuthRoutes.SIGN_IN);
      setPassNotMatch(false);
    } else {
      setPassNotMatch(true);
    }
  }, [password.confirm, password.new]);

  const onWithPhone = useCallback(() => {
    setWithPhone(!withPhone);
  }, [withPhone]);

  const onChangeValue = useCallback((event: string) => setInput(event), []);

  const onChangePassword = useCallback((event: string, name?: string) => {
    setPassword(prev => ({
      ...prev,
      [name as string]: event,
    }));
  }, []);

  const setButtonText = (() => (sendVerification ? 'Verify' : 'Process'))();

  const setOnProcess = (() => (sendVerification ? onVerify : onProcess))();

  const setPlaceholder = (() => {
    if (sendVerification) {
      return 'Code OTP';
    } else {
      if (withPhone) {
        return 'Phone number';
      } else {
        return 'Email address';
      }
    }
  })();

  const setPrefix = (() =>
    sendVerification ? (
      <ClipboardPen color={colors.disabled} size={20} />
    ) : (
      <Mail color={colors.disabled} size={20} />
    ))();

  const setDescription = (() => {
    if (isCreateNewPassword) {
      return 'Please enter a new password and confirm the password';
    } else {
      return sendVerification
        ? `A text message with a 4-digit verification code was just sent to ${textSendTo}`
        : `For your security, a one time password has been sent to your ${
            withPhone ? 'phone number' : 'email address'
          }. Please enter it below to continue.`;
    }
  })();

  const renderComponent = () => {
    if (isCreateNewPassword) {
      return (
        <View>
          <Input
            onChangeText={text => onChangePassword(text, 'new')}
            placeholder="New password"
            prefix={<LockKeyhole color={colors.disabled} size={20} />}
            placeholderTextColor={colors.disabled}
            secureTextEntry
          />
          <Gap height={12} />
          <Input
            onChangeText={text => onChangePassword(text, 'confirm')}
            placeholder="Confirm Password"
            secureTextEntry
            prefix={<LockKeyhole color={colors.disabled} size={20} />}
            placeholderTextColor={colors.disabled}
          />
          <Gap height={2} />
          <Text style={styles.textError}>
            {passNotMatch && 'Passwords do not match. Please try again.'}
          </Text>

          <Gap height={34} />
          <Button text="Submit" onPress={onSubmit} size="large" />
        </View>
      );
    } else {
      return (
        <View>
          <Input
            value={input}
            onChangeText={onChangeValue}
            placeholder={setPlaceholder}
            prefix={setPrefix}
            placeholderTextColor={colors.disabled}
          />

          <Gap height={34} />
          <Button
            disabled={!input}
            text={setButtonText}
            onPress={setOnProcess}
            size="large"
          />

          <Gap height={34} />

          {!sendVerification && (
            <Text style={styles.textSignIn}>
              With{' '}
              <TouchableOpacity onPress={onWithPhone}>
                <Text style={styles.textWithPhone}>
                  {withPhone ? 'Email' : 'Phone Number'}
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
        {renderComponent()}
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
