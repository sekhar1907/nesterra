import {
  ALL_CIRCUIT,
  ALL_CIRCUIT_DETAILS,
  ALL_CIRCUIT_SORT_BY_LOC_ID_ASC,
  ALL_CIRCUIT_SORT_BY_LOC_ID_DES,
  ALL_CIRCUIT_SORT_BY_CIR_ID_ASC,
  ALL_CIRCUIT_SORT_BY_CIR_ID_DES,
  ALL_CIRCUIT_SORT_BY_BRANCH_ASC,
  ALL_CIRCUIT_SORT_BY_BRANCH_DES,
  ALL_CIRCUIT_SORT_BY_VENDOR_ASC,
  ALL_CIRCUIT_SORT_BY_VENDOR_DES,
  ALL_CIRCUIT_FILTER_BY_LOCATION_ID,
  ALL_CIRCUIT_FILTER_BY_CIRCUITS_ID,
  ALL_CIRCUIT_FILTER_BY_BRANCH_ID,
  ALL_CIRCUIT_SORT_BY_STATUS,
  //=== FILTER
  ALL_CIRCUIT_FILTER_BY_STATUS,
  ALL_CIRCUIT_SEARCH_ONLY_VENDOR,
  ALL_CIRCUIT_FILTER_BY_VENDOR,
  ALL_CIRCUIT_FILTER_BY_SUBTYPE,
  ALL_CIRCUIT_FILTER_BY_TYPE,
  //=== FILTER
  ALL_DATA,

  //=== ONLY DATA SERACT
  ALL_CIRCUIT_SEARCH_ONLY_SUBTYPE,

  //=========ONLY DATA
  ALL_CIRCUIT_ONLY_SUBTYPE,
  ALL_CIRCUIT_ONLY_TYPE,
  ALL_CIRCUIT_ONLY_VENDOR,
  ALL_CIRCUIT_ONLY_CIRCUITID,

  //=========
} from '../../actions/actionType/AllCircuit';

const initialState = {
  allCircuit: [],
  allCircuit1: [],
  allStatus: [],
  allStatus1: [],
  allVendor: [],
  allVendor1: [],
  allType: [],
  allType1: [],
  allSubType: [],
  allSubType1: [],
  allCircuitId: [],
  allCircuitId1: [],
  isLoding: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_CIRCUIT:
      // console.log(action.payload.data.length);
      const dataa = action.payload.data.filter(
        item => item.Circuit_Status == 'Active',
      );
      return {
        ...state,
        allCircuit: dataa,
        allCircuit1: action.payload.data,
        isLoding: action.payload.loder,
      };
    // =====================allData data============
    case ALL_DATA:
      const allData = [...state.allCircuit1];
      // console.log(allData);
      return {
        ...state,
        allCircuit: allData,
      };
    // =====================allData data============
    // =====================only data============
    //VENDOR
    case ALL_CIRCUIT_ONLY_VENDOR:
      const VENDOR = [...state.allCircuit1];
      const vendor = VENDOR.reduce((acc, {Vendor}) => {
        const entry = acc.find(i => i.Vendor === Vendor);
        if (!entry) {
          acc.push({
            Vendor,
          });
        } else {
          entry.Vendor = Vendor;
        }
        return acc;
      }, []);
      // console.log(vendor);

      return {
        ...state,
        allVendor: vendor,
        allVendor1: vendor,
      };
    //Type
    case ALL_CIRCUIT_ONLY_TYPE:
      const type = [...state.allCircuit1];
      const typeData = type.reduce((acc, {Type}) => {
        const entry = acc.find(i => i.Type === Type);
        if (!entry) {
          acc.push({
            Type,
          });
        } else {
          entry.Type = Type;
        }
        return acc;
      }, []);

      return {
        ...state,
        allType: typeData,
        allType1: typeData,
      };
    //SUB  TYPE OR CAT
    case ALL_CIRCUIT_ONLY_SUBTYPE:
      const SUBCAT = [...state.allCircuit1];
      const subtypeData = SUBCAT.reduce((acc, {SubCat}) => {
        const entry = acc.find(i => i.SubCat === SubCat);
        if (!entry) {
          acc.push({
            SubCat,
          });
        } else {
          entry.SubCat = SubCat;
        }
        return acc;
      }, []);

      return {
        ...state,
        allSubType: subtypeData,
        allSubType1: subtypeData,
      };
    //CIRCUIT DATA
    case ALL_CIRCUIT_ONLY_CIRCUITID:
      const CIRCUITID = [...state.allCircuit1];
      const circuitData = CIRCUITID.reduce((acc, {Circuit_ID}) => {
        const entry = acc.find(i => i.Circuit_ID === Circuit_ID);
        if (!entry) {
          acc.push({
            Circuit_ID,
          });
        } else {
          entry.Circuit_ID = Circuit_ID;
        }
        return acc;
      }, []);
      // console.log(circuitData);
      return {
        ...state,
        allCircuitId: circuitData,
        allCircuitId1: circuitData,
      };

    // Only STATUS data
    case ALL_CIRCUIT_SORT_BY_STATUS:
      const STATUS = [...state.allCircuit1];
      const statusData = STATUS.reduce((acc, {Circuit_Status}) => {
        const entry = acc.find(i => i.Circuit_Status === Circuit_Status);
        if (!entry) {
          acc.push({
            Circuit_Status,
          });
        } else {
          entry.Circuit_Status = Circuit_Status;
        }
        return acc;
      }, []);
      return {
        ...state,
        allStatus: statusData,
        allStatus1: statusData,
      };

    // =====================only data============
    // =====================only SEARCH  data============
    case ALL_CIRCUIT_SEARCH_ONLY_VENDOR:
      const VendorSearch = [...state.allVendor1];
      // console.log(VendorSearch);

      if (action.data) {
        const serachdata = VendorSearch.filter(function (item) {
          const itemData = item?.Vendor.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          allVendor: serachdata,
        };
      } else {
        return {
          ...state,
          allVendor: state.allVendor1,
        };
      }
    //serach subtype
    case ALL_CIRCUIT_SEARCH_ONLY_SUBTYPE:
      const subtypve = [...state.allSubType1];
      // console.log(VendorSearch);

      if (action.data) {
        const subdata = subtypve.filter(function (item) {
          const itemData = item?.SubCat.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          allSubType: subdata,
        };
      } else {
        return {
          ...state,
          allSubType: state.allSubType1,
        };
      }

    // =====================only SEARCH data============
    // =====================FILTER  data============

    case ALL_CIRCUIT_FILTER_BY_LOCATION_ID:
      const fdata = [...state.allCircuit1];
      const filterdata = fdata.filter(item => item.Location_ID == action.data);
      return {
        ...state,
        allCircuit: filterdata,
      };
    //============= FILTER TYPE
    case ALL_CIRCUIT_FILTER_BY_TYPE:
      const TYPE = [...state.allCircuit1];
      const typdata = TYPE.filter(item => item.Type == action.data);
      return {
        ...state,
        allCircuit: typdata,
      };
    case ALL_CIRCUIT_FILTER_BY_SUBTYPE:
      const SUBTYPE = [...state.allCircuit1];
      const subdata = SUBTYPE.filter(item => item.SubCat == action.data);
      return {
        ...state,
        allCircuit: subdata,
      };
    // FILTER BY STATUS
    case ALL_CIRCUIT_FILTER_BY_STATUS:
      const filterStatus = [...state.allCircuit1];
      const filterStatusData = filterStatus.filter(
        item => item.Circuit_Status == action.data,
      );
      return {
        ...state,
        allCircuit: filterStatusData,
      };
    // FILTER BY CIRCUIT_ID
    case ALL_CIRCUIT_FILTER_BY_CIRCUITS_ID:
      const fdata1 = [...state.allCircuit1];
      const cirdata = fdata1.filter(item => item.Circuit_ID == action.data);
      return {
        ...state,
        allCircuit: cirdata,
      };
    // FILTER BY Branch Id
    case ALL_CIRCUIT_FILTER_BY_BRANCH_ID:
      const fdata2 = [...state.allCircuit1];
      const cirdata2 = fdata2.filter(item => item.Branch_ID == action.data);
      return {
        ...state,
        allCircuit: cirdata2,
      };
    case ALL_CIRCUIT_FILTER_BY_VENDOR:
      const venfdat = [...state.allCircuit1];
      const filvenData = venfdat.filter(item => item.Vendor == action.data);
      return {
        ...state,
        allCircuit: filvenData,
      };
    // =====================FILTER  data============
    // SORT Location_ID ASCENDING
    case ALL_CIRCUIT_SORT_BY_LOC_ID_ASC:
      // const aa = action.lo;
      // console.log(aa);
      const data = [...state.allCircuit1];
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
        allCircuit: cirIdAsc,
      };

    //SORT Location_ID DESCENDING
    case ALL_CIRCUIT_SORT_BY_LOC_ID_DES:
      const data1 = [...state.allCircuit1];
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
        allCircuit: cirIdDes,
      };

    //  SORT VENDOR ASCENDING
    case ALL_CIRCUIT_SORT_BY_VENDOR_ASC:
      const data2 = [...state.allCircuit1];
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
        allCircuit: vendorAsc,
      };
    // //SORT VENDOR DESCENDING
    case ALL_CIRCUIT_SORT_BY_VENDOR_DES:
      const data3 = [...state.allCircuit1];

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
        allCircuit: vendorDes,
      };
    // //  SORT CIR ID ASCENDING
    case ALL_CIRCUIT_SORT_BY_CIR_ID_ASC:
      const data4 = [...state.allCircuit1];
      const catrAsc = data4.sort((a, b) => {
        let fa = a.Circuit_ID?.toLowerCase(),
          fb = b.Circuit_ID?.toLowerCase();

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
        allCircuit: catrAsc,
      };
    // //SORT STATUS DESCENDING
    case ALL_CIRCUIT_SORT_BY_CIR_ID_DES:
      const data5 = [...state.allCircuit1];

      const catDes = data5.sort((a, b) => {
        let fa = a.Circuit_ID?.toLowerCase(),
          fb = b.Circuit_ID?.toLowerCase();

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
        allCircuit: catDes,
      };
    //  SORT Branch ASCENDING
    case ALL_CIRCUIT_SORT_BY_BRANCH_ASC:
      const data6 = [...state.allCircuit1];
      const subcat1Asc = data6.sort((a, b) => {
        // let fa = a?.Branch_ID.toLowerCase(),
        //   fb = b?.Branch_ID.toLowerCase();

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
        allCircuit: subcat1Asc,
      };
    // //SORT BRANCH DESCENDING
    case ALL_CIRCUIT_SORT_BY_BRANCH_DES:
      const data7 = [...state.allCircuit1];

      const subcat1Des = data7.sort((a, b) => {
        // let fa = a?.Branch_ID.toLowerCase(),
        //   fb = b?.Branch_ID.toLowerCase();

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
        allCircuit: subcat1Des,
      };

    default:
      return state;
  }
};
