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
import {ChevronRight, Minus, Plus, Star} from 'lucide-react-native';
import React from 'react';
import {colors} from '../../constants';
import {formatCurrency, scale, scaleHeight} from '../../utils';
import {Button, Gap} from '../atoms';

type TPropsCardBurgerItem = {
  image: ImageSourcePropType;
  price: string;
  name: string;
  hasButton?: boolean;
  hasDetail?: boolean;
  hasButtonIncrease?: boolean;
  textButton?: string;
  selected?: boolean;
  onDecrease?: () => void;
  onIncrease?: () => void;
  textButtonStyle?: TextStyle;
  onPressIcon?: () => void;
  onPressButton?: () => void;
  count?: string;
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
  selected,
  hasButtonIncrease,
  onDecrease,
  onIncrease,
  count = 1,
}) => {
  const hasButtonStyle: ViewStyle = {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  };
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image style={styles.cardContentImg} alt="list-image" source={image} />

        <Gap width={8} />
        <View>
          <Text style={styles.cardContentTitle}>{name}</Text>
          <Gap height={8} />
          <Text style={styles.cardContentPrice}>
            {formatCurrency(Number(price))}
          </Text>
        </View>
      </View>
      <View style={hasButtonStyle}>
        <TouchableOpacity onPress={onPressIcon}>
          {hasDetail ? (
            <View style={styles.chevron}>
              <ChevronRight
                size={14}
                strokeWidth={4}
                color={colors.disabledSoft}
              />
            </View>
          ) : (
            <Star
              size={20}
              color={colors.primary}
              fill={selected ? colors.primary : colors.white}
            />
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
        {hasButtonIncrease && (
          <View style={styles.buttonIncrease}>
            <TouchableOpacity onPress={onDecrease}>
              <Minus size={12} strokeWidth={3} color={colors.primary} />
            </TouchableOpacity>
            <Text style={styles.textIncrease}>{count}</Text>
            <TouchableOpacity onPress={onIncrease}>
              <Plus size={12} strokeWidth={3} color={colors.primary} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
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
  chevron: {
    backgroundColor: colors['gray-05'],
    padding: 4,
    borderRadius: 12,
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
  buttonIncrease: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.white,
    shadowColor: colors.dark,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.2,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  textIncrease: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.dark,
  },
});
