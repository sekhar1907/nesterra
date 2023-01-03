import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
} from 'react-native';
import React from 'react';
import {connect, useSelector} from 'react-redux';

const DevicesInventory = () => {
  const {devicesInventory} = useSelector(state => state.devicesInventory);

  const randerItem = ({item}) => {
    return (
      <View
        style={{flex: 1, borderColor: 'red', borderWidth: 1, marginBottom: 10}}>
        {/* =====================Branch Id ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>ID</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.ID}</Text>
          </View>
        </View>
        {/* =====================Branch Id ====================== */}
        {/* =====================Facility Type ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Source File</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Source_File}</Text>
          </View>
        </View>
        {/* =====================Facility Type ====================== */}
        {/* =====================Open Date ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Device Name</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Device_Name}</Text>
          </View>
        </View>
        {/* =====================Open Date  ====================== */}

        {/* =====================Headcount ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Device Status</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Device_Status}</Text>
          </View>
        </View>
        {/* =====================Headcount ====================== */}
        {/* =====================Annual Rent ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Device Vendor</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Device_Vendor}</Text>
          </View>
        </View>
        {/* =====================Annual Rent ====================== */}
        {/* =====================Square Feet ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Device_Type</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Device_Type}</Text>
          </View>
        </View>
        {/* =====================Square Feet ====================== */}
        {/* =====================ATM ID ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Device Function Abrv</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Device_Function_Abrv}</Text>
          </View>
        </View>
        {/* =====================ATM ID ====================== */}
        {/* =====================Phone ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Device Function</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Device_Function}</Text>
          </View>
        </View>
        {/* =====================Phone ====================== */}
        {/* =====================Backdoor Ph====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Device Layer</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Device_Layer}</Text>
          </View>
        </View>
        {/* =====================Backdoor Ph====================== */}
        {/* =====================Emergency====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Device Details</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Device_Details}</Text>
          </View>
        </View>
        {/* =====================Emergency====================== */}
        {/* =====================Branch Mgr========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Branch ID</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Branch_ID}</Text>
          </View>
        </View>
        {/* =====================Branch Mgr========= */}

        {/* =====================Branch Mgr Ph#========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Site Status</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Site_Status}</Text>
          </View>
        </View>
        {/* =====================Branch Mgr Ph#========= */}
        {/* =====================Region Mgr========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Site Type Concatenated Detail</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Site_Type_Concatenated_Detail}</Text>
          </View>
        </View>
        {/* =====================Region Mgr========= */}
        {/* =====================Region Mgr Ph#========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Associated Circuit</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Associated_Circuit}</Text>
          </View>
        </View>
        {/* =====================Region Mgr Ph#========= */}

        {/* =====================Senior Facility Manager========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Service ID</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Service_ID}</Text>
          </View>
        </View>
        {/* =====================Senior Facility Manager========= */}
        {/* ===================== Facility Manager========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Domain</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Domain}</Text>
          </View>
        </View>
        {/* ===================== Facility Manager========= */}
        {/* ===================== Facility Manager========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>IP_Address</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.IP_Address}</Text>
          </View>
        </View>
        {/* ===================== Facility Manager========= */}
        {/* ===================== Facility Manager========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Management Interface</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Management_Interface}</Text>
          </View>
        </View>
        {/* ===================== Facility Manager Ph#========= */}
        {/* =====================  Location Code========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Loopback Address</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Loopback_Address}</Text>
          </View>
        </View>
        {/* =====================  Location Code========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Serial Number </Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Serial_Number}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Model </Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Model}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>MAC ID</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.MAC_ID}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Hardware_Version</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Hardware_Version}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Software Version</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Software_Version}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Config Compliance</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Config_Compliance}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Code Compliance</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Code_Compliance}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Contact_Information</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Contact_Information}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Responsible Engineer</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Responsible_Engineer}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Responsible Engineer Validation Date</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Responsible_Engineer_Validation_Date}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Last Polled or Discovery</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Last_Polled_or_Discovery}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Maintenance Coverage Plan</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Maintenance_Coverage_Plan}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Maintenance M</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Maintenance_M}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>License M</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.License_M}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Resale Value</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Resale_Value}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Purchase Date</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Purchase_Date}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Decom Date</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Decom_Date}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>EOL Date</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.EOL_Date}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        marginTop: StatusBar.currentHeight,
        flex: 1,
      }}>
      <View style={{width: '100%', height: 50}}>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
          Devices Inventory
        </Text>
      </View>
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <FlatList
          data={devicesInventory}
          renderItem={randerItem}
          keyExtractor={item => item.ID}
        />
      </View>
    </SafeAreaView>
  );
};

export default DevicesInventory;

const styles = StyleSheet.create({
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
  leftItem: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  rightItem: {
    width: '70%',
    height: '100%',
    borderLeftColor: '#77ccc5',
    borderLeftWidth: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
