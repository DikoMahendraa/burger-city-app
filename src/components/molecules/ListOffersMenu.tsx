import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Gap, Label} from '../atoms';
import {CardMenu} from '../molecules';
import {colors} from '../../constants';

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

      <ScrollView horizontal>
        <CardMenu
          label="Cheesy Burger"
          price="50.000"
          rating={4}
          imageUrl={require('../../assets/images/best-offers/best-offer-1.png')}
        />
        <Gap width={12} />
        <CardMenu
          label="Cheesy Burger"
          price="50.000"
          rating={4}
          imageUrl={require('../../assets/images/best-offers/best-offer-2.png')}
        />
        <Gap width={12} />
        <CardMenu
          label="Cheesy Burger"
          price="50.000"
          rating={4}
          imageUrl={require('../../assets/images/best-offers/best-offer-3.png')}
        />
        <Gap width={12} />
        <CardMenu
          label="Cheesy Burger"
          price="50.000"
          rating={4}
          imageUrl={require('../../assets/images/best-offers/best-offer-1.png')}
        />
      </ScrollView>
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
