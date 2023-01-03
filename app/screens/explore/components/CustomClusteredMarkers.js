import React, {memo} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';
import {Marker} from 'react-native-maps';
import {returnMarkerStyle} from './helper';

const CustomClusteredMarkers = ({
  geometry,
  properties,
  onPress,
  clusterTextColor,
  clusterFontFamily,
  tracksViewChanges,
  imageSrc,
  textCount,
}) => {
  const points = properties.point_count;
  const {width, height, fontSize} = returnMarkerStyle(points);

  return (
    <Marker
      key={`${geometry.coordinates[0]}_${geometry.coordinates[1]}`}
      coordinate={{
        longitude: geometry.coordinates[0],
        latitude: geometry.coordinates[1],
      }}
      style={{zIndex: points + 1}}
      onPress={onPress}
      tracksViewChanges={tracksViewChanges}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.container, {width, height}]}>
        {/* <ImageBackground
          source={imageSrc}
          style={[
            styles.cluster,
            {
              width,
              height,
            },
          ]}> */}
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            backgroundColor: imageSrc,
          }}>
          <Text
            style={[
              styles.text,
              {
                color: clusterTextColor,
                fontSize,
                fontFamily: clusterFontFamily,
              },
            ]}>
            {textCount}
          </Text>
        </View>
        {/* </ImageBackground> */}
      </TouchableOpacity>
    </Marker>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cluster: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default memo(CustomClusteredMarkers);
