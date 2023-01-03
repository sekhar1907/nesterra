import React, {
  memo,
  useState,
  useEffect,
  useMemo,
  useRef,
  forwardRef,
} from 'react';
import {Dimensions, LayoutAnimation, Platform} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {connect, useSelector} from 'react-redux';
import SuperCluster from 'supercluster';

import SearchA from '../Search';

import ClusterMarker from './ClusteredMarker';
import {
  isMarker,
  markerToGeoJSONFeature,
  calculateBBox,
  returnMapZoom,
  generateSpiral,
} from './helpers';

const ClusteredMapView = forwardRef(
  (
    {
      changeLatLng,
      currentRegion2,
      radius,
      maxZoom,
      minZoom,
      minPoints,
      extent,
      nodeSize,
      children,
      onClusterPress,
      onRegionChangeComplete,
      onMarkersChange,
      preserveClusterPressBehavior,
      clusteringEnabled,
      clusterColor,
      clusterTextColor,
      clusterFontFamily,
      spiderLineColor,
      layoutAnimationConf,
      animationEnabled,
      renderCluster,
      tracksViewChanges,
      spiralEnabled,
      superClusterRef,
      ...restProps
    },
    ref,
  ) => {
    // console.log(clusterColor);
    const {lat, lng} = useSelector(state => state.setLatLang);

    const [markers, updateMarkers] = useState([]);
    const [spiderMarkers, updateSpiderMarker] = useState([]);
    const [otherChildren, updateChildren] = useState([]);
    const [superCluster, setSuperCluster] = useState(null);

    const [currentRegion, updateRegion] = useState(
      restProps.region || restProps.initialRegion,
    );

    const [isSpiderfier, updateSpiderfier] = useState(false);
    const [clusterChildren, updateClusterChildren] = useState(null);
    const mapRef = useRef();

    const propsChildren = useMemo(
      () => React.Children.toArray(children),
      [children],
    );

    useEffect(() => {
      const rawData = [];
      const otherChildren = [];

      if (!clusteringEnabled) {
        updateSpiderMarker([]);
        updateMarkers([]);
        updateChildren(propsChildren);
        setSuperCluster(null);
        return;
      }

      propsChildren.forEach((child, index) => {
        if (isMarker(child)) {
          rawData.push(markerToGeoJSONFeature(child, index));
        } else {
          otherChildren.push(child);
        }
      });

      const superCluster = new SuperCluster({
        radius,
        maxZoom,
        minZoom,
        minPoints,
        extent,
        nodeSize,
      });

      superCluster.load(rawData);

      const bBox = calculateBBox(currentRegion);
      const zoom = returnMapZoom(currentRegion, bBox, minZoom);
      const markers = superCluster.getClusters(bBox, zoom);

      updateMarkers(markers);
      updateChildren(otherChildren);
      setSuperCluster(superCluster);

      superClusterRef.current = superCluster;
    }, [propsChildren, clusteringEnabled]);

    useEffect(() => {
      if (!spiralEnabled) return;

      if (isSpiderfier && markers.length > 0) {
        let allSpiderMarkers = [];
        let spiralChildren = [];
        markers.map((marker, i) => {
          if (marker.properties.cluster) {
            spiralChildren = superCluster.getLeaves(
              marker.properties.cluster_id,
              Infinity,
            );
          }
          let positions = generateSpiral(marker, spiralChildren, markers, i);
          allSpiderMarkers.push(...positions);
        });

        updateSpiderMarker(allSpiderMarkers);
      } else {
        updateSpiderMarker([]);
      }
    }, [isSpiderfier, markers]);
    const _onRegionChange = (region, details) => {
      // console.log(region, details, 'first');
    };
    const _onRegionChangeComplete = region => {
      changeLatLng(
        region.latitude,
        region.longitude,
        region.latitudeDelta,
        region.longitudeDelta,
      );
      // console.log(region, 'region');
      // console.log(superCluster, 'superCluster');
      //setLatLng({lat: region.latitude, lng: region.longitude});
      if (superCluster && region) {
        const bBox = calculateBBox(region);
        // console.log(bBox, 'bBox');
        const zoom = returnMapZoom(region, bBox, minZoom);
        const markers = superCluster.getClusters(bBox, zoom);
        if (animationEnabled && Platform.OS === 'ios') {
          LayoutAnimation.configureNext(layoutAnimationConf);
        }
        if (zoom >= 18 && markers.length > 0 && clusterChildren) {
          if (spiralEnabled) updateSpiderfier(true);
        } else {
          if (spiralEnabled) updateSpiderfier(false);
        }
        updateMarkers(markers);
        onMarkersChange(markers);
        onRegionChangeComplete(region, markers);
        updateRegion(region);
      } else {
        onRegionChangeComplete(region);
      }
    };

    const _onClusterPress = cluster => () => {
      const children = superCluster.getLeaves(cluster.id, Infinity);
      updateClusterChildren(children);

      if (preserveClusterPressBehavior) {
        onClusterPress(cluster, children);
        return;
      }

      const coordinates = children.map(({geometry}) => ({
        latitude: geometry.coordinates[1],
        longitude: geometry.coordinates[0],
      }));

      mapRef.current.fitToCoordinates(coordinates, {
        edgePadding: restProps.edgePadding,
      });

      onClusterPress(cluster, children);
    };
    const region = {
      latitude: 21.649719233396155,
      latitudeDelta: 58.337528733629384,
      longitude: -86.58709522336721,
      longitudeDelta: 34.517042711377144,
    };
    return (
      <>
        {/* <SearchA /> */}
        <MapView
          {...restProps}
          ref={map => {
            mapRef.current = map;
            if (ref) ref.current = map;
            restProps.mapRef(map);
          }}
          onRegionChange={(region, gesture) => {
            if (Platform.OS === 'android') {
              if (gesture.isGesture) {
                _onRegionChange(region);
              }
            }
          }}
          // onRegionChangeComplete={_onRegionChangeComplete}
          region={currentRegion}>
          {markers.map(marker =>
            marker.properties.point_count === 0 ? (
              propsChildren[marker.properties.index]
            ) : !isSpiderfier ? (
              renderCluster ? (
                renderCluster({
                  onPress: _onClusterPress(marker),
                  clusterColor: 'red',
                  clusterTextColor,
                  clusterFontFamily,
                  ...marker,
                })
              ) : (
                <ClusterMarker
                  key={`cluster-${marker.id}`}
                  {...marker}
                  onPress={_onClusterPress(marker)}
                  clusterColor={
                    restProps.selectedClusterId === marker.id
                      ? marker.restProps.selectedClusterColor
                      : marker.properties.point_count.toString().length === 1
                      ? 'red'
                      : marker.properties.point_count.toString().length === 2
                      ? '#ef8e34'
                      : marker.properties.point_count.toString().length === 3
                      ? '#bb271a'
                      : marker.properties.point_count.toString().length === 4
                      ? '#8c3ac4'
                      : 'pink'
                  }
                  clusterTextColor={clusterTextColor}
                  clusterFontFamily={clusterFontFamily}
                  tracksViewChanges={tracksViewChanges}
                />
              )
            ) : null,
          )}
          {otherChildren}
          {spiderMarkers.map(marker => {
            return propsChildren[marker.index]
              ? React.cloneElement(propsChildren[marker.index], {
                  coordinate: {...marker},
                })
              : null;
          })}
          {spiderMarkers.map((marker, index) => (
            <Polyline
              key={index}
              coordinates={[marker.centerPoint, marker, marker.centerPoint]}
              strokeColor={spiderLineColor}
              strokeWidth={1}
            />
          ))}
        </MapView>
      </>
    );
  },
);

ClusteredMapView.defaultProps = {
  clusteringEnabled: true,
  spiralEnabled: true,
  animationEnabled: true,
  preserveClusterPressBehavior: false,
  layoutAnimationConf: LayoutAnimation.Presets.spring,
  tracksViewChanges: false,
  // SuperCluster parameters
  radius: Dimensions.get('window').width * 0.08,
  maxZoom: 20,
  minZoom: 1,
  minPoints: 2,
  extent: 512,
  nodeSize: 64,
  // Map parameters
  edgePadding: {top: 50, left: 50, right: 50, bottom: 50},
  // Cluster styles
  clusterColor: '#00B386',
  clusterTextColor: '#FFFFFF',
  spiderLineColor: '#FF0000',
  // Callbacks
  onRegionChangeComplete: () => {},
  onClusterPress: () => {},
  onMarkersChange: () => {},
  onSearchPress: () => {},
  superClusterRef: {},
  mapRef: () => {},
};

export default memo(ClusteredMapView);
