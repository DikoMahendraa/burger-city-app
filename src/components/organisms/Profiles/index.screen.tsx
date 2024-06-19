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
import {MainLayout} from '../../../layouts';
import {scale, scaleHeight} from '../../../utils';
import {LIST_WALLET, colors} from '../../../constants';
import {useProfileStore} from '../../../stores';

const ProfileOrganism: React.FC = () => {
  const {history} = useProfileStore();

  return (
    <MainLayout>
      <Header />
      <FlatList
        style={styles.container}
        showsVerticalScrollIndicator={false}
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
              <Label color={colors['gray-01']} text="Your wallet" />
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
                  <Label color={colors['gray-01']} text="Recent Transaction" />
                  <Gap height={24} />
                </>
              }
              showsVerticalScrollIndicator={false}
              data={history}
              keyExtractor={item => item.name}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.cardTransaction}>
                  <View>
                    <Label
                      text={String(new Date().toLocaleDateString())}
                      color={colors['gray-01']}
                    />
                    <Gap height={8} />
                    <Label text={item.name} />
                  </View>
                  <Label text={'Rp.' + item.price} weight="semibold" />
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
    width: scale(150),
    height: scaleHeight(150),
    borderRadius: scale(75),
    marginBottom: scale(20),
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
    paddingHorizontal: scale(24),
  },
  cardTransaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: scale(12),
    marginBottom: scale(12),
    paddingHorizontal: scale(18),
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
