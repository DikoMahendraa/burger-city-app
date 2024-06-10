import {Dimensions, PixelRatio, Platform} from 'react-native';
import {isTablet} from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const activeWidth = height > width ? width : height;
const activeHeight = height > width ? height : width;

const widthBaseScale = activeWidth / 414;
const heightBaseScale = activeHeight / 896;

/**
 * Menormalkan ukuran berdasarkan lebar atau tinggi layar perangkat.
 * @param {number} size - Ukuran yang ingin dinormalkan.
 * @param {string} [based='width'] - Berdasarkan 'width' atau 'height'.
 * @returns {number} - Ukuran yang telah dinormalkan.
 */

function normalize(size: number, based: string = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

/**
 * Menormalkan lebar layout berdasarkan perangkat (tablet/ponsel) dan platform (iOS/Android).
 * @param {number} layoutWidth - Lebar layout yang ingin dinormalkan.
 * @returns {number} - Lebar layout yang telah dinormalkan.
 */

export function scale(layoutWidth: number) {
  let size;
  if (isTablet()) {
    if (Platform.OS === 'ios') {
      size = PixelRatio.roundToNearestPixel(layoutWidth) * 1.3;
    } else {
      size = PixelRatio.roundToNearestPixel(layoutWidth);
    }
  } else if (Platform.OS === 'ios') {
    size = normalize(layoutWidth, 'width');
  } else if (Math.abs(activeHeight / activeWidth) < 1.5) {
    size = PixelRatio.roundToNearestPixel(layoutWidth);
  } else {
    size = normalize(layoutWidth, 'width');
  }

  return size;
}

/**
 * Menormalkan tinggi layout berdasarkan perangkat (tablet/ponsel) dan platform (iOS/Android).
 * @param {number} layoutHeight - Tinggi layout yang ingin dinormalkan.
 * @returns {number} - Tinggi layout yang telah dinormalkan.
 */

export function scaleHeight(layoutHeight: number) {
  let size;
  if (isTablet()) {
    if (Platform.OS === 'ios') {
      size = PixelRatio.roundToNearestPixel(layoutHeight) * 1.3;
    } else {
      size = PixelRatio.roundToNearestPixel(layoutHeight);
    }
  } else {
    size = scale(layoutHeight);
  }
  return size;
}
