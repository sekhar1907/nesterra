import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import moment from 'moment';
import DataLoder from '../../../components/lodder/DataLoder';
import CheckBoxView from '../../../components/checkBox/CheckBoxView';
import ShortView from './Devices/ShortView';
import {useNavigation} from '@react-navigation/native';

const BottomSheetViewDevices = ({deviceRefDetails, setDeviveView, lodding}) => {
  const snapPoints = useMemo(() => ['20%', '47%', '95%'], []);
  // const {inv_Id} = route.params;
  const {item} = useSelector(state => state.allDeviceDetails);
  const [allView, setAllView] = React.useState(false);
  // console.log(item, 'pp');
  const GrewRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#fbe5d6',
          }}>
          <Text style={{color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const SkyRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#b7ecff',
          }}>
          <Text style={{color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const GrewLightRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#deebf7',
          }}>
          <Text style={{color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const YellowDarkRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#e2f0d9',
          }}>
          <Text style={{color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const YellowRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#ffffcc',
          }}>
          <Text style={{color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const navigation = useNavigation();
  return (
    <BottomSheet
      handleIndicatorStyle={{
        backgroundColor: '#757575',
        height: 0,
        opacity: 0.5,
      }}
      handleComponent={() => (
        <View style={styles.closeLineContainer}>
          <View style={styles.closeLine}>
            <SimpleLineIcons name="arrow-up" size={20} color="black" />
          </View>
        </View>
      )}
      enabledInnerScrolling={true}
      enabledContentGestureInteraction={false}
      ref={deviceRefDetails}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      animateOnMount
      animatedPosition={true}>
      {lodding ? (
        <View
          style={{
            width: '100%',
            height: 500,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <DataLoder />
        </View>
      ) : (
        <>
          <View
            style={{
              width: '100%',
              height: 30,
              flexDirection: 'row',
              marginBottom: 5,
              paddingRight: 15,
            }}>
            <View style={{width: '50%', height: '100%'}}>
              <CheckBoxView allView={allView} setAllView={setAllView} />
            </View>
            <View
              style={{
                width: '50%',
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setDeviveView(true);

                  deviceRefDetails.current.close();
                }}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#007aff',
                  }}>
                  <Text>
                    <Entypo name="cross" size={20} color="white" />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <BottomSheetScrollView style={{paddingHorizontal: 10}}>
            {!allView ? (
              <ShortView deviceRefDetails={deviceRefDetails} />
            ) : (
              <>
                {/* ===================== */}

                <View style={{...styles.secondTableRow}}>
                  <View
                    style={{
                      ...styles.secondTableColum,
                      backgroundColor: '#deebf7',
                    }}>
                    <Text style={{color: 'black'}}>Device Name</Text>
                  </View>

                  <View
                    style={{
                      ...styles.secondTableColum,
                      borderLeftColor: 'black',
                      borderLeftWidth: 0.7,
                    }}>
                    <Text style={{color: 'black'}}>{item.Device_Name}</Text>
                  </View>
                </View>

                {/* ===================== */}
                {/* ===================== */}

                <View style={{...styles.secondTableRow}}>
                  <View
                    style={{
                      ...styles.secondTableColum,
                      backgroundColor: item.Device_Name ? '#deebf7' : 'white',
                    }}>
                    <Text style={{color: 'black'}}>Device Status</Text>
                  </View>
                  <View
                    style={{
                      ...styles.secondTableColum,
                      borderLeftColor: 'black',
                      borderLeftWidth: 0.7,
                      backgroundColor:
                        item.Device_Status == 'Active' ? '#c6efcd' : '#e7c4b5',
                    }}>
                    <Text style={{color: 'black'}}>{item.Device_Status}</Text>
                  </View>
                </View>

                {/* ===================== */}
                {/* ===================== */}
                <GrewRow title="Vendor" value={item.Device_Vendor} />
                <GrewRow title="Device Type" value={item.Device_Type} />
                <GrewRow title="Environment" value={item.Device_Environment} />
                <GrewRow title="Device Function" value={item.Device_Function} />
                <GrewRow title="Device Layer" value={item.Device_Layer} />
                <GrewRow
                  title="Device Details"
                  value={item.Device_Details ? item.Device_Details : '--'}
                />
                <SkyRow
                  title="Branch ID"
                  value={item.Branch_ID ? item.Branch_ID : '--'}
                />

                <View style={styles.secondTableRow}>
                  <View
                    style={{
                      ...styles.secondTableColum,
                      backgroundColor: '#b7ecff',
                    }}>
                    <Text style={{color: 'black'}}>Site ID</Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      deviceRefDetails.current.close();
                      navigation.navigate('Explore');
                    }}
                    style={{
                      ...styles.secondTableColum,
                      borderLeftColor: 'black',
                      borderLeftWidth: 0.7,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}>
                    <Text style={{color: '#007aff'}}>{item.Site_ID}</Text>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        resizeMode: 'center',
                        marginLeft: 5,
                      }}
                      source={require('../../../images/location.png')}
                    />
                  </TouchableOpacity>
                </View>

                {/* ===================== */}

                <View style={styles.secondTableRow}>
                  <View
                    style={{
                      ...styles.secondTableColum,
                      backgroundColor: '#b7ecff',
                    }}>
                    <Text style={{color: 'black'}}>Site Status</Text>
                  </View>
                  <View
                    style={{
                      ...styles.secondTableColum,
                      borderLeftColor: 'black',
                      borderLeftWidth: 0.7,
                      backgroundColor: item.Site_Status ? '#c6efcd' : '#e7c4b5',
                    }}>
                    <Text style={{color: 'black'}}>{item.Site_Status}</Text>
                  </View>
                </View>
                <SkyRow
                  title="Site Type Primary"
                  value={
                    item.Site_Type_Hierarchical
                      ? item.Site_Type_Hierarchical
                      : '--'
                  }
                />
                <SkyRow
                  title="Site Type Detail"
                  value={
                    item.Site_Type_Concatenated_Detail
                      ? item.Site_Type_Concatenated_Detail
                      : '--'
                  }
                />
                <SkyRow
                  title="Address"
                  value={item.SmartSite_Address ? item.SmartSite_Address : '--'}
                />
                <GrewLightRow title="Circuits" value={'--'} />
                <GrewLightRow
                  title="Service ID"
                  value={item.Service_ID ? item.Service_ID : '--'}
                />
                <GrewLightRow
                  title="Domain"
                  value={item.Domain ? item.Domain : '--'}
                />
                <GrewLightRow
                  title="Mgmt Interface"
                  value={
                    item.Management_Interface ? item.Management_Interface : '--'
                  }
                />

                <GrewLightRow
                  title="Loopback Address"
                  value={item.Loopback_Address ? item.Loopback_Address : '--'}
                />
                <GrewLightRow
                  title="Serial Number"
                  value={item.Serial_Number ? item.Serial_Number : '--'}
                />
                <GrewLightRow
                  title="Model"
                  value={item.Model ? item.Model : '--'}
                />
                <GrewLightRow
                  title="MAC ID"
                  value={item.MAC_ID ? item.MAC_ID : '--'}
                />
                <GrewLightRow
                  title="Hardware Version"
                  value={item.Hardware_Version ? item.Hardware_Version : '--'}
                />
                <GrewLightRow
                  title="Software Version"
                  value={item.Software_Version ? item.Software_Version : '--'}
                />
                <GrewLightRow
                  title="System Description"
                  value={
                    item.System_Description ? item.System_Description : '--'
                  }
                />
                <GrewLightRow
                  title="Config Compliance"
                  value={item.Config_Compliance ? item.Config_Compliance : '--'}
                />
                <GrewLightRow
                  title="Code Compliance"
                  value={item.Code_Compliance ? item.Code_Compliance : '--'}
                />
                <GrewLightRow
                  title="Contact Info"
                  value={
                    item.Contact_Information ? item.Contact_Information : '--'
                  }
                />
                <GrewLightRow
                  title="Responsible Engineer"
                  value={
                    item.Responsible_Engineer ? item.Responsible_Engineer : '--'
                  }
                />
                <GrewLightRow
                  title="Re Validation Date"
                  value={
                    item.Responsible_Engineer_Validation_Date
                      ? moment(
                          item.Responsible_Engineer_Validation_Date,
                        ).format('MM-DD-YY')
                      : '--'
                  }
                />
                <GrewLightRow
                  title="Last Polled"
                  value={
                    item.Last_Polled_or_Discovery
                      ? item.Last_Polled_or_Discovery
                      : '--'
                  }
                />
                <YellowDarkRow title="Maint Plan" value={'--'} />
                <YellowDarkRow
                  title="Maint Cost(M)"
                  value={item.License_M ? item.License_M : `$${0}`}
                />
                <YellowDarkRow
                  title="License Cost(M)"
                  value={
                    item.Maintenance_Coverage_Plan
                      ? `$${item.Maintenance_Coverage_Plan}`
                      : '$ 0'
                  }
                />
                <YellowDarkRow title="Replacement Cost(M)" value={'$ 0'} />
                <YellowDarkRow
                  title="ReSale Value"
                  value={item.Resale_Value ? `$ ${item.Resale_Value}` : `$${0}`}
                />
                <YellowDarkRow
                  title="Overhead Cost(M)"
                  value={item.Overhead_M ? `$ ${item.Overhead_M}` : `$${0}`}
                />
                <YellowRow
                  title="Purchase Date"
                  value={
                    item.Purchase_Date
                      ? moment(item.Purchase_Date).format('MM-DD-YY')
                      : '--'
                  }
                />
                <YellowRow
                  title="EOL Date"
                  value={
                    item.EOL_Date
                      ? moment(item.EOL_Date).format('MM-DD-YY')
                      : '--'
                  }
                />
                <YellowRow
                  title="EOS Date"
                  value={
                    item.EOS_Date
                      ? moment(item.EOS_Date).format('MM-DD-YY')
                      : '--'
                  }
                />
                <YellowRow
                  title="LDoS Date"
                  value={
                    item.LDoS_Date
                      ? moment(item.LDoS_Date).format('MM-DD-YY')
                      : '--'
                  }
                />
                <YellowRow
                  title="Last Patch Date"
                  value={
                    item.LDoS_Date
                      ? moment(item.Last_Patch_Date).format('MM-DD-YY')
                      : '--'
                  }
                />
                <GrewLightRow
                  title="EOL Count"
                  value={item.EOL_Count ? item.EOL_Count : '--'}
                />
                <GrewLightRow
                  title="Upgraded Code"
                  value={item.Upgraded_Code ? item.Upgraded_Code : '--'}
                />
                <GrewLightRow
                  title="Compliant"
                  value={item.Compliant ? item.Compliant : '--'}
                />
                <GrewLightRow
                  title="Compliant"
                  value={item.Compliant ? item.Compliant : '--'}
                />
                <GrewLightRow
                  title="Non Compliant"
                  value={item.Non_Compliant ? item.Non_Compliant : '--'}
                />
                <GrewLightRow
                  title="In Progress"
                  value={item.In_Progress ? item.In_Progress : '--'}
                />
                <GrewLightRow
                  title="Vulnerability SLA Target"
                  value={
                    item.Vulnerability_SLA_Achievement_Target
                      ? moment(
                          item.Vulnerability_SLA_Achievement_Target,
                        ).format('YYYY-MM-DD')
                      : '--'
                  }
                />
                <GrewLightRow
                  title="Prod Rel Team"
                  value={item.Prod_Rel_Team ? item.Prod_Rel_Team : '--'}
                />
                <GrewLightRow
                  title="Compiled"
                  value={item.Compiled ? item.Compiled : '--'}
                />
                <GrewLightRow
                  title="Alt System Description"
                  value={
                    item.Alternate_System_Description
                      ? item.Alternate_System_Description
                      : '--'
                  }
                />
                <GrewLightRow
                  title="Alt Device Name"
                  value={
                    item.Alternative_Device_Name
                      ? item.Alternative_Device_Name
                      : '--'
                  }
                />
                <GrewLightRow
                  title="NB First Discovery Time"
                  value={
                    item.NB_First_Discovery_Time
                      ? moment(item.NB_First_Discovery_Time).format(
                          'YYYY-MM-DD',
                        )
                      : '--'
                  }
                />
                <GrewLightRow
                  title="NB Last Discovery Time"
                  value={
                    item.NB_Last_Discovery_Time
                      ? moment(item.NB_Last_Discovery_Time).format('YYYY-MM-DD')
                      : '--'
                  }
                />

                <View style={{height: 60, width: '100%'}}></View>
              </>
            )}
          </BottomSheetScrollView>
        </>
      )}
    </BottomSheet>
  );
};

export default BottomSheetViewDevices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 0,
    marginBottom: 5,
    borderBottomWidth: 0,
    borderRadius: 5,
  },
  topView: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  topItem: {
    width: '33.33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topItem1: {
    width: '33.33%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
  },

  ///=========Table
  table: {
    width: '100%',
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 15,
  },
  tableRow: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRow1: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum: {
    width: '23%',
    height: '100%',
    marginHorizontal: 2,
    borderBottomColor: '#73c0b8',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRowColumLast: {
    width: '25%',
    marginHorizontal: 2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 14,
    color: 'white',
  },
  ///=========Table
  ///=========data row
  tableRow1: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum1: {
    width: '23%',
    height: '100%',
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxText1: {
    fontSize: 14,
    color: '#000000',
  },
  ///=========data row
  ///========Second table
  secondTable: {
    width: '100%',
    marginTop: 20,
    alignSelf: 'center',
  },
  secondTableRow: {
    width: '100%',
    height: 50,

    flexDirection: 'row',
    // borderTopColor: 'black',
    // borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 0.8,

    // borderLeftColor: 'black',
    // borderLeftWidth: 1,
  },
  secondTableRow1: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
  },
  secondTableColum: {
    width: '50%',
    height: '100%',

    paddingLeft: 10,
    justifyContent: 'center',
  },
  secondTableColum2: {
    width: '50%',
    height: '100%',

    paddingLeft: 10,
    justifyContent: 'center',
  },
  tt: {
    width: '50%',
    height: '100%',
    backgroundColor: '#deebf7',
    borderLeftColor: 'black',
    borderLeftWidth: 0.5,

    paddingLeft: 10,
    justifyContent: 'center',
  },
  closeLineContainer: {
    alignSelf: 'center',
  },
  closeLine: {
    width: 30,
    height: 30,
    borderRadius: 3,
    marginTop: 9,

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
