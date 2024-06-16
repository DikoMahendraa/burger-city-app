import React from 'react';
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
import {colors} from '../../constants';
import {formatCurrency, scale, scaleHeight} from '../../utils';
import {Button, ButtonCount, Gap} from '../atoms';

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
  count?: number;
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
          <ButtonCount
            title={Number(count)}
            onPressLeft={onDecrease}
            onPressRight={onIncrease}
          />
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
});
