import {create} from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>(set => ({
  isAuthenticated: true,
  login: (email, password) => {
    console.log('Logging in with:', email, password);
    set({isAuthenticated: true});
  },
  logout: () => {
    console.log('Logging out');
    set({isAuthenticated: false});
  },
}));
