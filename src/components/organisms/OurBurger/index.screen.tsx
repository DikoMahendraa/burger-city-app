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

import {MainLayout} from '../../../layouts';
import {Header} from '../../molecules';
import {Button, Gap, Input} from '../../atoms';
import {colors} from '../../../constants';
import {scale, scaleHeight} from '../../../utils';
import {navigate, AppDetailRoutes} from '../../../navigation';

const LIST_MENU = [
  {
    name: 'Value meals',
    image: require('../../../assets/images/list-menus/menu-1.png'),
  },
  {
    name: 'Salads / Sides',
    image: require('../../../assets/images/list-menus/menu-2.png'),
  },
  {
    name: 'Beverages',
    image: require('../../../assets/images/list-menus/menu-3.png'),
  },
  {
    name: 'Desserts',
    image: require('../../../assets/images/list-menus/menu-4.png'),
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
  const onBurgerMenu = useCallback(
    () => navigate(AppDetailRoutes.DETAIL_BURGER_MENU),
    [],
  );

  return (
    <MainLayout>
      <Header />
      <Gap height={8} />
      <View style={styles.container}>
        <Input
          style={styles.input}
          placeholder="Search for a Food"
          prefix={<Search color={colors.disabled} size={20} />}
          placeholderTextColor={colors.disabled}
        />

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
                  onPress={() => ({})}
                  title={item.name}
                  image={item.image}
                />
              );
            })}
          </View>
          <Gap height={20} />
          <Button onPress={onBurgerMenu} text="Burger Menu" size="large" />
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
