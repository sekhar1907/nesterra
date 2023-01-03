import {
  ALL_DEVICES,
  ALL_DEVICES_SORT_BY_ID_ASC,
  ALL_DEVICES_SORT_BY_ID_DES,
  ALL_DEVICES_SORT_BY_TYPE_ASC,
  ALL_DEVICES_SORT_BY_TYPE_DES,
  ALL_DEVICES_SORT_BY_STATUS_ASC,
  ALL_DEVICES_SORT_BY_STATUS_DES,
  ALL_DEVICES_SORT_BY_VENDOR_ASC,
  ALL_DEVICES_SORT_BY_VENDOR_DES,
  ALL_DEVICES_SEARCH_BY_VENDOR_NAME,
  ALL_DEVICES_SEARCH_BY_DEVICE_TYPE,
  ALL_DEVICES_FILTER_BY_VENDOR_NAME,
  ALL_DEVICES_FILTER_BY_DEVICE_TYPE,
  ALL_DEVICES_SEARCH_BY_DEVICE_VENDOR,
  ALL_DEVICES_FILTER_BY_DEVICE_VENDOR,
  GET_DEVICES_ONLY_NAME,
  GET_DEVICES_ONLY_TYPE,
  GET_DEVICES_ONLY_VENDORE,
  GET_DEVICES_SORT_INACTIVE,
  GET_DEVICES_SORT_ACTIVE,
  ALL_DATA,
} from '../../actions/actionType/AllDevice';
const initialState = {
  deviceAllData: [],
  deviceAllData1: [],
  devieceName: [],
  devieceName1: [],
  devieceType: [],
  devieceType1: [],
  devieceVendor: [],
  devieceVendor1: [],
  isLoding: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_DEVICES:
      const activeDAT = action.payload.data.filter(
        item => item.Device_Status == 'Active',
      );
      // console.log(activeDAT.length, 'acc');
      // console.log(action.payload.data.length, 'accc');
      return {
        deviceAllData: activeDAT,
        deviceAllData1: action.payload.data,
        searchData: action.payload.data,
        isLoding: action.payload.loder,
      };
    //===============GET ONLY DATA
    //Acative
    case GET_DEVICES_SORT_INACTIVE:
      const inactiveData = [...state.deviceAllData1];
      const inactive = inactiveData.filter(
        item => item.Device_Status == 'Inactive',
      );
      // console.log(inactive.length, 'in');
      return {
        ...state,
        deviceAllData: inactive,
      };
    //Acative
    case GET_DEVICES_SORT_ACTIVE:
      const activedata = [...state.deviceAllData1];
      const active = activedata.filter(item => item.Device_Status == 'Active');
      // console.log(active.length, 'ac');
      return {
        ...state,
        deviceAllData: active,
      };

    //===============SORT DATA
    //===============SORT DATA
    //ONLY NAME
    case GET_DEVICES_ONLY_NAME:
      const nameData = [...state.deviceAllData1];
      const result = nameData.reduce((acc, {Device_Name}) => {
        const entry = acc.find(i => i.Device_Name === Device_Name);
        if (!entry) {
          acc.push({
            Device_Name,
          });
        } else {
          entry.Device_Name = Device_Name;
        }
        return acc;
      }, []);
      return {
        ...state,
        devieceName: result,
        devieceName1: result,
      };
    //ONLY TYPE
    case GET_DEVICES_ONLY_TYPE:
      const typeData = [...state.deviceAllData1];
      const result1 = typeData.reduce((acc, {Device_Type}) => {
        const entry = acc.find(i => i.Device_Type === Device_Type);
        if (!entry) {
          acc.push({
            Device_Type,
          });
        } else {
          entry.Device_Type = Device_Type;
        }
        return acc;
      }, []);
      return {
        ...state,
        devieceType: result1,
        devieceType1: result1,
      };
    //ONLY VENDOR
    case GET_DEVICES_ONLY_VENDORE:
      const vendorData = [...state.deviceAllData1];

      const result3 = vendorData.reduce((acc, {Device_Vendor}) => {
        const entry = acc.find(i => i.Device_Vendor === Device_Vendor);
        if (!entry) {
          acc.push({
            Device_Vendor,
          });
        } else {
          entry.Device_Vendor = Device_Vendor;
        }
        return acc;
      }, []);
      return {
        ...state,
        devieceVendor: result3,
        devieceVendor1: result3,
      };
    //===============GET ONLY DATA
    // ==============SEARCH================
    //  SEARCH DEVICE_NAME
    case ALL_DEVICES_SEARCH_BY_VENDOR_NAME:
      const DEVICE_NAME = [...state.devieceName1];
      // console.log(action.data, 'dd');
      if (action.data) {
        const newData1 = DEVICE_NAME.filter(function (item) {
          const itemData = item?.Device_Name.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          devieceName: newData1,
        };
      } else {
        return {
          ...state,
          devieceName: state.devieceName1,
        };
      }
    //  SEARCH Device_Type
    case ALL_DEVICES_SEARCH_BY_DEVICE_TYPE:
      const Device_Type = [...state.devieceType1];
      // console.log(action.data, 'dd');
      if (action.data) {
        const newData1 = Device_Type.filter(function (item) {
          const itemData = item?.Device_Type.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          devieceType: newData1,
        };
      } else {
        return {
          ...state,
          devieceType: state.devieceType1,
        };
      }
    //  SEARCH Device_Vendor
    case ALL_DEVICES_SEARCH_BY_DEVICE_VENDOR:
      const Device_Vendor = [...state.devieceVendor1];
      // console.log(action.data, 'dd');
      if (action.data) {
        const newData1 = Device_Vendor.filter(function (item) {
          const itemData = item?.Device_Vendor.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          devieceVendor: newData1,
        };
      } else {
        return {
          ...state,
          searchData: state.devieceVendor1,
        };
      }

    // ==============SEARCH================
    // ==============FILTER================
    //filter  vendor name
    case ALL_DEVICES_FILTER_BY_VENDOR_NAME:
      const FILTER_NAME = [...state.deviceAllData1];
      // console.log(action.data, 'dd');
      if (action.data) {
        const newData11 = FILTER_NAME.filter(
          item => item.Device_Name == action.data,
        );
        // console.log(newData11);
        return {
          ...state,
          deviceAllData: newData11,
        };
      }
    //filter  DEVICE TYPE
    case ALL_DEVICES_FILTER_BY_DEVICE_TYPE:
      const FILTER_TYPE = [...state.deviceAllData1];
      // console.log(action.data, 'dd');
      if (action.data) {
        const newData11 = FILTER_TYPE.filter(
          item => item.Device_Type == action.data,
        );
        // console.log(newData11);
        return {
          ...state,
          deviceAllData: newData11,
        };
      }
    //filter  Device_Vendor
    case ALL_DEVICES_FILTER_BY_DEVICE_VENDOR:
      const Device_Vendor1 = [...state.deviceAllData1];
      // console.log(action.data, 'dd');
      if (action.data) {
        const newData11 = Device_Vendor1.filter(
          item => item.Device_Vendor == action.data,
        );
        // console.log(newData11);
        return {
          ...state,
          deviceAllData: newData11,
        };
      }
    // ==============FILTER================
    case ALL_DATA:
      const allData = [...state.deviceAllData1];
      return {
        ...state,
        deviceAllData: allData,
      };
    //  SORT ID ASCENDING
    case ALL_DEVICES_SORT_BY_ID_ASC:
      const data = [...state.deviceAllData1];
      const cirIdAsc = data.sort((a, b) => {
        let fa = a.Device_Name.toLowerCase(),
          fb = b.Device_Name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        deviceAllData: cirIdAsc,
      };
    //SORT Device_Name DESCENDING
    case ALL_DEVICES_SORT_BY_ID_DES:
      const data1 = [...state.deviceAllData1];

      const cirIdDes = data1.sort((a, b) => {
        let fa = a.Device_Name.toLowerCase(),
          fb = b.Device_Name.toLowerCase();

        if (fb < fa) {
          return -1;
        }
        if (fb > fa) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        deviceAllData: cirIdDes,
      };
    //  SORT VENDOR ASCENDING
    case ALL_DEVICES_SORT_BY_VENDOR_ASC:
      const data2 = [...state.deviceAllData1];
      const vendorAsc = data2.sort((a, b) => {
        let fa = a.Device_Vendor.toLowerCase(),
          fb = b.Device_Vendor.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        deviceAllData: vendorAsc,
      };
    //SORT VENDOR DESCENDING
    case ALL_DEVICES_SORT_BY_VENDOR_DES:
      const data3 = [...state.deviceAllData1];

      const vendorDes = data3.sort((a, b) => {
        let fa = a.Device_Vendor.toLowerCase(),
          fb = b.Device_Vendor.toLowerCase();

        if (fb < fa) {
          return -1;
        }
        if (fb > fa) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        deviceAllData: vendorDes,
      };
    //  SORT STATUS ASCENDING
    case ALL_DEVICES_SORT_BY_STATUS_ASC:
      const data4 = [...state.deviceAllData1];
      const catrAsc = data4.sort((a, b) => {
        let fa = a.Device_Status?.toLowerCase(),
          fb = b.Device_Status?.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        deviceAllData: catrAsc,
      };
    //SORT STATUS DESCENDING
    case ALL_DEVICES_SORT_BY_STATUS_DES:
      const data5 = [...state.deviceAllData1];

      const catDes = data5.sort((a, b) => {
        let fa = a.Device_Status?.toLowerCase(),
          fb = b.Device_Status?.toLowerCase();

        if (fb < fa) {
          return -1;
        }
        if (fb > fa) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        deviceAllData: catDes,
      };
    //  SORT TYPE ASCENDING
    case ALL_DEVICES_SORT_BY_TYPE_ASC:
      const data6 = [...state.deviceAllData1];
      const subcat1Asc = data6.sort((a, b) => {
        let fa = a.Device_Type.toLowerCase(),
          fb = b.Device_Type.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        deviceAllData: subcat1Asc,
      };
    //SORT TYPE DESCENDING
    case ALL_DEVICES_SORT_BY_TYPE_DES:
      const data7 = [...state.deviceAllData1];

      const subcat1Des = data7.sort((a, b) => {
        let fa = a.Device_Type.toLowerCase(),
          fb = b.Device_Type.toLowerCase();

        if (fb < fa) {
          return -1;
        }
        if (fb > fa) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        deviceAllData: subcat1Des,
      };

    default:
      return state;
  }
};
