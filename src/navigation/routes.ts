export const AppRoutes = {
  HOME: 'HOME',
  PROFILE: 'PROFILE',
} as const;

export const AuthRoutes = {
  SIGN_IN: 'SIGN_IN',
  INTRO: 'INTRO',
  SIGN_UP_EMAIL: 'SIGN_UP_EMAIL',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  SIGN_UP_PHONE: 'SIGN_UP_PHONE',
  VERIFY_OTP: 'VERIFY_OTP',
} as const;

export type TAuthRoutes = keyof typeof AuthRoutes | keyof typeof AppRoutes;
