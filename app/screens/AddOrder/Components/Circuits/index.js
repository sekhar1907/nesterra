import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  CircleView,
  CircleView1,
  CircleViewCircle,
  ResetView,
} from '../CircleView';

import InputTypeView1 from '../InputTypeView/InputTypeView1';
import {serviceType} from '../../../../utils/addOrders';

const Circuits = () => {
  const [text, setText] = React.useState('');
  return (
    <>
      <View style={styles.stepView}>
        <View style={styles.stepViewIner}>
          <CircleView title="1" />
          <CircleView1 />

          <CircleViewCircle title="2" />
          <CircleView1 />
          <CircleViewCircle title="3" />
          <CircleView1 />
          <CircleViewCircle title="4" />
        </View>
      </View>
      <ResetView />
      <View style={styles.itemWraper}>
        <View style={styles.item}>
          <InputTypeView1
            title="Order Type"
            title2="Reason for Order"
            data={serviceType}
          />
        </View>
        <View style={styles.item}>
          <InputTypeView1
            title="Order Type"
            title2="Reason for Order"
            data={serviceType}
          />
        </View>
      </View>
      {/* ================date picker=================== */}
      <View style={styles.itemWraper}>
        <View style={styles.item1}>
          <View style={styles.DateView}>
            <Text
              style={{
                position: 'absolute',
                top: -10,
                left: 10,
                backgroundColor: '#f2f2f2',
                paddingHorizontal: 5,
              }}>
              Date Created
            </Text>
            <Text>06/04/23</Text>
          </View>
        </View>
        <View style={{...styles.item1}}>
          <View style={styles.DateView}>
            <Text
              style={{
                position: 'absolute',
                top: -10,
                left: 10,
                backgroundColor: '#f2f2f2',
                paddingHorizontal: 5,
              }}>
              Order No
            </Text>
            <Text>2897</Text>
          </View>
        </View>
      </View>

      {/* ================date picker=================== */}
    </>
  );
};

export default Circuits;

const styles = StyleSheet.create({
  stepView: {
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
    borderTopColor: '#a8a8a8',
    borderTopWidth: 1,
    marginTop: 10,
  },
  stepViewIner: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  itemWraper: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  item: {
    width: '48%',
    height: 45,
  },
  item1: {
    width: '48%',
    height: 40,
  },
  DateView: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#727272',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});
