import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useEffect} from 'react';
import {Heading, VStack} from 'native-base';
import ApplyButton from '../../components/button/ApplyButton';
import {useSelector, connect} from 'react-redux';

const {height, width} = Dimensions.get('screen');

import Country from './Country';
import SiteStatus from './SiteStatus';
// import { data1 } from './data';
import SiteType from './SiteType';
import SiteSubType from './SiteSubType';
import Vendor from './Vendor';
import {clear_all} from '../../actions/selectList';
import {sity_status_coordinates} from '../../actions/coordinates';

const data1 = [
  {id: 0, name: 'Site Status', isActive: true},
  {id: 1, name: 'Country', isActive: false},
  {id: 2, name: 'Site Type', isActive: false},
  {id: 3, name: 'Site SubType', isActive: false},
  {id: 4, name: 'Vendor', isActive: false},
];

const Filtter = ({clear_all, navigation, sity_status_coordinates}) => {
  const list = useSelector(state => state);
  const list1 = useSelector(state => state.selectList);
  //
  // console.log(list1.checkList, 'filter');
  const get_filterdata = () => {
    let data = [];
    const data1 = list1.checkList.map((item, i) => {
      const a = item.txt;
      return data.push(a);
    });
    // console.log(data.toString());

    console.log(encodeURIComponent(JSON.stringify(data)));

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}, //s,
    };

    fetch(
      'http://citizenmobileapi.azurewebsites.net/apiGetLocationDataBySiteStatus=' +
        encodeURIComponent(JSON.stringify(data)),
      requestOptions,
    )
      .then(response => response.json())
      .then(data => console.log(data, 'fasdfsda'))
      .catch(err => console.log(err, 'err'));
  };

  const [item, setItem] = React.useState(0);
  const [allItem, setAllItem] = React.useState(data1);

  const [title, setTitle] = React.useState('Close');
  const colorChange = data => {
    setTitle(data);
  };

  const actiText = id => {
    let listData = allItem.map(item => {
      let itm = {...item, isActive: false};
      return itm;
    });

    listData[id].isActive = true;
    setAllItem(listData);
  };

  const selectedComponent = () => {
    switch (true) {
      case item == 0:
        return <SiteStatus />;

      case item == 1:
        return <Country />;

      case item == 2:
        return <SiteType />;

      case item == 3:
        return <SiteSubType />;

      case item == 4:
        return <Vendor />;
    }
  };

  //  componentDidMount() {
  //     // Simple POST request with a JSON body using fetch
  //     const requestOptions = {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ stringdate: stringyfyvarieble })
  //     };
  //     fetch('http://citizenmobileapi.azurewebsites.net/api/testingurl', requestOptions)
  //         .then(response => response.json())
  //         .then(data => this.setState({ postId: data.id }));
  // }

  // useEffect(() => {}, []);
  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={{...styles.header, marginTop: StatusBar.currentHeight}}>
        <Heading size="sm">Filters</Heading>
        <TouchableOpacity
          onPress={() => {
            clear_all(list.selectList.list);
            // setChecked(false);
            // handleChangeClear()
          }}>
          <Text style={styles.rightText}>CLEAR ALL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.mainContainerLeft}>
          <VStack space="6" mt="8">
            {allItem.map((item, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    setItem(item.id);
                    actiText(item.id);
                  }}>
                  <Heading
                    size="xs"
                    style={{color: item.isActive ? '#1b5a90' : '#757575'}}>
                    {item.name}
                    {/* {item.isActive} */}
                  </Heading>
                </TouchableOpacity>
              );
            })}
          </VStack>
        </View>
        <View style={styles.mainContainerRight}>{selectedComponent()}</View>
      </View>

      <View style={styles.buttonUpper}>
        <ApplyButton
          colorChange={() => {
            get_filterdata();
            colorChange('Close');
            navigation.goBack();
          }}
          bgColor={title === 'Close' ? '#1b5a90' : '#ffffff'}
          textColor={title === 'Close' ? '#ffffff' : '#1b5a90'}
          title="Close"
        />
        <ApplyButton
          colorChange={() => {
            colorChange('Apply');
            get_filterdata();
            sity_status_coordinates();
            navigation.goBack();
          }}
          bgColor={title === 'Apply' ? '#1b5a90' : '#ffffff'}
          textColor={title === 'Apply' ? '#ffffff' : '#1b5a90'}
          title="Apply"
        />
      </View>
    </SafeAreaView>
  );
};

export default connect(null, {clear_all, sity_status_coordinates})(Filtter);

const styles = StyleSheet.create({
  rightText: {
    backgroundColor: '#1b5a90',
    color: 'white',
    fontWeight: '500',
    fontSize: 12,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 3,
  },
  buttonUpper: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  mainContainer: {
    height: height - 195,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  mainContainerLeft: {
    height: '100%',
    backgroundColor: '#f5f5f5',
    width: '30%',
    alignItems: 'center',
  },
  mainContainerRight: {height: '100%', width: '70%'},
});
