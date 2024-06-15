import {ImageSourcePropType} from 'react-native';
import {create} from 'zustand';

export type TFavorites = {
  image: ImageSourcePropType;
  name: string;
  price: string;
  id: string;
  type?: string;
};

export type TCarts = {
  image: ImageSourcePropType;
  name: string;
  price: string;
  id: string;
  type?: string;
};

type TOurBurgerStore = {
  favorites?: Array<TFavorites>;
  carts?: Array<TCarts>;
  setFavorites: (payload: TFavorites) => void;
  setCarts: (payload: TCarts) => void;
  setRemoveFavorite: (id: string) => void;
};

export const useOurBurgerStore = create<TOurBurgerStore>((set, get) => ({
  favorites: [],
  carts: [],
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
        carts: [...(get()?.carts as Array<TCarts>), {...props}],
      });
    }
  },
}));
