import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {CircleMinus, CirclePlus, CircleX, Star} from 'lucide-react-native';
import React, {useCallback, useState} from 'react';

import {Header} from '../../molecules';
import {goBack} from '../../../navigation';
import {MainLayout} from '../../../layouts';
import {useBurgerStore} from '../../../stores';
import {Button, Gap, Label} from '../../atoms';
import {scale, scaleHeight} from '../../../utils';
import {colors} from '../../../constants';

const {height} = Dimensions.get('window');

const ListHeaderComponent: React.FC = () => {
  const {
    meals,
    addFavorite,
    increaseOrder,
    decreaseOrder,
    removeFavorite,
    favorites,
    addToCart,
    carts,
  } = useBurgerStore();
  const mapFavorite = favorites?.flatMap(item => item?.id);
  const selected = mapFavorite?.includes(meals.id);
  const listCart = carts.flatMap(item => item.id);
  const readyOnCart = listCart.includes(meals.id);

  const onAddToFavorite = useCallback(() => {
    return selected ? removeFavorite(meals.id) : addFavorite(meals);
  }, [addFavorite, meals, removeFavorite, selected]);

  const onAddToCart = useCallback(() => {
    addToCart(meals);
  }, [addToCart, meals]);

  const onIncreaseOrder = useCallback(() => {
    addToCart(meals);
    increaseOrder(meals.id);
  }, [addToCart, increaseOrder, meals]);
  const onDecreaseOrder = useCallback(() => {
    addToCart(meals);
    decreaseOrder(meals.id);
  }, [addToCart, decreaseOrder, meals]);

  return (
    <>
      <View style={styles.header}>
        <View>
          <Label weight="semibold" size="lg" text={meals.name} />
          <Gap height={4} />
          <Label color={colors.disabled} text="Please customize your meal" />
        </View>
        <TouchableOpacity onPress={onAddToFavorite}>
          <Star
            color={colors.primary}
            fill={selected ? colors.primary : colors.white}
            size={22}
          />
        </TouchableOpacity>
      </View>
      <Gap height={12} />
      <View style={styles.row}>
        <Image
          style={styles.imageHero}
          alt={`detail-menu-${meals.name?.toLowerCase()}`}
          source={meals.image}
        />
      </View>
      <Gap height={12} />
      <View style={styles.row}>
        {readyOnCart ? (
          <View style={styles.buttonCount}>
            <Button
              onPress={onDecreaseOrder}
              icon={<CircleMinus color={colors.primary} size={20} />}
              variant="transparent"
            />
            <Label
              text={String(meals?.count)}
              weight="semibold"
              color={colors.disabled}
            />
            <Button
              onPress={onIncreaseOrder}
              icon={<CirclePlus color={colors.primary} size={20} />}
              variant="transparent"
            />
          </View>
        ) : (
          <>
            <Gap width={20} />
            <Button onPress={onAddToCart} text="Add to Cart" size="large" />
          </>
        )}
      </View>
      <Gap height={30} />
      <View>
        <Label text="Includes" weight="semibold" color={colors.dark} />
        <Gap height={24} />
      </View>
    </>
  );
};

const ContentRenderItem: React.FC<{
  image: ImageSourcePropType;
  name: string;
  onPress: () => void;
  hasButton?: boolean;
}> = ({image, name, onPress, hasButton}) => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.cardContent}>
        <Image style={styles.cardImage} alt="detail-menu" source={image} />
        <Gap width={12} />
        <Text>{name}</Text>
      </View>

      {hasButton && (
        <Button
          onPress={onPress}
          size="small"
          textStyle={styles.fontSmall}
          text="Change"
        />
      )}
    </View>
  );
};

const BurgerMealsOrganism: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const translateY = useSharedValue(height);
  const {meals} = useBurgerStore();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const onChangeMenu = useCallback(() => {
    if (visible) {
      translateY.value = withTiming(height, {duration: 300});
    } else {
      translateY.value = withTiming(0, {duration: 300});
    }
    setVisible(!visible);
  }, [translateY, visible]);

  return (
    <MainLayout>
      <Header isBack onPressLeft={() => goBack()} />
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.paddingBottom}
        data={meals.desserts}
        ListHeaderComponent={<ListHeaderComponent />}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ContentRenderItem
            image={item.image}
            name={item.name}
            hasButton={item.visible}
            onPress={onChangeMenu}
          />
        )}
      />

      <Animated.View style={[styles.drawer, animatedStyle]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={meals.desserts}
          ListHeaderComponent={
            <View style={styles.headerDrawer}>
              <Label text="Change Drinks" weight="semibold" />
              <Text />

              <TouchableOpacity onPress={onChangeMenu}>
                <CircleX color={colors.disabled} />
              </TouchableOpacity>
            </View>
          }
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ContentRenderItem
              image={item.image}
              name={item.name}
              onPress={onChangeMenu}
              hasButton
            />
          )}
        />
      </Animated.View>
    </MainLayout>
  );
};

export default React.memo(BurgerMealsOrganism);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  headerDrawer: {
    paddingVertical: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fontSmall: {
    fontSize: 12,
  },
  drawer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.5,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    paddingHorizontal: 24,
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
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
