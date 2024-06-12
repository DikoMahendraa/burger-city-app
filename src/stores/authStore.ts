import {create} from 'zustand';

type ParamsLogin = {
  email: string;
  username?: string;
};

type AuthState = {
  isAuthenticated: boolean;
  users: {
    email: undefined | string;
    username?: undefined | string;
  };
  setLogin: (params: ParamsLogin) => void;
  setRegister: (params: ParamsLogin) => void;
  setLogout: () => void;
};

export const useAuthStore = create<AuthState>(set => ({
  isAuthenticated: false,
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
  setRegister: ({username, email}) => {
    set({users: {username, email}, isAuthenticated: false});
  },
}));
