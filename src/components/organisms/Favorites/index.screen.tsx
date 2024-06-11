import React from 'react';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';

import {MainLayout} from '../../../layouts';
import {Gap, Label} from '../../../components/atoms';
import {colors} from '../../../constants';
import {CardBurgerItem, Header} from '../../../components/molecules';
import {scale, scaleHeight} from '../../../utils';

const LIST_FAVORITES = [
  {
    name: 'Cheesy Burger',
    price: '49.500',
    image: require('../../../assets/images/burger-menu/menu-1.png'),
  },
  {
    name: 'Chicken Big Burger',
    price: '49.500',
    image: require('../../../assets/images/burger-menu/menu-3.png'),
  },
  {
    name: 'Beef Burger',
    price: '49.500',
    image: require('../../../assets/images/burger-menu/menu-2.png'),
  },
  {
    name: 'Specials Big Burger',
    price: '49.500',
    image: require('../../../assets/images/burger-menu/menu-1.png'),
  },
];

const FavoriteOrganism: React.FC = () => {
  const hasFavorite = true;

  return (
    <MainLayout>
      <Header isBack />
      <View style={styles.container}>
        <Label customText="Favorites" variant="large" weight="semibold" />
        <Gap height={30} />
        {hasFavorite ? (
          <FlatList
            data={LIST_FAVORITES}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <>
                <CardBurgerItem
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
                <Gap height={12} />
              </>
            )}
          />
        ) : (
          <View style={styles.containerContain}>
            <Image
              style={styles.image}
              alt="ill-empty-favorite"
              source={require('../../../assets/images/favorites-empty.png')}
            />
            <Text style={styles.description}>
              Hmm... Your Favotites Bag is Empty Try to Add some Favovrites
              Burger or Menu what do You Want
            </Text>
          </View>
        )}
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(24),
    paddingVertical: scale(12),
  },
  description: {
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 22,
    marginTop: 22,
    fontSize: scale(16),
    color: colors.disabled,
    paddingHorizontal: scale(60),
  },
  containerContain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: scale(250),
    height: scaleHeight(200),
    objectFit: 'contain',
  },
});

export default FavoriteOrganism;
