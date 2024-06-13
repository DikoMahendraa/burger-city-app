import {create} from 'zustand';

type ParamsLogin = {
  email?: string;
  username?: string;
  phone?: string;
};

type AuthState = {
  isAuthenticated: boolean;
  users: {
    email: undefined | string;
    username?: undefined | string;
    phone?: undefined | string;
  };
  setLogin: (params: ParamsLogin) => void;
  setRegister: (params: ParamsLogin) => void;
  setLogout: () => void;
};

export const useAuthStore = create<AuthState>(set => ({
  isAuthenticated: true,
  users: {email: ''},
  setLogin: ({email}) => {
    set({isAuthenticated: true, users: {email}});
  },
  setLogout: () => {
    set({
      isAuthenticated: false,
      users: {email: undefined, username: undefined},
    });
  },
  setRegister: ({username, email, phone}) => {
    set({users: {username, email, phone}, isAuthenticated: false});
  },
}));
