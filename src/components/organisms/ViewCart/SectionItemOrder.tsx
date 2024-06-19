import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import React from 'react';

import {colors} from '../../../constants';
import {formatCurrency, scale, scaleHeight} from '../../../utils';
import {ButtonCount, Gap, Label} from '../../atoms';

const SectionItemOrder: React.FC<{
  price: number;
  total: number;
  name: string;
  image?: ImageSourcePropType;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}> = ({price = 0, total = 1, name, image, onPressLeft, onPressRight}) => {
  return (
    <View style={[styles.row, styles.container]}>
      <View style={styles.row}>
        <View>
          <Image alt={name} style={styles.image} source={image} />
        </View>
        <Gap width={30} />
        <View>
          <Label color={colors.dark} text={name} size="sm" />
          <Gap height={12} />
          <View style={styles.buttonCounter}>
            <ButtonCount
              onPressLeft={onPressLeft}
              onPressRight={onPressRight}
              title={total}
            />
          </View>
        </View>
      </View>
      <Label color={colors.dark} text={formatCurrency(price)} size="sm" />
    </View>
  );
};

export default SectionItemOrder;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  image: {
    width: scale(50),
    height: scaleHeight(50),
    objectFit: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonCounter: {
    width: scale(80),
  },
});
