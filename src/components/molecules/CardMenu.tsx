import {Star} from 'lucide-react-native';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../constants';
import {Gap} from '../atoms';
import {scale} from '../../utils';

type THorizontalCardProps = {
  imageUrl: ImageSourcePropType;
  rating: number;
  price: string;
  onPress?: () => void;
  label: string;
};

const CardMenu: React.FC<THorizontalCardProps> = ({
  imageUrl,
  rating,
  price,
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={imageUrl} style={styles.image} />
      <Gap height={6} />
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.rating}>
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              color={colors.primary}
              fill={rating > index ? colors.primary : colors.white}
              size={16}
            />
          ))}
        </View>
        <Text style={styles.price}>Rp.{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    maxHeight: scale(260),
    borderRadius: 8,
    overflow: 'hidden',
    width: scale(140),
  },
  image: {
    width: '100%',
    objectFit: 'cover',
    maxHeight: scale(180),
    borderRadius: 8,
  },

  label: {
    fontSize: scale(14),
    fontWeight: '500',
  },
  rating: {
    flexDirection: 'row',
    gap: 2,
    marginVertical: 8,
  },
  price: {
    fontSize: scale(14),
    fontWeight: '600',
  },
});

export default React.memo(CardMenu);
