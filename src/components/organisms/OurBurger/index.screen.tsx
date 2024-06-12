import React, {useCallback} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Search} from 'lucide-react-native';

import {Header} from '../../molecules';
import {colors} from '../../../constants';
import {MainLayout} from '../../../layouts';
import {Button, Gap, Input} from '../../atoms';
import {scale, scaleHeight} from '../../../utils';
import {navigate, AppDetailRoutes} from '../../../navigation';
import {FormProvider, useForm} from 'react-hook-form';

const LIST_MENU = [
  {
    id: 'meals',
    description: 'Burger, Fries, Drinks',
    name: 'Value meals',
    imagePath: 'menu-1.png',
    image: require('../../../assets/images/list-menus/menu-4.png'),
  },
  {
    id: 'salads',
    description: 'Vegetables, and Meat Beef',
    name: 'Salads / Sides',
    imagePath: 'menu-2.png',
    image: require('../../../assets/images/list-menus/menu-1.png'),
  },
  {
    id: 'dessert',
    description: 'Pancake, Sundae, Cake',
    name: 'Desserts',
    imagePath: 'menu-4.png',
    image: require('../../../assets/images/list-menus/menu-2.png'),
  },
  {
    id: 'baverages',
    description: 'Pepsi, CocaCola, Soft Drinks',
    name: 'Beverages',
    imagePath: 'menu-3.png',
    image: require('../../../assets/images/list-menus/menu-3.png'),
  },
];

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

  return (
    <MainLayout>
      <Header />
      <Gap height={8} />
      <View style={styles.container}>
        <FormProvider {...methods}>
          <Input
            name="search"
            style={styles.input}
            placeholder="Search for a Food"
            prefix={<Search color={colors.disabled} size={20} />}
            placeholderTextColor={colors.disabled}
          />
        </FormProvider>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHero}>
            <Image
              style={styles.imageHero}
              alt="image-ilustration-burger"
              source={require('../../../assets/images/hero-burger.png')}
            />
          </View>
          <Gap height={12} />
          <View style={styles.containerCard}>
            {LIST_MENU.map(item => {
              return (
                <Card
                  key={item.name}
                  onPress={() => onViewMenu(item)}
                  title={item.name}
                  image={item.image}
                />
              );
            })}
          </View>
          <Gap height={20} />
          <Button
            onPress={onBurgerMenu}
            text="Burger Menu"
            textStyle={styles.textBurgerMenuBtn}
            size="large"
          />
          <Gap height={20} />
        </ScrollView>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    overflow: 'hidden',
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
  containerCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
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
