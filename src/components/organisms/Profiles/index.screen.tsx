import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';

import {Header} from '../../molecules';
import {Gap, Label} from '../../atoms';
import {LIST_TRANSACTION, LIST_WALLET, colors} from '../../../constants';
import {MainLayout} from '../../../layouts';
import {scale, scaleHeight} from '../../../utils';

const ProfileOrganism = () => {
  return (
    <MainLayout>
      <Header />
      <FlatList
        style={styles.container}
        data={[{id: '1'}]}
        keyExtractor={item => item.id}
        renderItem={() => (
          <>
            <View style={styles.containerProfile}>
              <Image
                style={styles.profileImage}
                source={require('../../../assets/images/profiles/image-profile.png')}
              />

              <View style={styles.profileInformation}>
                <Text style={[styles.center, styles.title]}>Jhone Doe</Text>

                <Gap height={16} />
                <Text style={[styles.center, styles.description]}>
                  0852-4554-2311
                </Text>
                <Gap height={6} />
                <Text style={[styles.center, styles.description]}>
                  email@example.com
                </Text>
              </View>
            </View>
            <Gap height={22} />
            <View style={styles.containerEWaller}>
              <Label
                variant="normal"
                color={colors['gray-01']}
                customText="Your wallet"
              />
              <Gap height={12} />
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={LIST_WALLET}
                keyExtractor={item => item.name}
                renderItem={({item}) => (
                  <>
                    <TouchableOpacity>
                      <Image style={styles.cardWallet} source={item.image} />
                    </TouchableOpacity>
                    <Gap width={8} />
                  </>
                )}
              />
            </View>
            <Gap height={24} />

            <FlatList
              style={styles.containerTransaction}
              ListHeaderComponent={
                <>
                  <Label
                    variant="normal"
                    color={colors['gray-01']}
                    customText="Recent Transaction"
                  />
                  <Gap height={24} />
                </>
              }
              showsVerticalScrollIndicator={false}
              data={LIST_TRANSACTION}
              keyExtractor={item => item.name}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.cardTransaction}>
                  <View>
                    <Label
                      customText={item.date}
                      variant="normal"
                      weight="normalWeight"
                      color={colors['gray-01']}
                    />
                    <Gap height={8} />
                    <Label
                      customText={item.name}
                      variant="normal"
                      weight="semibold"
                    />
                  </View>
                  <Label
                    customText={'Rp.' + item.price}
                    variant="normal"
                    weight="bold"
                  />
                </TouchableOpacity>
              )}
            />

            <Gap height={140} />
          </>
        )}
      />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  containerProfile: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInformation: {},
  center: {
    textAlign: 'center',
  },
  title: {
    fontSize: scale(24),
    fontWeight: '600',
    color: colors.dark,
  },
  description: {
    fontSize: scale(16),
    fontWeight: '400',
    color: colors.disabled,
  },
  containerEWaller: {
    paddingHorizontal: 24,
  },
  cardWallet: {
    objectFit: 'contain',
    width: scale(242),
    height: scaleHeight(130),
  },
  containerTransaction: {
    paddingHorizontal: 24,
  },
  cardTransaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default ProfileOrganism;
