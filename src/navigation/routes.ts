export const AppRoutes = {
  HOME: 'HOME',
  BOTTOM_NAVIGATION: 'BOTTOM_NAVIGATION',
  PROFILE: 'PROFILE',
  OUR_BURGER: 'OUR_BURGER',
  FAVORITES: 'FAVORITES',
} as const;

export const AppDetailRoutes = {
  DETAIL_BURGER_MENU: 'DETAIL_BURGER_MENU',
  DETAIL_BURGER_MEALS: 'DETAIL_BURGER_MEALS',
} as const;

export const AuthRoutes = {
  SIGN_IN: 'SIGN_IN',
  INTRO: 'INTRO',
  SIGN_UP_EMAIL: 'SIGN_UP_EMAIL',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  SIGN_UP_PHONE: 'SIGN_UP_PHONE',
  VERIFY_OTP: 'VERIFY_OTP',
} as const;

export type TAuthRoutes =
  | keyof typeof AuthRoutes
  | keyof typeof AppRoutes
  | keyof typeof AppDetailRoutes;
