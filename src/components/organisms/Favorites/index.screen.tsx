import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Star} from 'lucide-react-native';

import {MainLayout} from '../../../layouts';
import {Gap, Label} from '../../../components/atoms';
import {colors} from '../../../constants';
import {Header} from '../../../components/molecules';

const LIST_FAVORITES = [
  {
    name: 'Cheesy Burger',
    image: require('../../../assets/images/burger-menu/menu-1.png'),
  },
  {
    name: 'Chicken Big Burger',
    image: require('../../../assets/images/burger-menu/menu-3.png'),
  },
  {
    name: 'Beef Burger',
    image: require('../../../assets/images/burger-menu/menu-2.png'),
  },
  {
    name: 'Specials Big Burger',
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
                <TouchableOpacity style={styles.card}>
                  <View style={styles.cardContent}>
                    <Image
                      style={styles.cardContentImg}
                      alt={`${item.name.toLowerCase()}-burger`}
                      source={item.image}
                    />

                    <Gap width={8} />
                    <View>
                      <Text style={styles.cardContentTitle}>{item.name}</Text>
                      <Gap height={8} />
                      <Text style={styles.cardContentPrice}>Rp.50,000</Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <Star color={colors.primary} fill={colors.primary} />
                  </TouchableOpacity>
                </TouchableOpacity>
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
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 14,
    alignItems: 'center',
    shadowColor: colors.disabledSoft,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardContentTitle: {
    fontWeight: '500',
    fontSize: 16,
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardContentPrice: {
    fontSize: 14,
    color: colors.disabledSoft,
  },
  cardContentImg: {
    width: 66,
    height: 43,
    objectFit: 'contain',
  },
  description: {
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 22,
    marginTop: 22,
    fontSize: 16,
    color: colors.disabled,
    paddingHorizontal: 60,
  },
  containerContain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 200,
    objectFit: 'contain',
  },
});

export default FavoriteOrganism;
