import React from 'react';
import CustomIntroSlider from '../components/organisms/CustomIntroSlider';

const slides = [
  {
    key: 'one',
    title: 'Dive into a World of Flavor!',
    image: require('../assets/images/intro-background.png'),
  },
  {
    key: 'two',
    title: 'Experience the Greatest!',
    image: require('../assets/images/intro-background.png'),
  },
  {
    key: 'three',
    title: 'Savor the Burgers!',
    image: require('../assets/images/intro-background.png'),
  },
];

export default function IntroScreen() {
  return <CustomIntroSlider slides={slides} />;
}
