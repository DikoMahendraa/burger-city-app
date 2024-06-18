import React from 'react';
import {FlatList, ImageBackground, StyleSheet, View} from 'react-native';
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
        <View style={styles.titleContainer}>
          <Label
            weight="bold"
            color={colors.primary}
            size="xl"
            text="Order Confirmed!"
          />
        </View>
        <View style={styles.dashedLineContainer}>
          <View style={styles.dashedLine} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.row}>
            <Label text="Customer Name" />
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
                  weight="600"
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
    flex: 1,
    padding: 24,
    backgroundColor: colors['soft-white'],
  },
  orderBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    overflow: 'hidden',
  },
  titleContainer: {
    position: 'absolute',
    top: scaleHeight(60),
    width: '100%',
    alignItems: 'center',
  },
  dashedLineContainer: {
    position: 'absolute',
    top: scaleHeight(150),
    left: scale(40),
    right: scale(40),
  },
  infoContainer: {
    position: 'absolute',
    top: scaleHeight(200),
    width: '100%',
    paddingHorizontal: scale(32),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: 6,
  },
  dashedLine: {
    width: '100%',
    height: 1,
    borderWidth: 1,
    borderColor: colors['gray-05'],
    borderStyle: 'dashed',
  },
});
