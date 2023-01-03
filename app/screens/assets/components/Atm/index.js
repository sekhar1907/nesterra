import {StyleSheet, TouchableOpacity, Text, FlatList, View} from 'react-native';
import React, {useState, useEffect, useMemo, useRef} from 'react';
import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';
import TableHeader from './TabbleHeader';
import {
  GetAllAtmNumber,
  GetAllAtmdETAILS,
} from './../../../../actions/AtmsAssets';
import {connect, useSelector, useDispatch} from 'react-redux';
import DataLoder from '../../../../components/lodder/DataLoder';
import {copyText, tostalert} from '../../../../components/helper';
import NoDataViewFlatList from '../../../../components/NoDataViewFlatList';
import ToggleView from '../../../../components/ToggleView';

import {
  FILTER_ALL_ATMS,
  FILTER_BY_ACTIVE,
} from '../../../../actions/actionType/AtmsAssets';
import BottoSheetView from './BottoSheetView';
import BottomSheetDetails from './BottomSheetDetails';
import DataColum from './DataColum';

const Atm = ({GetAllAtmNumber, GetAllAtmdETAILS}) => {
  const snapPoints = useMemo(() => ['20%', '47%', '95%'], []);
  const [loder, setLoder] = useState(true);
  const [diplayName, setDiplayName] = useState('');
  const {data} = useSelector(state => state.AtmsAssets);
  const [refresh, setRefresh] = useState(false);
  const [switchView, setSwitchView] = useState(true);
  const [bottomSheetLoder, setBottomSheetLoder] = useState(true);
  const [detailsLoder, setDetailsLoder] = useState(true);

  const dispatch = useDispatch();
  const atmRef = useRef(null);
  const atmdDetailsRef = useRef(null);
  const atmdDetailsRef1 = useRef(null);

  const fiterCircuitsActive = () => {
    dispatch({
      type: FILTER_BY_ACTIVE,
    });
  };
  const allData = () => {
    dispatch({
      type: FILTER_ALL_ATMS,
    });
  };
  useEffect(() => {
    GetAllAtmNumber(setLoder);
  }, []);
  return (
    <>
      {loder ? (
        <DataLoder />
      ) : (
        <>
          <SecondRow
            setDiplayName={setDiplayName}
            atmRef={atmRef}
            diplayName={diplayName}
          />
          <ThirdRow
            atmRef={atmRef}
            setDiplayName={setDiplayName}
            setBottomSheetLoder={setBottomSheetLoder}
            diplayName={diplayName}
          />
          <TableHeader />
          <View style={styles.table}>
            <FlatList
              showsVerticalScrollIndicator={false}
              removeClippedSubviews
              data={data}
              keyExtractor={(item, i) => i.toString()}
              renderItem={({index, item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      //

                      GetAllAtmdETAILS(item.ATM_ID, setDetailsLoder);
                      atmdDetailsRef.current.snapToIndex(2);
                    }}
                    style={{
                      ...styles.tableRow1,
                      height: 40,
                      backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
                      marginVertical: 1,
                    }}>
                    <DataColum title={item.ATM_ID} border={0} />
                    <View
                      style={{
                        ...styles.tableRowColum2,
                        width: '25%',
                        borderLeftColor: 'white',
                        borderLeftWidth: 2,
                        backgroundColor:
                          item.ATM_Status === 'Active' ? '#c6efcd' : '#ffc8ce',
                      }}>
                      <TouchableOpacity
                        onLongPress={() => {
                          copyText(item.ATM_Status);

                          tostalert(item.ATM_Status);
                        }}>
                        <Text style={styles.boxText1}> {item.ATM_Status}</Text>
                      </TouchableOpacity>
                    </View>

                    <DataColum title={item.Model} border={2} />
                    <DataColum title={item.Vendor} border={2} />
                  </TouchableOpacity>
                );
              }}
              refreshing={refresh}
              onRefresh={() => {
                setDiplayName('');
                GetAllAtmNumber(setLoder);
              }}
              ListEmptyComponent={() => {
                return <NoDataViewFlatList />;
              }}
            />
          </View>
          {switchView ? (
            <>
              <ToggleView
                name="Circuits"
                size={'medium'}
                length={data.length}
                alldata={allData}
                activeFilter={fiterCircuitsActive}
              />
            </>
          ) : null}
          <BottoSheetView
            atmRef={atmRef}
            bottomSheetLoder={bottomSheetLoder}
            diplayName={diplayName}
          />

          <BottomSheetDetails
            snapPoints={snapPoints}
            atmdDetailsRef={atmdDetailsRef}
            detailsLoder={detailsLoder}
          />
        </>
      )}
    </>
  );
};

export default connect(null, {GetAllAtmNumber, GetAllAtmdETAILS})(Atm);

const styles = StyleSheet.create({
  ///========Lodder

  loderView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  ///========Lodder
  ///========id Button
  idButton: {
    width: 90,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },

  ///========id View
  idView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  idViewLeft: {
    width: '80%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  idViewRight: {width: '20%', height: '100%'},
  ///========id View
  ///========TABELE HEADER
  tableHeader: {
    width: '100%',
    height: 40,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum1: {
    height: '100%',
    backgroundColor: '#007aff',
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  ///========TABELE HEADER
  ///========TABELE
  table: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
  },
  tableRow1: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: 'green',
  },
  //   tableRowColum1: {
  //     height: '100%',
  //     backgroundColor: '#007aff',
  //   },
  tableRowColum2: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
