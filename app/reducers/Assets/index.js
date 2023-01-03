import {
  ALL_ASSETS,
  ALL_ASSETS_BRANCH_ID_ASC,
  ALL_ASSETS_BRANCH_ID_DES,
  ALL_ASSETS_CIRCUIT_ID_ASC,
  ALL_ASSETS_CIRCUIT_ID_DES,
  ALL_ASSETS_SITE_ID_OR_LOCATION_ID_ASC,
  ALL_ASSETS_SITE_ID_OR_LOCATION_ID_DES,
  ALL_ASSETS_VENDOR_ASC,
  ALL_ASSETS_VENDOR_DES,
} from '../../actions/actionType/Assets';

const initialState = {
  allAssets: [],
  allAssets1: [],
  onlyName: [],
  isLoding: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_ASSETS:
      return {
        ...state,
        allAssets: action.payload.data,
        allAssets1: action.payload.data,
        isLoding: action.payload.loder,
      };
    //ASCENDING SITE ID
    case ALL_ASSETS_SITE_ID_OR_LOCATION_ID_ASC:
      const data = [...state.allAssets1];
      const cirIdAsc = data.sort((a, b) => {
        let fa = a.Location_ID.toLowerCase(),
          fb = b.Location_ID.toLowerCase();

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
        allAssets: cirIdAsc,
      };
    //SORT Location_ID DESCENDING
    case ALL_ASSETS_SITE_ID_OR_LOCATION_ID_DES:
      const data1 = [...state.allAssets1];

      const cirIdDes = data1.sort((a, b) => {
        let fa = a.Location_ID.toLowerCase(),
          fb = b.Location_ID.toLowerCase();

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
        allAssets: cirIdDes,
      };
    //  SORT VENDOR ASCENDING
    case ALL_ASSETS_VENDOR_ASC:
      const data2 = [...state.allAssets1];
      const vendorAsc = data2.sort((a, b) => {
        // let fa = a.vendor.toLowerCase(),
        //   fb = b.vendor.toLowerCase();

        // if (fa < fb) {
        //   return -1;
        // }
        // if (fa > fb) {
        //   return 1;
        // }
        // return 0;
        if (a.Vendor === null) {
          return 1;
        }

        if (b.Vendor === null) {
          return -1;
        }

        if (a.Vendor === b.Vendor) {
          return 0;
        }

        return a.Vendor < b.Vendor ? -1 : 1;
      });

      return {
        ...state,
        allAssets: vendorAsc,
      };
    //SORT VENDOR DESCENDING
    case ALL_ASSETS_VENDOR_DES:
      const data3 = [...state.allAssets1];

      const vendorDes = data3.sort((a, b) => {
        // let fa = a.Vendor.toLowerCase(),
        //   fb = b.Vendor.toLowerCase();

        // if (fb < fa) {
        //   return -1;
        // }
        // if (fb > fa) {
        //   return 1;
        // }
        // return 0;
        if (a.Vendor === null) {
          return 1;
        }

        if (b.Vendor === null) {
          return -1;
        }

        if (a.Vendor === b.Vendor) {
          return 0;
        }

        return a.Vendor < b.Vendor ? 1 : -1;
      });

      return {
        ...state,
        allAssets: vendorDes,
      };
    //  SORT BRANCH ID ASCENDING
    case ALL_ASSETS_BRANCH_ID_ASC:
      const data4 = [...state.allAssets1];
      const catrAsc = data4.sort((a, b) => {
        // let fa = a.Branch_ID.toLowerCase(),
        //   fb = b.Branch_ID.toLowerCase();

        // if (fa < fb) {
        //   return -1;
        // }
        // if (fa > fb) {
        //   return 1;
        // }
        // return 0;
        if (a.Branch_ID === null) {
          return 1;
        }

        if (b.Branch_ID === null) {
          return -1;
        }

        if (a.Branch_ID === b.Branch_ID) {
          return 0;
        }

        return a.Branch_ID < b.Branch_ID ? -1 : 1;
      });

      return {
        ...state,
        allAssets: catrAsc,
      };
    //SORT BRANCH ID DESCENDING
    case ALL_ASSETS_BRANCH_ID_DES:
      const data5 = [...state.allAssets1];

      const catDes = data5.sort((a, b) => {
        // let fa = a.Branch_ID.toLowerCase(),
        //   fb = b.Branch_ID.toLowerCase();

        // if (fb < fa) {
        //   return -1;
        // }
        // if (fb > fa) {
        //   return 1;
        // }
        // return 0;
        if (a.Branch_ID === null) {
          return 1;
        }

        if (b.Branch_ID === null) {
          return -1;
        }

        if (a.Branch_ID === b.Branch_ID) {
          return 0;
        }

        return a.Branch_ID < b.Branch_ID ? 1 : -1;
      });

      return {
        ...state,
        allAssets: catDes,
      };
    //  SORT CIRCUIT ID ASCENDING
    case ALL_ASSETS_CIRCUIT_ID_ASC:
      const data6 = [...state.allAssets1];
      const subcat1Asc = data6.sort((a, b) => {
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
        allAssets: subcat1Asc,
      };
    //SORT CIRCUIT ID DESCENDING
    case ALL_ASSETS_CIRCUIT_ID_DES:
      const data7 = [...state.allAssets1];

      const subcat1Des = data7.sort((a, b) => {
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
        allAssets: subcat1Des,
      };

    default:
      return state;
  }
};
