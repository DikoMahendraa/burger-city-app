import {View} from 'react-native';
import React from 'react';

const Gap = ({width, height}: {width?: number; height?: number}) => {
  return <View style={{width, height}} />;
};

export default React.memo(Gap);
