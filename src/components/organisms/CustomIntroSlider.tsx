import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
  ImageBackground,
  Image,
} from 'react-native';
import {Button} from '../atoms';
import {colors} from '../../constants';
import {AuthRoutes, navigate} from '../../navigation';

const {width, height} = Dimensions.get('window');

type TPropsCustomIntroSlider = {
  slides: Array<{
    key: string;
    title: string;
    image: string;
  }>;
};

const image = {uri: require('../../assets/images/intro-background.png')};

const CustomIntroSlider = ({slides}: TPropsCustomIntroSlider) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

  const renderSlide = (slide: any) => (
    <View key={slide.key} style={[styles.slide]}>
      <View style={styles.titlePosition}>
        <Text style={styles.title}>{slide.title}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image.uri}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.shadowContainer} />
        <View style={styles.burgerLogo}>
          <Image source={require('../../assets/images/burger-logo.png')} />
        </View>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={16}>
          {slides.map(slide => renderSlide(slide))}
        </ScrollView>

        <View style={[styles.titlePosition, styles.dotWrapper]}>
          {slides.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.8, 1.4, 0.8],
              extrapolate: 'clamp',
            });
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.6, 1, 0.6],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={[styles.dot, {transform: [{scale}], opacity}]}
              />
            );
          })}
        </View>

        <View style={styles.button}>
          <Button
            size="large"
            text="Get start here"
            onPress={() => navigate(AuthRoutes.SIGNIN)}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  burgerLogo: {
    position: 'absolute',
    top: 100,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  slide: {
    zIndex: 10,
    width,
    height,
  },
  titlePosition: {
    position: 'absolute',
    marginLeft: 42,
    bottom: 240,
  },
  title: {
    zIndex: 10,
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    maxWidth: 130,
  },
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
  },
  button: {
    position: 'absolute',
    width: '100%',
    bottom: 60,
    paddingHorizontal: 42,
  },
  dotWrapper: {
    gap: 4,
    flexDirection: 'row',
    bottom: 220,
    width: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
});

export default CustomIntroSlider;
