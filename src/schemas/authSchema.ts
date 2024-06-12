import {z} from 'zod';

export const signInSchema = z.object({
  email: z.string().email().min(1, {message: 'email is required'}),
  password: z.string().min(1, {message: 'passsword is required'}),
});

export const signUpEmailSchema = z
  .object({
    username: z.string().min(1, {message: 'Username is required'}),
    email: z
      .string()
      .email({message: 'Invalid email'})
      .min(1, {message: 'Email is required'}),
    password: z.string().min(1, {message: 'Password is required'}),
    confirm_password: z
      .string()
      .min(1, {message: 'Confirm password is required'}),
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
