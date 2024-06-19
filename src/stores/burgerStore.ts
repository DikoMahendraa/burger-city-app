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
  visible?: boolean;
  type?: string;
};

export type MealItem = {
  image: ImageSourcePropType;
  name: string;
  price: string;
  count?: number;
  id: string;
  type?: string;
  desserts?: Array<CartItem>;
};

type BurgerStore = {
  favorites: FavoriteItem[];
  carts: CartItem[];
  meals: MealItem;
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: string) => void;
  addToCart: (item: CartItem) => void;
  increaseOrder: (id: string) => void;
  decreaseOrder: (id: string) => void;
  addMeals: (item: MealItem) => void;
  getSubTotal: () => number;
  getDeliveryFee: () => number;
  getTotalPayment: () => number;
  shouldShowBasket: () => boolean;
  submitOrder: () => void;
  resetCart: () => void;
  statusPayment: 'pending' | 'success';
};

export const useBurgerStore = create<BurgerStore>((set, get) => ({
  favorites: [],
  carts: [],
  meals: {} as MealItem,
  statusPayment: 'pending',

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
    const isMeal = id?.includes('meals');
    const carts = get().carts;
    set({
      carts: carts.map(cart =>
        cart.id === id ? {...cart, count: (cart.count ?? 0) + 1} : cart,
      ),
      ...(isMeal
        ? {
            meals: {
              ...get().meals,
              count: Number(get().meals.count) + 1,
            },
          }
        : {}),
    });
  },

  decreaseOrder: id => {
    const isMeal = id?.includes('meals');
    const carts = get().carts;
    const moreThanOne = Number(get().meals?.count) > 1;

    set({
      carts: carts
        .map(cart =>
          cart.id === id && (cart.count ?? 0) >= 1
            ? {...cart, count: (cart.count ?? 0) - 1}
            : cart,
        )
        .filter(cart => Number(cart.count) > 0),
      ...(isMeal && moreThanOne
        ? {
            meals: {
              ...get().meals,
              count: Number(get().meals.count) - 1,
            },
          }
        : {}),
    });
  },

  submitOrder: () => {
    set({statusPayment: 'success'});
  },

  resetCart: () => {
    set({carts: [], statusPayment: 'pending'});
  },

  addMeals: meals => {
    const listCart = get()
      .carts?.flatMap(item => item)
      .filter(cart => meals.id === cart.id);

    if (listCart.length !== 0) {
      set({meals: {...meals, count: listCart[0].count || 1}});
    } else {
      set({meals: {...meals, count: 1}});
    }
  },
}));
