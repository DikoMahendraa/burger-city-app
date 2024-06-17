import React, {useCallback, useMemo} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Search} from 'lucide-react-native';
import {FormProvider, useForm} from 'react-hook-form';

import {MainLayout} from '../../../layouts';
import {Button, Gap, Input} from '../../atoms';
import {useBurgerStore} from '../../../stores';
import {scale, scaleHeight} from '../../../utils';
import {LIST_MENU, colors} from '../../../constants';
import {Header, FloatingBasket} from '../../molecules';
import {navigate, AppDetailRoutes} from '../../../navigation';

const Card = ({
  title,
  image,
  onPress,
}: {
  title: string;
  onPress: () => void;
  image: ImageSourcePropType;
}) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <Image
      style={styles.cardHero}
      alt={`ilustration-${title}`}
      source={image}
    />
    <Text style={styles.cardLabel}>{title}</Text>
  </TouchableOpacity>
);

const OurBurgerOrganism: React.FC = () => {
  const methods = useForm<{search: string}>();
  const {carts, shouldShowBasket} = useBurgerStore();
  const totalCart = useMemo(
    () =>
      carts
        ?.flatMap(item => Number(item?.price))
        .reduce((acc, cur) => acc + cur, 0),
    [carts],
  );

  const onBurgerMenu = useCallback(
    () =>
      navigate(AppDetailRoutes.DETAIL_BURGER_MENU, {
        name: 'Burger Menu',
        description: 'Chess, Beef, Spicy ',
        id: 'burger',
      }),
    [],
  );

  const onViewMenu = useCallback((props: any) => {
    navigate(AppDetailRoutes.DETAIL_BURGER_MENU, {...props});
  }, []);

  const onViewCart = useCallback(() => {
    navigate(AppDetailRoutes.DETAIL_CART);
  }, []);

  return (
    <MainLayout>
      <Header />
      <View style={styles.container}>
        <FlatList
          data={LIST_MENU}
          ListHeaderComponent={
            <>
              <FormProvider {...methods}>
                <Input
                  name="search"
                  style={styles.input}
                  placeholder="Search for a Food"
                  prefix={<Search color={colors.disabled} size={20} />}
                  placeholderTextColor={colors.disabled}
                />
              </FormProvider>

              <View style={styles.containerHero}>
                <Image
                  style={styles.imageHero}
                  alt="image-ilustration-burger"
                  source={require('../../../assets/images/hero-burger.png')}
                />
              </View>
            </>
          }
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.gap}
          renderItem={({item}) => (
            <>
              <Card
                key={item.name}
                onPress={() => onViewMenu(item)}
                title={item.name}
                image={item.image}
              />
            </>
          )}
          ListFooterComponent={
            <>
              <Gap height={30} />
              <Button
                onPress={onBurgerMenu}
                text="Burger Menu"
                weight="600"
                textStyle={styles.textBurgerMenuBtn}
                size="large"
              />
              <Gap height={160} />
            </>
          }
        />
        {shouldShowBasket() && (
          <FloatingBasket
            onPress={onViewCart}
            rootStyle={styles.resetPaddingBottom}
            length={String(carts?.length)}
            total={Number(totalCart)}
          />
        )}
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    position: 'relative',
  },
  gap: {
    gap: scale(14),
  },
  resetPaddingBottom: {
    right: 0,
    left: 0,
    bottom: 50,
    paddingBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageHero: {
    objectFit: 'cover',
    height: scaleHeight(193),
    width: '100%',
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  input: {
    borderColor: colors['gray-05'],
    borderWidth: 1,
    marginBottom: 12,
  },
  textBurgerMenuBtn: {
    fontWeight: '700',
  },
  containerHero: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    borderRadius: 8,
    width: '48%',
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scale(20),
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 4,
    shadowOffset: {width: 0, height: 2},
  },
  cardHero: {
    height: scaleHeight(80),
    width: scale(80),
    objectFit: 'contain',
  },
  cardLabel: {
    fontWeight: '600',
    fontSize: scale(16),
    color: colors.dark,
  },
});

export default OurBurgerOrganism;
