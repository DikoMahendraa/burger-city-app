import React, {useCallback} from 'react';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';

import {colors} from '../../../constants';
import {MainLayout} from '../../../layouts';
import {scale, scaleHeight} from '../../../utils';
import {AppRoutes, navigate} from '../../../navigation';
import {Button, Gap, Label} from '../../../components/atoms';
import {ourBurgerStore} from '../../../stores/ourBurgerStore';
import {CardBurgerItem, Header} from '../../../components/molecules';

const FavoriteOrganism: React.FC = () => {
  const {favorites, setRemoveFavorite} = ourBurgerStore();
  const hasFavorite = favorites?.length;

  const onCheckMenu = useCallback(() => navigate(AppRoutes.OUR_BURGER), []);
  const onBack = useCallback(() => navigate('OUR_BURGER'), []);
  const onRemoveItem = useCallback(
    (id: string) => setRemoveFavorite(id),
    [setRemoveFavorite],
  );

  return (
    <MainLayout>
      <Header isBack onPressLeft={onBack} />
      <View style={styles.container}>
        <Label customText="Favorites" variant="large" weight="semibold" />
        <Gap height={30} />
        {hasFavorite ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={favorites}
            keyExtractor={item => `${item.id}-${item.name}`}
            renderItem={({item}) => (
              <>
                <CardBurgerItem
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  selected
                  onPressIcon={() => onRemoveItem(item.id)}
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
            <Gap height={22} />
            <Button onPress={onCheckMenu} text="Check menu" />
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
    marginTop: scale(22),
    fontSize: scale(16),
    color: colors.disabled,
    paddingHorizontal: scale(30),
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
