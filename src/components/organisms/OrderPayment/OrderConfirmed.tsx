import {FlatList, ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Label} from '../../atoms';
import {colors} from '../../../constants';
import {formatCurrency, scale, scaleHeight} from '../../../utils';

const OrderConfirmed: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMethod="scale"
        resizeMode="stretch"
        source={require('../../../assets/images/order-background.png')}
        style={styles.orderBackground}>
        <View style={styles.bigTitle}>
          <Label
            weight="bold"
            color={colors.primary}
            size="xl"
            text="Order Confirmed!"
          />
        </View>
        <View style={styles.containerLine}>
          <View style={[styles.dashedLine]} />
        </View>
        <View style={styles.informationAccount}>
          <View style={styles.row}>
            <Label text="Costumer Name" />
            <Label text="Subtotal" />
          </View>
          <Gap height={12} />
          <View style={styles.row}>
            <Label text="Darrell Steward" size="lg" weight="semibold" />
            <Label weight="semibold" text={formatCurrency(150000)} />
          </View>

          <Gap height={12} />

          <FlatList
            data={[{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}]}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <>
                <Gap height={24} />
                <Label text="Order List" />
                <Gap height={8} />
              </>
            }
            renderItem={({item}) => (
              <View style={styles.listItem}>
                <Label
                  weight="semibold"
                  color={colors.disabled}
                  text={`${item.id}. `}
                />
                <Label text="Chicken Big Burger" weight="semibold" />
              </View>
            )}
            ListFooterComponent={
              <>
                <Gap height={100} />
                <Button size="large" text="TRACK YOUR ORDER" weight="600" />
                <Gap height={12} />
                <Button
                  text="CLOSE"
                  variant="transparent"
                  size="large"
                  textStyle={{color: colors.primary}}
                  weight={'600'}
                />
              </>
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default OrderConfirmed;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: colors['soft-white'],
  },
  bigTitle: {
    position: 'absolute',
    top: scaleHeight(60),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerLine: {
    position: 'absolute',
    top: scaleHeight(150),
    left: 0,
    right: 0,
    paddingHorizontal: scale(40),
  },
  informationAccount: {
    position: 'absolute',
    paddingHorizontal: 32,
    top: 200,
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: 6,
  },
  orderBackground: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dashedLine: {
    width: '100%',
    height: 1,
    borderWidth: 1,
    borderColor: colors['gray-05'],
    borderStyle: 'dashed',
  },
});
