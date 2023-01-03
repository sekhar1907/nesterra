import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useMemo, useEffect, useState} from 'react';

import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';
import Imagee from './Imagee';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import ImageLoder from '../lodder/imageLodder';
import {useIsFocused} from '@react-navigation/native';

const BottomSheetViewImage = ({
  bottomSheetRefImage,
  isLoading,
  setIsLoading,
}) => {
  const snapPoints = useMemo(() => ['20%', '50%', '95%'], []);
  const photo = useSelector(state => state.photo_url.photo_url);
  const [photo1, setPhoto1] = useState(photo);

  const isFocused = useIsFocused();

  const renderItem = ({item}) => {
    return (
      <>
        <Imagee image={item.photo_reference} />
      </>
    );
  };
  useEffect(() => {}, []);

  return (
    <>
      <BottomSheet
        handleIndicatorStyle={{
          backgroundColor: '#757575',
          height: 2.5,
          opacity: 0.5,
        }}
        enabledInnerScrolling={true}
        enabledContentGestureInteraction={false}
        ref={bottomSheetRefImage}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount
        // onChange={handleSheetChanges}
        animatedPosition={true}>
        <BottomSheetScrollView
          nestedScrollEnabled
          contentContainerStyle={styles.contentContainer}>
          <View style={{flex: 1, paddingHorizontal: 15}}>
            <View
              style={{
                width: '100%',
                height: 100,

                marginBottom: 20,
              }}>
              {/* <ScrollView
                horizontal={true}
                style={{width: '100%', height: 100}}>
                {photo &&
                  photo.map((item, i) => {
                    return <Imagee key={i} image={item.photo_reference} />;
                  })}
              </ScrollView> */}
              {isLoading ? (
                <ImageLoder />
              ) : (
                <BottomSheetFlatList
                  horizontal={true}
                  data={photo}
                  keyExtractor={(item, index) => index}
                  renderItem={renderItem}
                  contentContainerStyle={{backgroundColor: 'white'}}
                />
              )}
            </View>

            {/* =============top======== */}
            <View style={styles.top}>
              {/* =============top Left======== */}
              <View style={styles.topLeft}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>$349,900</Text>
                <Text style={{}}>Price</Text>
              </View>
              {/* =============top Left======== */}
              {/* =============top Right======== */}
              <View style={styles.topRight}>
                <View style={styles.itemOne}>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>1</Text>
                  <Text style={{}}>Beds</Text>
                </View>
                <View style={styles.itemOne}>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>1</Text>
                  <Text style={{}}>Bathas</Text>
                </View>
                <View style={styles.itemOne}>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>_</Text>
                  <Text style={{}}>Beds</Text>
                </View>
              </View>
              {/* =============top Right======== */}
            </View>
            {/* =============Middle======== */}
            <View style={styles.middle}>
              {/* =============top Left======== */}
              <View style={styles.middleLeft}>
                <View style={styles.middleLeftTop}>
                  <View style={styles.greenView}></View>
                  <Text
                    style={{fontSize: 15, fontWeight: '900', marginLeft: 10}}>
                    CONDO FOR SALE
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '75%',
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontSize: 13, fontWeight: '600'}}>
                    480 NE John Wesley Dobbes #311 Av. Atlanta, GA 30312
                  </Text>
                </View>
              </View>
              {/* =============top Left======== */}
              {/* =============top Right======== */}
              <View style={styles.middleRight}>
                <View style={{width: 100, height: 100}}>
                  <Image
                    source={require('../../images/design.png')}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </View>
              {/* =============top Right======== */}
            </View>
            {/* =============Middle======== */}
            {/* =============Share Xout======== */}
            <View style={styles.share}>
              <View style={styles.shareItem}>
                <Entypo name="cross" size={24} color="black" />
                <Text>Xout </Text>
              </View>
              <View style={styles.shareItem}>
                <MaterialIcons name="favorite-border" size={24} color="black" />
                <Text>favorite </Text>
              </View>
              <View style={styles.shareItem}>
                <Ionicons name="md-share-outline" size={24} color="black" />
                <Text>Share </Text>
              </View>
            </View>
            {/* =============Share Xout======== */}
            {/* =============comment ======== */}
            <View style={styles.comment}>
              <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
                Commutes
              </Text>
              <Text style={{fontSize: 18, fontWeight: '700', color: '#6cb1c6'}}>
                Add a commutes
              </Text>
            </View>
            {/* =============comment ======== */}
            {/* =============details ======== */}
            <View style={styles.details}>
              {/* =============One Row ======== */}

              {/* =============One Row ======== */}
              <View style={styles.oneRow}>
                <View style={{width: '50%', height: 30}}>
                  <Text style={{fontSize: 16, fontWeight: '700'}}>
                    Key Details
                  </Text>
                </View>
                <View style={{width: '50%', height: 30}}></View>
              </View>
              {/* =============One Row ======== */}
              <View style={styles.oneRow}>
                <View style={{width: '50%', height: 30}}>
                  <Text style={{fontSize: 16, fontWeight: '700'}}>
                    Price insights
                  </Text>
                </View>
                <View style={{width: '50%', height: 30}}></View>
              </View>

              {/* =============One Row ======== */}
              {/* =============One Row ======== */}
              <View style={styles.oneRow}>
                <View style={{width: '50%', height: 30}}>
                  <Text>List Price</Text>
                </View>
                <View style={{width: '50%', height: 30}}>
                  <Text style={{fontSize: 16, fontWeight: '700'}}>
                    $349,900
                  </Text>
                </View>
              </View>

              {/* =============One Row ======== */}
              {/* =============One Row ======== */}
              <View style={styles.oneRow}>
                <View style={{width: '50%', height: 30}}>
                  <Text style={{fontSize: 16}}>Est. Mo Payment</Text>
                </View>
                <View style={{width: '50%', height: 30}}>
                  <Text style={{fontSize: 16, fontWeight: '700'}}>$2,021</Text>
                </View>
              </View>

              {/* =============One Row ======== */}
              {/* =============One Row ======== */}
              <View style={styles.oneRow}>
                <View style={{width: '50%', height: 30}}>
                  <Text style={{fontSize: 16}}>Redfine Estimate</Text>
                </View>
                <View style={{width: '50%', height: 30}}>
                  <Text style={{fontSize: 16, fontWeight: '700'}}>
                    $349,513
                  </Text>
                </View>
              </View>

              {/* =============One Row ======== */}
              {/* =============One Row ======== */}
              <View style={styles.oneRow}>
                <View style={{width: '50%', height: 30}}>
                  <Text style={{fontSize: 16}}>Price/Sq.ft</Text>
                </View>
                <View style={{width: '50%', height: 30}}>
                  <Text style={{fontSize: 16, fontWeight: '700'}}> </Text>
                </View>
              </View>

              {/* =============One Row ======== */}
              {/* =============One Row ======== */}
              <View style={styles.oneRow}>
                <View style={{width: '50%', height: 30}}>
                  <Text style={{fontSize: 16, fontWeight: '700'}}>
                    Home Facts
                  </Text>
                </View>
                <View style={{width: '50%', height: 30}}>
                  <Text style={{fontSize: 16, fontWeight: '700'}}> $-</Text>
                </View>
              </View>

              {/* =============One Row ======== */}
            </View>
            {/* =============details ======== */}
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  );
};

export default BottomSheetViewImage;

const styles = StyleSheet.create({
  //=====top
  top: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    borderBottomColor: '#d3cdcd',
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  topLeft: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
  },
  topRight: {
    width: '60%',
    height: '100%',
    flexDirection: 'row',
  },
  itemOne: {
    width: '33.33%',
    height: '100%',

    justifyContent: 'center',
  },

  //=======top
  //=====Middle
  middle: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    borderBottomColor: '#d3cdcd',
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  middleLeft: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
  },
  middleRight: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleLeftTop: {
    width: '100%',
    height: '25%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  greenView: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'green',
  },

  //=======Middle
  //=======share
  share: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    borderBottomColor: '#d3cdcd',
    borderBottomWidth: 1,
    paddingVertical: 20,
    justifyContent: 'space-around',
  },
  shareItem: {
    width: '30%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },

  //=======share
  //=======comment
  comment: {
    width: '100%',
    height: 70,

    borderBottomColor: '#d3cdcd',
    borderBottomWidth: 1,

    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  //=======comment
  //=======details
  details: {
    width: '100%',

    borderBottomColor: '#d3cdcd',
    borderBottomWidth: 1,
  },
  oneRow: {width: '100%', height: 30, flexDirection: 'row'},
  //=======details

  textStyles: {
    marginLeft: 5,
  },
  contentContainer: {
    paddingTop: 10,
  },
  leftLower: {
    width: '50%',
    height: '100%',
  },
  item: {
    flexDirection: 'row',

    width: '100%',
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  leftItem: {width: '30%', height: '100%', justifyContent: 'center'},
  rightItem: {
    width: '70%',
    height: '100%',
    borderLeftColor: '#77ccc5',
    borderLeftWidth: 1,
  },
});
