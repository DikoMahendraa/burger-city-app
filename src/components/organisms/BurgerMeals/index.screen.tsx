import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CircleMinus, CirclePlus, Star} from 'lucide-react-native';
import React, {useCallback} from 'react';

import {Header} from '../../molecules';
import {colors} from '../../../constants';
import {goBack} from '../../../navigation';
import {MainLayout} from '../../../layouts';
import {Button, Gap, Label} from '../../atoms';
import {scale, scaleHeight} from '../../../utils';

const LIST_ITEMS = [
  {
    id: '1',
    name: 'Cheesy Burger',
    image: require('../../../assets/images/list-details-meals/details-meals-1.png'),
  },
  {
    id: '2',
    name: 'Coca Cola Small',
    image: require('../../../assets/images/list-details-meals/details-meals-2.png'),
  },
  {
    id: '3',
    name: 'Fries Pack',
    image: require('../../../assets/images/list-details-meals/details-meals-3.png'),
  },
];

const BurgerMealsOrganism: React.FC = () => {
  const onChangeMenu = useCallback(() => {}, []);

  return (
    <MainLayout>
      <Header isBack onPressLeft={() => goBack()} />
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.paddingBottom}
        data={LIST_ITEMS}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <View>
                <Label
                  weight="semibold"
                  variant="large"
                  customText="Cheese Burger Meal"
                />
                <Gap height={4} />
                <Label
                  variant="normal"
                  color={colors.disabled}
                  customText="Please customize your meal"
                />
              </View>
              <TouchableOpacity>
                <Star color={colors.primary} size={22} />
              </TouchableOpacity>
            </View>
            <Gap height={12} />
            <View style={styles.row}>
              <Image
                style={styles.imageHero}
                alt="detail-menu"
                source={require('../../../assets/images/list-meals/meals-1.png')}
              />
            </View>
            <Gap height={12} />
            <View style={styles.row}>
              <View style={styles.buttonCount}>
                <Button
                  icon={<CirclePlus color={colors.primary} size={20} />}
                  variant="transparent"
                />
                <Label
                  customText="1"
                  weight="semibold"
                  color={colors.disabled}
                />
                <Button
                  icon={<CircleMinus color={colors.primary} size={20} />}
                  variant="transparent"
                />
              </View>
              <Gap width={20} />
              <Button text="Add to Cart" size="large" />
            </View>
            <Gap height={30} />
            <View>
              <Label
                customText="Includes"
                variant="normal"
                weight="semibold"
                color={colors.dark}
              />
              <Gap height={24} />
            </View>
          </>
        }
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.containerCard}>
            <View style={styles.cardContent}>
              <Image
                style={styles.cardImage}
                alt="detail-menu"
                source={item.image}
              />
              <Gap width={12} />
              <Text>{item.name}</Text>
            </View>

            <Button onPress={onChangeMenu} text="Change" />
          </View>
        )}
      />
    </MainLayout>
  );
};

export default BurgerMealsOrganism;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  paddingBottom: {
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: scale(40),
  },
  imageHero: {
    width: scale(200),
    height: scaleHeight(160),
    objectFit: 'contain',
  },
  containerCard: {
    marginBottom: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    borderRadius: 8,
    shadowColor: colors.disabledSoft,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImage: {
    width: scale(60),
    height: scaleHeight(50),
    objectFit: 'contain',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: 8,
    backgroundColor: colors.white,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
});
