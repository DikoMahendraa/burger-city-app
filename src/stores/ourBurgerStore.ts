import {ImageSourcePropType} from 'react-native';
import {create} from 'zustand';

export type TFavorites = {
  image: ImageSourcePropType;
  name: string;
  price: string;
  id: string;
  type?: string;
  count?: number;
};

export type TCarts = {
  image: ImageSourcePropType;
  name: string;
  price: string;
  count?: number;
  id: string;
  type?: string;
};

type TOurBurgerStore = {
  favorites?: Array<TFavorites>;
  carts?: Array<TCarts>;
  setFavorites: (payload: TFavorites) => void;
  setCarts: (payload: TCarts) => void;
  setRemoveFavorite: (id: string) => void;
  setIncreaseOrder: (payload: TCarts) => void;
  setDecreaseOrder: (payload: TCarts) => void;
  subTotal: () => number;
  deliveryFee: () => number;
  totalPayment: () => number;
  showBasket: () => boolean;
};

export const useOurBurgerStore = create<TOurBurgerStore>((set, get) => ({
  favorites: [],
  carts: [],
  showBasket: () => {
    const showBasket = Boolean((get().carts?.length as number) > 0);
    return showBasket;
  },

  subTotal: () => {
    const accumulate = get().carts?.flatMap(
      cart => Number(cart?.count) * Number(cart?.price),
    );
    const calculate = accumulate?.reduce((prev, cur) => prev + cur, 0);

    return Number(calculate);
  },

  deliveryFee: () => {
    const feeRate = 0.1;
    const unitCount = Math.floor(get().subTotal() / 10000);
    const deliveryFee = unitCount * feeRate * 10000;
    return deliveryFee;
  },

  totalPayment: () => {
    const payment = get().deliveryFee() + get().subTotal();
    return payment;
  },

  setFavorites: ({...props}) => {
    const existingCart = get().favorites;
    const itemExists = existingCart?.some(
      item => item?.id === props.id,
    ) as boolean;

    if (!itemExists) {
      set({
        favorites: [...(get()?.favorites as Array<TFavorites>), {...props}],
      });
    }
  },

  setRemoveFavorite: id => {
    const favorites = get().favorites;
    const findIndex = favorites?.findIndex(item => item.id === id);

    if (findIndex !== -1) {
      const newCarts = [...(favorites as Array<TFavorites>)];
      newCarts.splice(Number(findIndex), 1);
      set({
        favorites: newCarts,
      });
    }
  },

  setCarts: ({...props}) => {
    const existingCart = get().carts;
    const itemExists = existingCart?.some(
      item => item?.id === props.id,
    ) as boolean;

    if (!itemExists) {
      set({
        carts: [...(existingCart as Array<TCarts>), {...props}],
      });
    }
  },

  setIncreaseOrder: ({...props}) => {
    const existingCart = get().carts;

    const updatedCart = existingCart?.map(item => {
      if (item?.id === props.id) {
        return {...item, count: Number(item?.count) + 1};
      }
      return item;
    });

    const itemExists = existingCart?.some(item => item.id === props.id);

    if (!itemExists) {
      updatedCart?.push({...props, count: 1});
    }

    set({carts: updatedCart});
  },

  setDecreaseOrder: ({...props}) => {
    const existingCart = get().carts;

    const updateCart = existingCart
      ?.map(item => {
        if (item.id === props.id) {
          if (Number(item.count) > 1) {
            return {...item, count: (item?.count as number) - 1};
          } else {
            return {...item, count: 0};
          }
        }
        return item;
      })
      .filter(item => Number(item?.count) > 0);

    console.log(updateCart);
    set({carts: updateCart as Array<TCarts>});
  },
}));
