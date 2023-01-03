import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import {Picker} from '@react-native-picker/picker';

const XConnects = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'All', value: 'all'},
    {label: 'One', value: 'One'},
  ]);

  const [buttonBorder, setButtonBorder] = useState('circuits');
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
        }}>
        <View style={styles.container}>
          {/* ==============Button============== */}

          {/* ==============Button============== */}
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* ==============item============== */}
            <View style={styles.dropDownView}>
              <View style={styles.dropDownViewLeft}>
                <Text>item#</Text>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
            </View>
            {/* ==============item============== */}
            {/* ==============Project============== */}
            <View style={styles.dropDownView}>
              <View style={styles.dropDownViewLeft}>
                <Text>Project#</Text>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
            </View>
            {/* ==============Project============== */}
            {/* ==============SmartSite============== */}
            <View style={styles.dropDownView}>
              <View style={styles.dropDownViewLeft}>
                <Text>SmartSite#</Text>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
            </View>
            {/* ==============SmartSite============== */}
            {/* ==============Tangoe============== */}
            <View style={styles.dropDownView}>
              <View style={styles.dropDownViewLeft}>
                <Text>Tangoe#</Text>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
            </View>
            {/* ==============Tangoe============== */}
            {/* ==============Carrier============== */}
            <View style={styles.dropDownView}>
              <View style={styles.dropDownViewLeft}>
                <Text>Carrier#</Text>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
            </View>
            {/* ==============Carrier============== */}
            {/* ==============Address============== */}
            <View style={styles.dropDownView}>
              <View style={styles.dropDownViewLeft}>
                <Text>Address#</Text>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
            </View>
            {/* ==============Address============== */}
            {/* ==============Vendor============== */}
            <View style={styles.dropDownView}>
              <View style={styles.dropDownViewLeft}>
                <Text>Vendor#</Text>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
            </View>
            {/* ==============Vendor============== */}
            {/* ==============Primary Contact============== */}
            <View style={styles.dropDownView}>
              <View style={styles.dropDownViewLeft}>
                <Text>Primary Contact#</Text>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
            </View>
            {/* ==============Primary Contact============== */}
            {/* ==============Technical Contact============== */}
            <View style={styles.dropDownView}>
              <View style={styles.dropDownViewLeft}>
                <Text>Technical Contact#</Text>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
            </View>
            {/* ==============Technical Contact============== */}
            {/* ==============Order Type============== */}
            <View style={styles.dropDownView}>
              <View style={styles.dropDownViewLeft}>
                <Text>Order Type#</Text>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
            </View>
            {/* ==============Order Type============== */}
            {/* ==============Order Status============== */}
            <View style={styles.dropDownView}>
              <View style={styles.dropDownViewLeft}>
                <Text>Order Status#</Text>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                  </Picker>
                </View>
              </View>
            </View>
            {/* ==============Order Status============== */}
            {/* ==============Services Category============== */}
            {/* <View style={styles.dropDownView}>
              <View style={styles.dropDownViewLeft}>
                <Text>Services Category#</Text>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
            </View> */}
            {/* ==============Services Category============== */}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default XConnects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 40,
    flexDirection: 'row',
    marginTop: 10,
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
  pickerBoxInner: {
    borderWidth: 0.6,
    borderColor: 'black',
    borderRadius: 2,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  pickerBoxIcon: {
    position: 'absolute',
    right: 0,
    fontSize: 23,
    color: 'red',
  },
  pickerStyle: {
    width: '120%',
    paddingBottom: 0,
    paddingLeft: 0,
    transform: [{scaleX: 0.85}, {scaleY: 0.85}],
    left: -25,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
});
