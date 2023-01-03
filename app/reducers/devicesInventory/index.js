import {
  GET_ALL_DEVICES_INVENTORY,
  SORT_BY_DEVICE_ID_ASC,
  SORT_BY_DEVICE_ID_DES,
  SORT_BY_DEVICE_NAME_ASC,
  SORT_BY_DEVICE_NAME_DES,
  SORT_BY_DEVICE_STATUS_ASC,
  SORT_BY_DEVICE_STATUS_DES,
  SORT_BY_DEVICE_VENDOR_ASC,
  SORT_BY_DEVICE_VENDOR_DES,
  ALL_DATA,
  FILTER_BY_STATUS_ACTIVE,
} from '../../actions/actionType/devicesInventory.type';

const initialState = {
  devicesInventory: [],
  devicesInventory1: [],
  id: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DEVICES_INVENTORY:
      // console.log(action.payload.data, 'action.payload.data');
      //console.log(action.payload.data);
      return {
        ...state,
        devicesInventory: action.payload.data,
        devicesInventory1: action.payload.data,
        id: action.payload.id,
      };
    //  SORT ID ASCENDING
    // FITER status active
    case FILTER_BY_STATUS_ACTIVE:
      const filterData = [...state.devicesInventory1];
      const fdata = filterData.filter(item => item.Device_Status == 'Active');
      return {
        ...state,
        devicesInventory: fdata,
      };
    // =========all
    case ALL_DATA:
      const alldata = [...state.devicesInventory1];

      return {
        ...state,
        devicesInventory: alldata,
      };
    // FITER
    case SORT_BY_DEVICE_ID_ASC:
      const data = [...state.devicesInventory1];
      const cirIdAsc = data.sort((a, b) => {
        let fa = a.ID.toLowerCase(),
          fb = b.ID.toLowerCase();

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
        devicesInventory: cirIdAsc,
      };
    //SORT ID DESCENDING
    case SORT_BY_DEVICE_ID_DES:
      const data1 = [...state.devicesInventory1];

      const cirIdDes = data1.sort((a, b) => {
        let fa = a.ID.toLowerCase(),
          fb = b.ID.toLowerCase();

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
        devicesInventory: cirIdDes,
      };
    //  SORT NAME ASCENDING
    case SORT_BY_DEVICE_NAME_ASC:
      const data2 = [...state.devicesInventory1];
      const vendorAsc = data2.sort((a, b) => {
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
        devicesInventory: vendorAsc,
      };
    //SORT NAME DESCENDING
    case SORT_BY_DEVICE_NAME_DES:
      const data3 = [...state.devicesInventory1];

      const vendorDes = data3.sort((a, b) => {
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
        devicesInventory: vendorDes,
      };
    //  SORT STATUS ASCENDING
    case SORT_BY_DEVICE_STATUS_ASC:
      const data4 = [...state.devicesInventory1];
      const catrAsc = data4.sort((a, b) => {
        let fa = a.Device_Status.toLowerCase(),
          fb = b.Device_Status.toLowerCase();

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
        devicesInventory: catrAsc,
      };
    //SORT STATUS DESCENDING
    case SORT_BY_DEVICE_STATUS_DES:
      const data5 = [...state.devicesInventory1];

      const catDes = data5.sort((a, b) => {
        let fa = a.Device_Status.toLowerCase(),
          fb = b.Device_Status.toLowerCase();

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
        devicesInventory: catDes,
      };
    //  SORT VENDOR ASCENDING
    case SORT_BY_DEVICE_VENDOR_ASC:
      const data6 = [...state.devicesInventory1];
      const subcat1Asc = data6.sort((a, b) => {
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
        devicesInventory: subcat1Asc,
      };
    //SORT VENDOR DESCENDING
    case SORT_BY_DEVICE_VENDOR_DES:
      const data7 = [...state.devicesInventory1];

      const subcat1Des = data7.sort((a, b) => {
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
        devicesInventory: subcat1Des,
      };

    default:
      return state;
  }
};
