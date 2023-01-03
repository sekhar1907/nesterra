import React, {memo} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Marker} from 'react-native-maps';
import {returnMarkerStyle} from './helpers';

const ClusteredMarker = ({
  geometry,
  properties,
  onPress,
  clusterColor,
  clusterTextColor,
  clusterFontFamily,
  tracksViewChanges,
}) => {
  const points = properties.point_count;
  const {width, height, fontSize, size} = returnMarkerStyle(points);
  const colorCheck = value => {
    switch (true) {
      case value > 10 && value < 50:
        return 'red';

      case value > 50 && value < 100:
        return '#ef8e34';

      case value > 100 && value < 200:
        return '#bb271a';
      case value > 200 && value < 1000:
        return '#8c3ac4';
    }
  };
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
      <TouchableOpacity style={[styles.container, {width, height}]}>
        <View
          style={[
            styles.wrapper,
            {
              width,
              height,
              borderRadius: width / 2,
            },
          ]}
        />
        <View
          style={[
            styles.cluster,
            {
              backgroundColor: clusterColor,
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}>
          <Text
            style={[
              styles.text,
              {
                color: clusterTextColor,
                fontSize,
                fontFamily: clusterFontFamily,
              },
            ]}>
            {points}
          </Text>
        </View>
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
  wrapper: {
    position: 'absolute',
    opacity: 0.5,
    zIndex: 0,
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

export default memo(ClusteredMarker);
