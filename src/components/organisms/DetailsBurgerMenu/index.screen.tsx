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
import {colors} from '../../../constants';
import {CardBurgerItem} from '../../molecules';
import {scale, scaleHeight} from '../../../utils';
import {AppRoutes, navigate} from '../../../navigation';

const LIST_ITEMS = [
  {
    id: 'cheese_burger',
    name: 'Cheesy Burger',
    price: '49.260',
    image: require('../../../assets/images/burger-menu/menu-1.png'),
  },
  {
    id: 'chicken_burger',
    name: 'Chicken Big Burger',
    price: '49.260',
    image: require('../../../assets/images/burger-menu/menu-3.png'),
  },
  {
    id: 'beef_burger',
    name: 'Beef Burger',
    price: '49.260',
    image: require('../../../assets/images/burger-menu/menu-2.png'),
  },
  {
    id: 'special_burger',
    name: 'Specials Big Burger',
    price: '49.260',
    image: require('../../../assets/images/burger-menu/menu-1.png'),
  },
];

const SWITCH_HERO = {
  burger: require('../../../assets/images/hero-slider-2.png'),
  salads: require('../../../assets/images/hero-salads.png'),
  meals: require('../../../assets/images/hero-burger.png'),
  baverages: require('../../../assets/images/hero-baverages.png'),
  dessert: require('../../../assets/images/hero-escream.png'),
};

const DetailsBurgerMenuOrganism: React.FC<{
  route: {
    params: {
      name: string;
      description: string;
      id: keyof typeof SWITCH_HERO;
    };
  };
}> = ({route}) => {
  const {id, name, description} = route.params || {};

  const onBack = useCallback(() => navigate(AppRoutes.OUR_BURGER), []);
  return (
    <View style={styles.container}>
      <FlatList
        data={LIST_ITEMS}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.containerCard}>
            <CardBurgerItem
              name={item.name}
              image={item.image}
              price={item.price}
              hasDetail
              hasButton
              textButton="Add +"
              textButtonStyle={styles.fontSmall}
            />
            <Gap height={8} />
          </View>
        )}
        contentContainerStyle={styles.containerContent}
        ListHeaderComponent={
          <>
            <ImageBackground source={SWITCH_HERO[id]} style={styles.heroImg}>
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
                  weight="normal"
                  customText={description}
                />
              </View>
              <Gap height={16} />
              <View style={styles.dashedLine} />
              <Gap height={16} />
              <View>
                <View style={styles.row}>
                  <Label
                    variant="small"
                    weight="normal"
                    customText="Delivery cost"
                  />
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
                    weight="normal"
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
      <View style={styles.containerCart}>
        <TouchableOpacity onPress={() => ({})} style={styles.buttonCart}>
          <View style={styles.textCount}>
            <Label
              customText="1"
              color={colors.primary}
              weight="semibold"
              variant="normal"
            />
          </View>
          <Label
            customText="View your cart"
            color={colors.white}
            variant="xsmall"
          />
          <Label
            customText="Rp.50.000"
            color={colors.white}
            weight="semibold"
            variant="normal"
          />
        </TouchableOpacity>
      </View>
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
  textCount: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.white,
    color: colors.primary,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  containerCart: {
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: scale(0),
    paddingBottom: 30,
    paddingHorizontal: scale(24),
    zIndex: 20,
  },
  buttonCart: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: scale(12),
    paddingHorizontal: scale(16),
    borderRadius: 8,
  },
});
