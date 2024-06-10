import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {MainLayout} from '../../../layouts';
import {Header} from '../../molecules';
import {Button, Gap, Input} from '../../atoms';
import {colors} from '../../../constants';
import {Search} from 'lucide-react-native';

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

const CardList = () => {
  return (
    <FlatList
      data={LIST_MENU}
      renderItem={({item}) => (
        <Card onPress={() => ({})} title={item.name} image={item.image} />
      )}
      keyExtractor={item => item.name}
      numColumns={2}
      columnWrapperStyle={styles.columnContainerCard}
      contentContainerStyle={styles.containerCard}
    />
  );
};

const OurBurgerOrganism = () => {
  return (
    <MainLayout>
      <Header />
      <Gap height={20} />

      <View style={styles.container}>
        <Input
          style={styles.input}
          placeholder="Search for a Food"
          prefix={<Search color={colors.disabled} size={20} />}
          placeholderTextColor={colors.disabled}
        />
        <Gap height={20} />
        <View style={styles.containerHero}>
          <Image
            style={styles.imageHero}
            alt="image-ilustration-burger"
            source={require('../../../assets/images/hero-burger.png')}
          />
        </View>
        <Gap height={20} />
        <CardList />
        <Button onPress={() => ({})} text="Burger Menu" size="large" />
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
    height: 193,
    width: '100%',
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  input: {
    borderColor: colors.disabledSoft,
    borderWidth: 1,
  },
  columnContainerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  containerCard: {
    flexWrap: 'wrap',
    gap: 14,
  },
  containerHero: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    borderRadius: 8,
    width: '48%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  cardHero: {
    height: 80,
    width: 80,
    objectFit: 'contain',
  },
  cardLabel: {
    fontWeight: '700',
    fontSize: 16,
  },
});

export default OurBurgerOrganism;
