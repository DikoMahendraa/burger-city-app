import {create} from 'zustand';
import {CartItem} from './burgerStore';

type ProfileState = {
  history: Array<CartItem>;
  addToHistory: (params: any) => void;
};

export const useProfileStore = create<ProfileState>((set, get) => ({
  history: [],
  addToHistory: params => {
    set({history: [...get().history, ...params]});
  },
}));
