import {View} from 'react-native';
import React from 'react';
import {scale, scaleHeight} from '../../utils';

const Gap: React.FC<{width?: number; height?: number}> = ({
  width = 0,
  height = 0,
}) => {
  return (
    <View
      style={{width: scale(Number(width)), height: scaleHeight(Number(height))}}
    />
  );
};

export default React.memo(Gap);
