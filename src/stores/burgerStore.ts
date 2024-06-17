import {ImageSourcePropType} from 'react-native';
import {create} from 'zustand';

export type FavoriteItem = {
  image: ImageSourcePropType;
  name: string;
  price: string;
  id: string;
  type?: string;
  count?: number;
};

export type CartItem = {
  image: ImageSourcePropType;
  name: string;
  price: string;
  count?: number;
  id: string;
  type?: string;
};

type BurgerStore = {
  favorites: FavoriteItem[];
  carts: CartItem[];
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: string) => void;
  addToCart: (item: CartItem) => void;
  increaseOrder: (id: string) => void;
  decreaseOrder: (id: string) => void;
  getSubTotal: () => number;
  getDeliveryFee: () => number;
  getTotalPayment: () => number;
  shouldShowBasket: () => boolean;
};

export const useBurgerStore = create<BurgerStore>((set, get) => ({
  favorites: [],
  carts: [],

  shouldShowBasket: () => get().carts.length > 0,

  getSubTotal: () => {
    const carts = get().carts;
    return carts.reduce(
      (total, cart) => total + (cart.count ?? 0) * Number(cart.price),
      0,
    );
  },

  getDeliveryFee: () => {
    const feeRate = 0.1;
    const unitCount = Math.floor(get().getSubTotal() / 10000);
    return unitCount * feeRate * 10000;
  },

  getTotalPayment: () => get().getSubTotal() + get().getDeliveryFee(),

  addFavorite: item => {
    const favorites = get().favorites;
    if (!favorites.some(fav => fav.id === item.id)) {
      set({favorites: [...favorites, item]});
    }
  },

  removeFavorite: id => {
    const favorites = get().favorites;
    set({favorites: favorites.filter(fav => fav.id !== id)});
  },

  addToCart: item => {
    const carts = get().carts;
    if (!carts.some(cart => cart.id === item.id)) {
      set({carts: [...carts, {...item, count: 1}]});
    }
  },

  increaseOrder: id => {
    const carts = get().carts;
    set({
      carts: carts.map(cart =>
        cart.id === id ? {...cart, count: (cart.count ?? 0) + 1} : cart,
      ),
    });
  },

  decreaseOrder: id => {
    const carts = get().carts;
    set({
      carts: carts
        .map(cart =>
          cart.id === id && (cart.count ?? 0) >= 1
            ? {...cart, count: (cart.count ?? 0) - 1}
            : cart,
        )
        .filter(cart => Number(cart.count) > 0),
    });
  },
}));
