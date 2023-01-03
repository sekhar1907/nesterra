import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';
import OrderLoder from '../../../components/lodder/OrderLoder';
const BottomSheetView = ({deviceRef, lodding}) => {
  const snapPoints = useMemo(() => ['20%', '47%', '95%'], []);
  // const {inv_Id} = route.params;
  const {item} = useSelector(state => state.allDeviceDetails);

  return (
    <BottomSheet
      handleIndicatorStyle={{
        backgroundColor: '#757575',
        height: 2.5,
        opacity: 0.5,
      }}
      enabledInnerScrolling={true}
      enabledContentGestureInteraction={false}
      ref={deviceRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      animateOnMount
      animatedPosition={true}>
      <View
        style={{
          width: '100%',
          height: 30,
          alignItems: 'flex-end',
          paddingRight: 15,
        }}>
        <TouchableOpacity onPress={() => deviceRef.current.close()}>
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
      <BottomSheetScrollView style={{paddingHorizontal: 10}}>
        {!lodding ? (
          <>
            {/* ===================== */}
            {item?.Device_Name ? (
              <View style={{...styles.secondTableRow}}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffc8ce',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Name
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Device_Name}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {/* ===================== */}
            {item?.Device_Status ? (
              <View style={{...styles.secondTableRow}}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: item.Device_Name ? '#ffc8ce' : 'red',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Status
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor:
                      item.Device_Status == 'Active' ? '#c6efcd' : '#e7c4b5',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Device_Status}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {/* ===================== */}
            {item?.Device_Vendor ? (
              <View style={{...styles.secondTableRow}}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Vendor
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Device_Vendor}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Device_Type ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Type
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Device_Type}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Device_Function ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Function
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Device_Function}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Device_Layer ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Layer
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Device_Layer}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Device_Details ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Details
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Device_Details}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}

            {/* ============== Second Table Row============== */}
            {/* ============== Second Table Row============== */}
            {/* ===================== */}
            {item?.Branch_ID ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#b7ecff',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Branch ID
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Branch_ID}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Site_Status ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#b7ecff',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Site Status
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: item.Site_Status ? '#c6efcd' : '#e7c4b5',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Site_Status}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Site_Type_Concatenated_Detail ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#b7ecff',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Site Type Concatenated Detail
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.secondTableColum,
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Site_Type_Concatenated_Detail}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Service_ID ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Service ID
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Service_ID}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Domain ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Domain
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Domain}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ====================== */}
            {item?.Loopback_Address ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Loopback Address
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Loopback_Address}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ====================== */}
            {item?.Serial_Number ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Serial Number
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Serial_Number}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ====================== */}
            {/* ====================== */}
            {item?.Model ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>Model</Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Model.substr(1, 20)}...
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ====================== */}
            {item?.MAC_ID ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    MAC ID
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.MAC_ID}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ====================== */}
            {item?.Hardware_Version ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Hardware Version
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Hardware_Version}
                  </Text>
                </View>
              </View>
            ) : null}
            {item?.Software_Version ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Software Version
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Software_Version}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ====================== */}
            {item?.Management_Interface ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Management Interface
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Management_Interface}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ====================== */}
            {/* ===================== */}
            {item?.Associated_Circuit ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Associated Circuit
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Associated_Circuit}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.System_Description ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    System Description
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.System_Description.substr(1, 22)}...
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Config_Compliance ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Config Compliance
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Config_Compliance}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Code_Compliance ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Code Compliance
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Code_Compliance}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Responsible_Engineer ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Responsible Engineer
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Responsible_Engineer.substr(1, 20)}...
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {item?.Responsible_Engineer_Validation_Date ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Responsible Engineer Validation Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(item.Responsible_Engineer_Validation_Date).format(
                      'DD-MM-YYYY',
                    )}
                    ...
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {item?.Last_Polled_or_Discovery ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Last Polled
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Last_Polled_or_Discovery}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Maintenance_Coverage_Plan ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#e2f0d9',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Maint Plan
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Maintenance_Coverage_Plan.substr(1, 20)}...
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Maintenance_M ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#e2f0d9',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Maint Cost(M)
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Maintenance_M}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.License_M ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#e2f0d9',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    License Cost(M)
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.License_M}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Resale_Value ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#e2f0d9',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Resale Value
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Resale_Value}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Purchase_Date ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Purchase Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(item.Purchase_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Decom_Date ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Decom_Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(item.Decom_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.EOL_Date ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    EOL Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(item.EOL_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {item?.EOS_Date ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    EOS Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(item.EOS_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {item?.LDoS_Date ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    LDoS Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(item.LDoS_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Last_Patch_Date ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    LDoS Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(item.Last_Patch_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.EOL_Count ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    EOL Count
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.EOL_Count}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {item?.Upgraded_Code ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Upgraded Code
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Upgraded_Code}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Compliant ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Compliant
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Compliant}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== 01/08/ */}
            {item?.Non_Compliant ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#dedbf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Non Compliant
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Non_Compliant}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ==================== */}
            {/* ===================== */}
            {item?.In_Progress ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    In Progress
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.In_Progress}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ==================== */}
            {item?.Vulnerability_SLA_Achievement_Target ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Vulnerability SLA Target
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(item.Vulnerability_SLA_Achievement_Target).format(
                      'YYYY-MM-DD',
                    )}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ==================== */}
            {item?.Prod_Rel_Team ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Prod Rel Team
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Prod_Rel_Team}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ==================== */}
            {item?.Compiled ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Compiled
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: 'black',
                      marginVertical: 3,
                    }}>
                    {moment(item.Compiled).format('YYYY-MM-DD')}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ==================== */}
            {item?.Alternate_System_Description ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Alt System Description
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: 'black',
                      marginVertical: 3,
                    }}>
                    {item.Alternate_System_Description.substr(1, 20)}...
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ==================== */}
            {item?.Alternative_Device_Name ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Alt Device Name
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: 'black',
                      marginVertical: 3,
                    }}>
                    {item.Alternative_Device_Name}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ==================== */}
            {item?.NB_First_Discovery_Time ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    NB First Discovery Time
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: 'black',
                      marginVertical: 3,
                    }}>
                    {moment(item.NB_First_Discovery_Time).format('YYYY-MM-DD')}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ==================== */}
            {item?.NB_Last_Discovery_Time ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    NB Last Discovery Time
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: 'black',
                      marginVertical: 3,
                    }}>
                    {moment(item.NB_Last_Discovery_Time).format('YYYY-MM-DD')}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ==================== */}
            {/* {item?.Contact_Information ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Contact Information
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Contact_Information.substr(1, 20)}...
                  </Text>
                </View>
              </View>
            ) : null} */}
            {/* =====================  */}
            {/* {item?.Site_Type_Concatenated_Detail ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Site Type Concatenated Detail
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Site_Type_Concatenated_Detail}
                  </Text>
                </View>
              </View>
            ) : null} */}
            {/* ===================== */}
            {/* {item?.Associated_Circuit ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Associated Circuit
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Associated_Circuit}
                  </Text>
                </View>
              </View>
            ) : null} */}

            {/* {item?.IP_Address ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    IP Address
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.IP_Address}
                  </Text>
                </View>
              </View>
            ) : null} */}

            {/* {item?.Code_Compliance ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Code Compliance
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Code_Compliance}
                  </Text>
                </View>
              </View>
            ) : null} */}

            {/* ===================== */}
            {/* {item?.Device_Function_Abrv ? (
              <View style={styles.secondTableRow}>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Function Abrv
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Device_Function_Abrv}
                  </Text>
                </View>
              </View>
            ) : null} */}
            <View style={{height: 30, width: '100%', borderTopWidth: 1}}></View>
          </>
        ) : (
          <OrderLoder />
        )}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default BottomSheetView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 10,
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
    fontWeight: '700',
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
    width: '95%',
    marginTop: 20,
    alignSelf: 'center',
  },
  secondTableRow: {
    width: '100%',
    height: 50,

    flexDirection: 'row',
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomColor: 'black',

    borderLeftColor: 'black',
    borderLeftWidth: 1,
  },
  secondTableRow1: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
  },
  secondTableColum: {
    width: '50%',
    height: '100%',
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
});
