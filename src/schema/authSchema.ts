import {z} from 'zod';

const emailValidation = {
  email: z
    .string({message: 'email is required'})
    .email()
    .min(1, {message: 'email is required'}),
};

const passwordValidation = {
  password: z
    .string({message: 'Password is required'})
    .min(1, {message: 'Password is required'}),
  confirm_password: z
    .string({message: 'Confirm password is required'})
    .min(1, {message: 'Confirm password is required'}),
};

export const signInSchema = z.object({
  password: passwordValidation.password,
  ...emailValidation,
});

const phoneValidation = {
  phone: z
    .string({message: 'Phone number is required'})
    .min(1, {message: 'Phone number is required'})
    .min(10, {message: 'Phone must be at least 10 digits long'})
    .max(15, {message: 'Phone must be at most 15 digits long'})
    .regex(/^[0-9]+$/, {message: 'Phone must contain only digits'}),
};

export const signUpEmailSchema = z
  .object({
    username: z
      .string({message: 'Username is required'})
      .min(1, {message: 'Username is required'}),
    ...emailValidation,
    ...passwordValidation,
  })
  .refine(data => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ['confirm_password'],
  });

export const signUpPhoneSchema = z
  .object({
    ...phoneValidation,
    ...passwordValidation,
  })
  .refine(data => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ['confirm_password'],
  });

export const verifyOTPSchema = z.object({
  code: z
    .string()
    .min(1, {message: 'please enter your OTP code'})
    .max(4, {message: 'Invalid code OTP'}),
});

export const forgotPasswordSchema = z
  .object({
    email: z
      .string()
      .email({message: 'Invalid email'})
      .min(1, {message: 'email is required'})
      .optional(),
    code: z
      .string()
      .min(1, {message: 'please enter your OTP code'})
      .max(4, {message: 'Invalid code OTP'})
      .optional(),
    phone: z
      .string()
      .min(10, {message: 'Phone must be at least 10 digits long'})
      .max(15, {message: 'Phone must be at most 15 digits long'})
      .regex(/^[0-9]+$/, {message: 'Phone must contain only digits'})
      .optional(),
  })
  .refine(data => data.email || data.phone, {
    message: 'Either email or phone must be provided',
    path: ['phone', 'email'],
  });

export const confirmPasswordValidation = z
  .object({
    ...passwordValidation,
  })
  .refine(data => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ['confirm_password'],
  });
