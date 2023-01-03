import {
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';

import imgg from '../../components/imageLink/saveTabImage';
import {useSelector} from 'react-redux';
import Details from './Details';

const Saved = () => {
  const {circuitItems} = useSelector(state => state.CircuitsItems);
  const {devicestItems} = useSelector(state => state.DevicesItems);

  const {atmsItem} = useSelector(state => state.AtmsItem);
  const {siteItem} = useSelector(state => state.SiteItem);
  const {orderItem} = useSelector(state => state.OrdersItem);
  const detailsRef = useRef(null);
  const DetailsOneRef = useRef(null);
  const [displayView, setDisplayView] = useState('Atms');
  const ListItem = ({source, title, item, onPress}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={{
          width: '100%',
          height: 60,
          borderBottomColor: 'black',
          borderBottomWidth: 0.8,

          flexDirection: 'row',
        }}>
        <View style={{width: '15%', height: '100%', justifyContent: 'center'}}>
          <Image
            style={{width: 30, height: 30, resizeMode: 'contain'}}
            source={source}
          />
        </View>
        <View style={{width: '85%', height: '100%', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
            {title}
          </Text>
          <Text>{item} Items</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const atmsDetails = () => {
    setDisplayView('Atms');
    detailsRef.current.snapToIndex(2);
  };
  const devicesDetails = () => {
    setDisplayView('Devices');
    detailsRef.current.snapToIndex(2);
  };
  const circuitsDetails = () => {
    setDisplayView('Circuits');
    detailsRef.current.snapToIndex(2);
  };
  const SitesDetails = () => {
    setDisplayView('Sites');
    detailsRef.current.snapToIndex(2);
  };
  const OrdersDetails = () => {
    setDisplayView('Orders');
    detailsRef.current.snapToIndex(2);
  };
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
        }}>
        <View style={styles.container}>
          <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
            Saved
          </Text>
          <ListItem
            source={imgg.imgAtm}
            title="ATMS"
            item={atmsItem.length}
            onPress={atmsDetails}
          />
          <ListItem
            source={imgg.imgBranche}
            title="Branches"
            item={0}
            onPress={devicesDetails}
          />
          <ListItem
            source={imgg.imgCircuits}
            title="Circuits"
            item={circuitItems.length}
            onPress={circuitsDetails}
          />
          <ListItem
            source={imgg.imgDevices}
            title="Devices"
            item={devicestItems.length}
            onPress={devicesDetails}
          />
          <ListItem
            source={imgg.imgSite}
            title="Sites"
            item={siteItem.length}
            onPress={SitesDetails}
          />
          <ListItem
            source={imgg.imgOrders}
            title="Orders"
            item={orderItem.length}
            onPress={OrdersDetails}
          />
          <ListItem
            source={imgg.imgNotes}
            title="My Notes"
            item={''}
            onPress={SitesDetails}
          />
        </View>
      </SafeAreaView>
      <Details detailsRef={detailsRef} displayView={displayView} />
    </>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
