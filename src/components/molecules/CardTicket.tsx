import {
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';

import {Gap} from '../atoms';
import {colors} from '../../constants';

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
        resizeMode="cover"
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

export default React.memo(CardTicket);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  image: {
    position: 'relative',
    height: 90,
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
    width: 50,
    height: 50,
    objectFit: 'contain',
  },
  title: {
    color: colors.white,
    fontWeight: '800',
    fontSize: 18,
  },
  description: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
});
