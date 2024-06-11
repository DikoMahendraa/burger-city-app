import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ChevronRight, Star} from 'lucide-react-native';
import React from 'react';
import {colors} from '../../constants';
import {scale, scaleHeight} from '../../utils';
import {Button, Gap} from '../atoms';

type TPropsCardBurgerItem = {
  image: ImageSourcePropType;
  price: string;
  name: string;
  hasButton?: boolean;
  hasDetail?: boolean;
  textButton?: string;
  textButtonStyle?: TextStyle;
  onPressIcon?: () => void;
  onPressButton?: () => void;
};

const CardBurgerItem: React.FC<TPropsCardBurgerItem> = ({
  image,
  name,
  price,
  hasButton = false,
  textButton,
  textButtonStyle,
  hasDetail,
  onPressButton,
  onPressIcon,
}) => {
  const hasButtonStyle: ViewStyle = {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  };
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardContent}>
        <Image style={styles.cardContentImg} alt="list-image" source={image} />

        <Gap width={8} />
        <View>
          <Text style={styles.cardContentTitle}>{name}</Text>
          <Gap height={8} />
          <Text style={styles.cardContentPrice}>Rp.{price}</Text>
        </View>
      </View>
      <View style={hasButton ? hasButtonStyle : {}}>
        <TouchableOpacity onPress={onPressIcon}>
          {hasDetail ? (
            <ChevronRight size={20} color={colors.primary} />
          ) : (
            <Star size={20} color={colors.primary} fill={colors.white} />
          )}
        </TouchableOpacity>

        {hasButton && (
          <Button
            text={textButton}
            size="small"
            textStyle={textButtonStyle}
            onPress={onPressButton}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CardBurgerItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 14,
    alignItems: 'center',
    shadowColor: colors.disabledSoft,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardContentTitle: {
    fontWeight: '500',
    fontSize: scale(16),
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardContentPrice: {
    fontSize: scale(14),
    color: colors.disabledSoft,
  },
  cardContentImg: {
    width: scale(66),
    height: scaleHeight(43),
    objectFit: 'contain',
  },
});
