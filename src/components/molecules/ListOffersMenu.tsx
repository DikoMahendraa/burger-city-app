import {TouchableOpacity, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {Gap, Label} from '../atoms';
import {CardMenu} from '../molecules';
import {colors} from '../../constants';

const LIST_OFFERS = [
  {
    name: 'Cheesy Burger',
    rating: 4,
    image: require('../../assets/images/best-offers/best-offer-1.png'),
  },
  {
    name: 'Chicken Big Burger',
    rating: 3,
    image: require('../../assets/images/best-offers/best-offer-3.png'),
  },
  {
    name: 'Beef Burger',
    rating: 4,
    image: require('../../assets/images/best-offers/best-offer-2.png'),
  },
  {
    name: 'Chicken Big Burger',
    rating: 1,
    image: require('../../assets/images/best-offers/best-offer-1.png'),
  },
];

const ListOffersMenu: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLabel}>
        <Label variant="large" weight="semibold" customText="Best Offers" />
        <TouchableOpacity>
          <Text style={styles.textViewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <Gap height={16} />

      <FlatList
        data={LIST_OFFERS}
        horizontal
        renderItem={({item}) => (
          <>
            <CardMenu
              label={item.name}
              price="50.000"
              rating={item.rating}
              imageUrl={item.image}
            />
            <Gap width={10} />
          </>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default React.memo(ListOffersMenu);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  containerLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textViewAll: {
    color: colors.primary,
    fontWeight: '500',
  },
});
