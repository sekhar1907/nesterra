import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const Assets = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'All', value: 'all'},
    {label: 'One', value: 'One'},
  ]);

  const [buttonBorder, setButtonBorder] = useState('active');
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
        }}>
        <View style={styles.container}>
          {/* ==============top============== */}
          <View style={styles.topView}>
            <View style={styles.topItem1}>
              <Text>
                <Entypo name="cross" size={24} color="black" />
              </Text>
            </View>
            <View style={styles.topItem}>
              <Text style={{fontWeight: '900', fontSize: 18, color: 'black'}}>
                Assets
              </Text>
            </View>
            <View style={styles.topItem}>
              <Text style={{fontWeight: '700', fontSize: 15, color: 'black'}}>
                Reset
              </Text>
            </View>
          </View>
          {/* ==============top============== */}
          {/* ==============Button============== */}
          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => {
                setButtonBorder('active');
              }}
              style={{
                ...styles.button,
                backgroundColor:
                  buttonBorder === 'active' ? '#4ead5b' : '#4ead5b',
              }}>
              <Text style={{fontWeight: '900', fontSize: 15, color: 'white'}}>
                Active
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setButtonBorder('inactive');
              }}
              style={{
                ...styles.button,
                backgroundColor:
                  buttonBorder === 'inactive' ? '#ea3323' : '#ea3323',
              }}>
              <Text style={{fontWeight: '900', fontSize: 15, color: 'white'}}>
                Inactive
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setButtonBorder('both');
              }}
              style={{
                ...styles.button,
                backgroundColor:
                  buttonBorder === 'both' ? '#4f71be' : '#4f71be',
              }}>
              <Text style={{fontWeight: '900', fontSize: 15, color: 'white'}}>
                Both
              </Text>
            </TouchableOpacity>
          </View>
          {/* ==============Button============== */}
          {/* ==============Table============== */}
          <View style={styles.table}>
            {/* ===================table Tow============== */}
            <View style={{...styles.tableRow, backgroundColor: '#dbe3f2'}}>
              <View style={styles.tableRowColum}>
                <Text style={styles.boxText}>Sites</Text>
              </View>
              <View style={styles.tableRowColum}>
                <Text style={styles.boxText}>Circuits</Text>
              </View>
              <View style={styles.tableRowColumLast}>
                <Text style={styles.boxText}>Devices</Text>
              </View>
            </View>
            {/* ===================table Tow============== */}
            {/* ===================table Tow============== */}
            <View style={styles.tableRow}>
              <View style={styles.tableRowColum}>
                <Text style={styles.boxText}>Offices</Text>
              </View>
              <View style={styles.tableRowColum}>
                <Text style={styles.boxText}>MPLS</Text>
              </View>
              <View style={styles.tableRowColumLast}>
                <Text style={styles.boxText}>Routers</Text>
              </View>
            </View>
            {/* ===================table Tow============== */}
            {/* ===================table Tow============== */}
            <View style={styles.tableRow}>
              <View style={styles.tableRowColum}>
                <Text style={styles.boxText}>Branches</Text>
              </View>
              <View style={styles.tableRowColum}>
                <Text style={styles.boxText}>UVN</Text>
              </View>
              <View style={styles.tableRowColumLast}>
                <Text style={styles.boxText}>Switches</Text>
              </View>
            </View>
            {/* ===================table Tow============== */}
            {/* ===================table Tow============== */}
            <View style={styles.tableRow}>
              <View style={styles.tableRowColum}>
                <Text style={styles.boxText}>ATMs</Text>
              </View>
              <View style={styles.tableRowColum}>
                <Text style={styles.boxText}>Wireless</Text>
              </View>
              <View style={styles.tableRowColumLast}>
                <Text style={styles.boxText}>FireWalls</Text>
              </View>
            </View>
            {/* ===================table Tow============== */}
            {/* ===================table Tow============== */}
            <View style={styles.tableRow}>
              <View style={styles.tableRowColum}>
                <Text style={styles.boxText}>DCs</Text>
              </View>
              <View style={styles.tableRowColum}>
                <Text style={styles.boxText}>VolP</Text>
              </View>
              <View style={styles.tableRowColumLast}>
                <Text style={styles.boxText}>Load Balancers</Text>
              </View>
            </View>
            {/* ===================table Tow============== */}
            {/* ===================table Tow============== */}
            <View style={styles.tableRow}>
              <View style={styles.tableRowColum}>
                <Text style={styles.boxText}>Carrrier Colors</Text>
              </View>
              <View style={styles.tableRowColum}>
                <Text style={styles.boxText}>Broadband</Text>
              </View>
              <View style={styles.tableRowColumLast}>
                <Text style={styles.boxText}>Servers</Text>
              </View>
            </View>
            {/* ===================table Tow============== */}
            {/* ===================table Tow============== */}
            <View style={styles.tableRow}>
              <View style={styles.tableRowColum}>
                <Text style={styles.boxText}>3rd Partys</Text>
              </View>
              <View style={styles.tableRowColum}>
                <Text style={styles.boxText}>Broadband</Text>
              </View>
              <View style={styles.tableRowColumLast}>
                <Text style={styles.boxText}>Instant Issue</Text>
                <Text style={styles.boxText}>Printers</Text>
              </View>
            </View>
            {/* ===================table Tow============== */}
          </View>
          {/* ==============Table============== */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Assets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 10,
    marginBottom: 50,
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
  buttonView: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  button: {
    width: '27%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ///========dropdown
  dropDownView: {
    width: '80%',
    height: 50,
    flexDirection: 'row',
    marginVertical: 5,
  },
  dropDownViewLeft: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  dropDownViewRight: {
    width: '70%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
  },
  pickerItem: {width: 200, height: 40, borderWidth: 0.5},
  ///========dropdown
  ///=========Table
  table: {
    width: '90%',

    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 15,
  },
  tableRow: {
    width: '100%',
    height: 50,
    borderBottomColor: '#000000',
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
  tableRowColum: {
    width: '33.55%',
    height: '100%',
    borderRightColor: 'black',
    borderRightWidth: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRowColumLast: {
    width: '33.55%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000000',
  },
  ///=========Table
});
