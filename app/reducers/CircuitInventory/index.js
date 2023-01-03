import {
  GET_ALL_CIRCUIT_INVENTORY,
  SORT_BY_CATEGORY_ASC,
  SORT_BY_CATEGORY_DES,
  SORT_BY_CIRCUIT_ID_ASC,
  SORT_BY_CIRCUIT_ID_DES,
  SORT_BY_SUBCAT_1_ASC,
  SORT_BY_SUBCAT_1_DES,
  SORT_BY_VENDOR_ASC,
  SORT_BY_VENDOR_DES,
  FILTER_BY_STATUS_ACTIVE,
  ALL_DATA,
} from '../../actions/actionType/circuitInventory.type';

const initialState = {
  cirCuitInventory: [],
  cirCuitInventory1: [],
  inventoryLoad: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CIRCUIT_INVENTORY:
      // console.log(action.payload.data, 'action.payload.data');
      //console.log(action.payload.data);
      return {
        ...state,
        cirCuitInventory: action.payload.data,
        cirCuitInventory1: action.payload.data,
      };
    //  FILTER
    //================ STATUS ACTIVE
    case FILTER_BY_STATUS_ACTIVE:
      const filterData = [...state.cirCuitInventory1];
      const fdata = filterData.filter(Item => Item.Circuit_Status == 'Active');
      return {
        ...state,
        cirCuitInventory: fdata,
      };

    //  ALL DATA
    case ALL_DATA:
      const alldata = [...state.cirCuitInventory1];

      return {
        ...state,
        cirCuitInventory: alldata,
      };

    //  FILTER
    //  SORT CIRCUIT_ID ASCENDING
    case SORT_BY_CIRCUIT_ID_ASC:
      const data = [...state.cirCuitInventory1];
      const cirIdAsc = data.sort((a, b) => {
        let fa = a.Circuit_ID.toLowerCase(),
          fb = b.Circuit_ID.toLowerCase();

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
        cirCuitInventory: cirIdAsc,
      };
    //SORT CIRCUIT_ID DESCENDING
    case SORT_BY_CIRCUIT_ID_DES:
      const data1 = [...state.cirCuitInventory1];

      const cirIdDes = data1.sort((a, b) => {
        let fa = a.Circuit_ID.toLowerCase(),
          fb = b.Circuit_ID.toLowerCase();

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
        cirCuitInventory: cirIdDes,
      };
    //  SORT VENDOR ASCENDING
    case SORT_BY_VENDOR_ASC:
      const data2 = [...state.cirCuitInventory1];
      const vendorAsc = data2.sort((a, b) => {
        let fa = a.Vendor.toLowerCase(),
          fb = b.Vendor.toLowerCase();

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
        cirCuitInventory: vendorAsc,
      };
    //SORT VENDOR DESCENDING
    case SORT_BY_VENDOR_DES:
      const data3 = [...state.cirCuitInventory1];

      const vendorDes = data3.sort((a, b) => {
        let fa = a.Vendor.toLowerCase(),
          fb = b.Vendor.toLowerCase();

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
        cirCuitInventory: vendorDes,
      };
    //  SORT CATEGORY ASCENDING
    case SORT_BY_CATEGORY_ASC:
      const data4 = [...state.cirCuitInventory1];
      const catrAsc = data4.sort((a, b) => {
        let fa = a.Category.toLowerCase(),
          fb = b.Category.toLowerCase();

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
        cirCuitInventory: catrAsc,
      };
    //SORT CATEGORY DESCENDING
    case SORT_BY_CATEGORY_DES:
      const data5 = [...state.cirCuitInventory1];

      const catDes = data5.sort((a, b) => {
        let fa = a.Category.toLowerCase(),
          fb = b.Category.toLowerCase();

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
        cirCuitInventory: catDes,
      };
    //  SORT SUBCAT1 ASCENDING
    case SORT_BY_SUBCAT_1_ASC:
      const data6 = [...state.cirCuitInventory1];
      const subcat1Asc = data6.sort((a, b) => {
        let fa = a.SubCat_1.toLowerCase(),
          fb = b.SubCat_1.toLowerCase();

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
        cirCuitInventory: subcat1Asc,
      };
    //SORT SUBCAT1 DESCENDING
    case SORT_BY_SUBCAT_1_DES:
      const data7 = [...state.cirCuitInventory1];

      const subcat1Des = data7.sort((a, b) => {
        let fa = a.SubCat_1.toLowerCase(),
          fb = b.SubCat_1.toLowerCase();

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
        cirCuitInventory: subcat1Des,
      };

    default:
      return state;
  }
};
