import {View} from 'react-native';
import React from 'react';
import {scale, scaleHeight} from '../../utils';

const Gap = ({width = 0, height = 0}: {width?: number; height?: number}) => {
  return (
    <View
      style={{width: scale(Number(width)), height: scaleHeight(Number(height))}}
    />
  );
};

export default React.memo(Gap);
