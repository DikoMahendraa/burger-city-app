import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useCallback} from 'react';
import {ArrowLeft} from 'lucide-react-native';

import {Gap, Label} from '../../atoms';
import {useBurgerStore} from '../../../stores';
import {scale, scaleHeight} from '../../../utils';
import {CartItem} from '../../../stores/burgerStore';
import {FloatingBasket, CardBurgerItem} from '../../molecules';
import {AppDetailRoutes, AppRoutes, navigate} from '../../../navigation';
import {LIST_ITEMS, SWITCH_HERO_IMAGE, colors} from '../../../constants';

const DetailsBurgerMenuOrganism: React.FC<{
  route: {
    params: {
      name: string;
      description: string;
      id: keyof typeof SWITCH_HERO_IMAGE;
    };
  };
}> = ({route}) => {
  const {id, name, description} = route.params || {};
  const hasViewMenu = id.includes('meals');
  const {
    addFavorite,
    decreaseOrder,
    increaseOrder,
    removeFavorite,
    favorites,
    addToCart,
    carts,
    shouldShowBasket,
    addMeals,
  } = useBurgerStore();

  const listFavorites = favorites?.flatMap(item => item.id);
  const listCarts = carts?.flatMap(cart => cart?.id);
  const totalAmount = carts
    ?.flatMap(cart => cart?.price)
    ?.reduce((acc, cur) => Number(acc) + Number(cur), 1);
  const numberOrder = (menuId: string) =>
    carts?.find(cart => cart?.id === menuId && cart?.count);

  const hasSelected = useCallback(
    (params: string) => listFavorites?.includes(params),
    [listFavorites],
  );

  const onBack = useCallback(() => navigate(AppRoutes.OUR_BURGER), []);

  const onViewMenu = useCallback(
    (items: CartItem) => {
      if (items.type === 'meals') {
        addMeals(items);
        navigate(AppDetailRoutes.DETAIL_BURGER_MEALS);
      } else {
        if (hasSelected(items.id)) {
          removeFavorite(items.id);
        } else {
          addFavorite({
            id: items.id,
            image: items.image,
            name: items.name,
            price: items.price,
            type: items.type,
          });
        }
      }
    },
    [hasSelected, addMeals, removeFavorite, addFavorite],
  );

  const onAddMenu = useCallback(
    (items: CartItem) => {
      addToCart({
        id: items.id,
        image: items.image,
        name: items.name,
        price: items.price,
        type: items.type,
        count: 1,
      });
    },
    [addToCart],
  );

  const onViewCart = useCallback(() => {
    navigate(AppDetailRoutes.DETAIL_CART);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={LIST_ITEMS[id]}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.containerCard}>
            <CardBurgerItem
              hasButton={!listCarts?.includes(item.id)}
              hasButtonIncrease={listCarts?.includes(item.id)}
              name={item.name}
              image={item.image}
              price={item.price}
              hasDetail={hasViewMenu}
              selected={hasSelected(item?.id)}
              onPressIcon={() => onViewMenu({...item})}
              onPressButton={() =>
                onAddMenu({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: item.image,
                  type: item.type,
                })
              }
              count={numberOrder(item.id)?.count}
              textButton="Add +"
              textButtonStyle={styles.fontSmall}
              onDecrease={() => decreaseOrder(item.id)}
              onIncrease={() => increaseOrder(item.id)}
            />
            <Gap height={8} />
          </View>
        )}
        contentContainerStyle={styles.containerContent}
        ListHeaderComponent={
          <>
            <ImageBackground
              source={SWITCH_HERO_IMAGE[id]}
              style={styles.heroImg}>
              <TouchableOpacity onPress={onBack} style={styles.buttonBack}>
                <ArrowLeft color={colors.primary} />
              </TouchableOpacity>
            </ImageBackground>
            <View style={styles.containerDescription}>
              <View>
                <Label size="lg" weight="semibold" text={name} />
                <Gap height={8} />
                <Label color={colors.disabledSoft} text={description} />
              </View>
              <Gap height={16} />
              <View style={styles.dashedLine} />
              <Gap height={16} />
              <View>
                <View style={styles.row}>
                  <Label size="sm" text="Delivery cost" />
                  <Label
                    weight="semibold"
                    color={colors.primary}
                    text="Rp 15.000"
                  />
                </View>
                <Gap height={12} />
                <View style={styles.row}>
                  <Label size="sm" text="Check for available promos" />

                  <Label
                    weight="semibold"
                    color={colors.primary}
                    text="See Promos"
                  />
                </View>
              </View>
            </View>
            <Gap height={12} />
            <View style={styles.containerListItem}>
              <Label weight="semibold" text="Item List" />
              <Gap height={12} />
            </View>
          </>
        }
      />

      {shouldShowBasket() && (
        <FloatingBasket
          onPress={onViewCart}
          length={String(carts?.length)}
          total={Number(totalAmount)}
        />
      )}
    </View>
  );
};

export default DetailsBurgerMenuOrganism;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  heroImg: {
    height: scaleHeight(300),
    width: '100%',
  },
  fontSmall: {
    fontSize: scale(12),
  },
  buttonBack: {
    zIndex: 10,
    position: 'absolute',
    top: scale(80),
    left: scale(24),
    backgroundColor: colors.white,
    opacity: 0.8,
    width: scale(40),
    height: scaleHeight(40),
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDescription: {
    padding: scale(24),
  },
  containerCard: {
    paddingHorizontal: 12,
  },
  dashedLine: {
    width: '100%',
    height: 1,
    borderWidth: 1,
    borderColor: colors['gray-05'],
    borderStyle: 'dashed',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerContent: {
    paddingBottom: scale(100),
    backgroundColor: colors.white,
  },
  containerListItem: {
    paddingHorizontal: scale(24),
  },
});
