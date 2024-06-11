import React from 'react';
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Gap} from '../atoms';
import {colors} from '../../constants';
import {scale, scaleHeight} from '../../utils';

type TPropsCardTicket = {
  image: ImageSourcePropType;
  title: string;
  description: string;
  onPress?: () => void;
};

const CardTicket: React.FC<TPropsCardTicket> = ({
  description,
  image,
  onPress,
  title,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/ticket-background.png')}
        resizeMethod="scale"
        resizeMode="stretch"
        style={styles.image}>
        <TouchableOpacity onPress={onPress} style={styles.containTicket}>
          <Image style={styles.heroOrder} alt="hero-image" source={image} />
          <Gap width={12} />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Gap height={4} />
            <Text style={styles.description}>{description}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const ListTrackAndOrder = () => {
  return (
    <>
      <CardTicket
        title="Track Here"
        description="Order to Track Your Food"
        image={require('../../assets/images/burger-track.png')}
      />
      <Gap height={10} />
      <CardTicket
        title="Order Here"
        description="Choice Your Delicious Burger"
        image={require('../../assets/images/burger-logo.png')}
      />
    </>
  );
};

export default React.memo(ListTrackAndOrder);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(16),
  },
  image: {
    position: 'relative',
    height: scaleHeight(100),
    width: '100%',
    objectFit: 'cover',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containTicket: {
    position: 'absolute',
    paddingHorizontal: 50,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  heroOrder: {
    width: scale(50),
    height: scaleHeight(50),
    objectFit: 'contain',
  },
  title: {
    color: colors.white,
    fontWeight: '800',
    fontSize: scale(16),
  },
  description: {
    color: colors.white,
    fontWeight: '600',
    fontSize: scale(12),
  },
});
