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

const CircuitInventory = () => {
  const {cirCuitInventory} = useSelector(state => state.circuitInventory);
  // console.log(circuitInventory.cirCuitInventory);
  const data = [1, 2, 3, 4, 5, 6];
  const randerItem = ({item}) => {
    return (
      <View
        style={{flex: 1, borderColor: 'red', borderWidth: 1, marginBottom: 10}}>
        {/* =====================Branch Id ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Circuit ID</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Circuit_ID}</Text>
          </View>
        </View>
        {/* =====================Branch Id ====================== */}
        {/* =====================Facility Type ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Location ID</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Location_ID}</Text>
          </View>
        </View>
        {/* =====================Facility Type ====================== */}
        {/* =====================Open Date ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Address</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Address}</Text>
          </View>
        </View>
        {/* =====================Open Date  ====================== */}

        {/* =====================Headcount ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>City</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.City}</Text>
          </View>
        </View>
        {/* =====================Headcount ====================== */}
        {/* =====================Annual Rent ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>State</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.State}</Text>
          </View>
        </View>
        {/* =====================Annual Rent ====================== */}
        {/* =====================Square Feet ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Vendor Account Number</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Vendor_Account_Number}</Text>
          </View>
        </View>
        {/* =====================Square Feet ====================== */}
        {/* =====================ATM ID ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Summary Account Number</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Summary_Account_Number}</Text>
          </View>
        </View>
        {/* =====================ATM ID ====================== */}
        {/* =====================Phone ====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Circuit Charge</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.circuit_charge}</Text>
          </View>
        </View>
        {/* =====================Phone ====================== */}
        {/* =====================Backdoor Ph====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Vendor</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Vendor}</Text>
          </View>
        </View>
        {/* =====================Backdoor Ph====================== */}
        {/* =====================Emergency====================== */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>RC</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.RC}</Text>
          </View>
        </View>
        {/* =====================Emergency====================== */}
        {/* =====================Branch Mgr========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>GL</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.GL}</Text>
          </View>
        </View>
        {/* =====================Branch Mgr========= */}

        {/* =====================Branch Mgr Ph#========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Category</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Category}</Text>
          </View>
        </View>
        {/* =====================Branch Mgr Ph#========= */}
        {/* =====================Region Mgr========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>SubCat_1</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.SubCat_1}</Text>
          </View>
        </View>
        {/* =====================Region Mgr========= */}
        {/* =====================Region Mgr Ph#========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>SubCat_2</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.SubCat_2}</Text>
          </View>
        </View>
        {/* =====================Region Mgr Ph#========= */}

        {/* =====================Senior Facility Manager========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>SubCat_3</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.SubCat_3}</Text>
          </View>
        </View>
        {/* =====================Senior Facility Manager========= */}
        {/* ===================== Facility Manager========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Whitelist Use Type</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Whitelist_Use_Type}</Text>
          </View>
        </View>
        {/* ===================== Facility Manager========= */}
        {/* ===================== Facility Manager========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Bandwidth Description</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Bandwidth_Description}</Text>
          </View>
        </View>
        {/* ===================== Facility Manager========= */}
        {/* ===================== Facility Manager========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Mbps</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Mbps}</Text>
          </View>
        </View>
        {/* ===================== Facility Manager Ph#========= */}
        {/* =====================  Location Code========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Associated_ID</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Associated_ID}</Text>
          </View>
        </View>
        {/* =====================  Location Code========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Unique Circuit </Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Unique_Circuit}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Location B End </Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Location_B_End}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Location Use Type </Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Location_Use_Type}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Third Party Name </Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Third_Party_Name}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Bundled Supplier</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Bundled_Supplier}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Notes</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Notes}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Email Received Date</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Email_Received_Date}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Email Subject</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Email_Subject}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Email ID</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Email_ID}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Aux_1</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Aux_1}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Aux_2</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Aux_2}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Aux_3</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Aux_3}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Aux_4</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Aux_4}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Aux_5</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Aux_5}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>RC Type</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.RC_Type}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>LEC ID</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.LEC_ID}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Access Provider</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Access_Provider}</Text>
          </View>
        </View>
        {/* =====================  MileStone========= */}
        {/* =====================  Mile ========= */}
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <Text>Circuit Status</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>{item.Circuit_Status}</Text>
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
          Circuit Inventory
        </Text>
      </View>
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <FlatList
          data={cirCuitInventory}
          renderItem={randerItem}
          keyExtractor={item => item.Circuit_ID}
        />
      </View>
    </SafeAreaView>
  );
};

export default CircuitInventory;

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
