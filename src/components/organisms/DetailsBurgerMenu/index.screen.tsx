import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {ArrowLeft} from 'lucide-react-native';

import {Gap, Label} from '../../atoms';
import {scale, scaleHeight} from '../../../utils';
import {useOurBurgerStore} from '../../../stores';
import {FloatingBasket, CardBurgerItem} from '../../molecules';
import {TCarts, TFavorites} from '../../../stores/ourBurgerStore';
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
    setFavorites,
    setDecreaseOrder,
    setIncreaseOrder,
    setRemoveFavorite,
    favorites,
    setCarts,
    carts,
  } = useOurBurgerStore();

  const listFavorites = favorites?.flatMap(item => item.id);
  const listCarts = carts?.flatMap(cart => cart.id);

  const hasCarts = Number(carts?.length) >= 1;
  const totalCart = useMemo(
    () =>
      carts
        ?.flatMap(item => Number(item.price))
        .reduce((acc, cur) => acc + cur, 0),
    [carts],
  );
  const hasSelected = useCallback(
    (params: string) => listFavorites?.includes(params),
    [listFavorites],
  );

  const onBack = useCallback(() => navigate(AppRoutes.OUR_BURGER), []);

  const onViewMenu = useCallback(
    (items: TFavorites) => {
      if (hasSelected(items.id)) {
        setRemoveFavorite(items.id);
      } else {
        setFavorites({
          id: items.id,
          image: items.image,
          name: items.name,
          price: items.price,
          type: items.type,
        });
      }
    },
    [hasSelected, setFavorites, setRemoveFavorite],
  );

  const onAddMenu = useCallback(
    (items: TCarts) => {
      setCarts({
        id: items.id,
        image: items.image,
        name: items.name,
        price: items.price,
        type: items.type,
        count: 1,
      });
    },
    [setCarts],
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
              selected={hasSelected(item.id)}
              onPressIcon={() =>
                onViewMenu({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: item.image,
                  type: item.type,
                })
              }
              onPressButton={() =>
                onAddMenu({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: item.image,
                  type: item.type,
                })
              }
              count={carts?.flatMap(k => k.id === item.id && k.count)}
              textButton="Add +"
              textButtonStyle={styles.fontSmall}
              onDecrease={() => setDecreaseOrder(item)}
              onIncrease={() => setIncreaseOrder(item)}
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
                <Label variant="large" weight="semibold" customText={name} />
                <Gap height={8} />
                <Label
                  variant="normal"
                  color={colors.disabledSoft}
                  customText={description}
                />
              </View>
              <Gap height={16} />
              <View style={styles.dashedLine} />
              <Gap height={16} />
              <View>
                <View style={styles.row}>
                  <Label variant="small" customText="Delivery cost" />
                  <Label
                    variant="normal"
                    weight="semibold"
                    color={colors.primary}
                    customText="Rp 15.000"
                  />
                </View>
                <Gap height={12} />
                <View style={styles.row}>
                  <Label
                    variant="small"
                    customText="Check for available promos"
                  />

                  <Label
                    variant="normal"
                    weight="semibold"
                    color={colors.primary}
                    customText="See Promos"
                  />
                </View>
              </View>
            </View>
            <Gap height={12} />
            <View style={styles.containerListItem}>
              <Label
                weight="semibold"
                variant="normal"
                customText="Item List"
              />
              <Gap height={12} />
            </View>
          </>
        }
      />

      {hasCarts && (
        <FloatingBasket
          onPress={onViewCart}
          length={String(carts?.length)}
          total={Number(totalCart)}
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
