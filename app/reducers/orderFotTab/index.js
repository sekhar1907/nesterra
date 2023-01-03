import moment from 'moment';
import {
  GET_ORDERS_FOR_TAB,
  GET_ORDERS_FOR_TAB_FILTER_TYPE,
  GET_ORDERS_FOR_TAB_FILTER_SMARTSITE,
  GET_ORDERS_FOR_TAB_FILTER_VENDOR,
  GET_ORDERS_FOR_TAB_FILTER_STATUS,
  SORT_BY_VENDOR_ASC,
  SORT_BY_VENDOR_DES,
  SORT_BY_STATUS_ASC,
  SORT_BY_STATUS_DES,
  SORT_BY_DATE_ASC,
  SORT_BY_DATE_DES,
  SORT_BY_INV_ID_ASC,
  SORT_BY_INV_ID_DES,
  SORT_BY_ORDER_TYPE_ASC,
  SORT_BY_ORDER_TYPE_DES,
  ORDER_FILTER_BY_ORDER_TYPE,
  ORDER_FILTER_BY_STATUS,
  ORDER_FILTER_BY_INV_ID,
  ORDER_FILTER_BY_DATE,
  ORDER_SEARCH_OLLY_VENDOR,
  ORDER_FILTER_ONLY_VENDOR,
  ORDER_GET_ONLY_VENDOR,
  FILTER_STATUS_BY_COMPLETED,
  ALL_DATA,
  CHECK_VENDOR,

  //===
  ORDER_FILTER_BY_BETWEEN_DATE,
  FILTER_BY_VENDOR,
} from '../../actions/actionType/action.OrdersForTab';

const initialState = {
  ordersForTab: [],
  ordersForTab1: [],
  onlyVendor1: [],
  onlyVendor: [],
  checkList: [],
  isLoding: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_FOR_TAB:
      const completedData = action.payload.data.filter(
        item => item.Status == 'Completed',
      );

      return {
        ...state,
        ordersForTab: completedData,
        ordersForTab1: action.payload.data,
        isLoding: action.payload.data.loder,
      };
    // =========GET ONLY  DATA======
    //filter by vendor
    case FILTER_BY_VENDOR:
      const filterByVendor = [...state.ordersForTab1];
      const result11 = filterByVendor.filter(item => {
        return action.data.find(i => {
          return i.vendor === item.vendor;
        });
      });

      // console.log(result11, 'result11');

      return {
        ...state,
        ordersForTab: result11,
      };

    case ORDER_GET_ONLY_VENDOR:
      const ONLYVENDOR1 = [...state.ordersForTab1];

      const result = ONLYVENDOR1.reduce((acc, {vendor}) => {
        const entry = acc.find(i => i.vendor === vendor);

        if (!entry) {
          acc.push({
            vendor,
            isChecked: false,
          });
        } else {
          entry.vendor = vendor;
          entry.isChecked = false;
        }
        return acc;
      }, []);

      return {
        ...state,
        onlyVendor: result,
        onlyVendor1: result,
        checkList: [],
      };
    //CHECK LIST
    case CHECK_VENDOR:
      // console.log(action.id);
      let d = state.onlyVendor.map(item => {
        if (action.id === item.vendor) {
          item.isChecked = !item.isChecked;
        }
        return item;
      });

      const seletedData = d.filter(item => item.isChecked);
      return {
        ...state,
        onlyVendor: d,

        checkList: seletedData,
      };
    // =========GET ONLY  DATA======
    //SEARCH ONLY VENDOR
    case ORDER_SEARCH_OLLY_VENDOR:
      const ONLYVENDOR = [...state.onlyVendor1];

      if (action.data) {
        const newData1 = ONLYVENDOR.filter(function (item) {
          const itemData = item.vendor.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          onlyVendor: newData1,
        };
      } else {
        return {
          ...state,
          onlyVendor: state.onlyVendor1,
        };
      }

    //SEARCH ONLY Status
    case ORDER_FILTER_BY_STATUS:
      const datasearStatus = [...state.ordersForTab1];

      if (action.data) {
        const newData1 = datasearStatus.filter(function (item) {
          const itemData = item.Status.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          ordersForTab: newData1,
        };
      } else {
        return {
          ...state,
          ordersForTab: state.ordersForTab1,
        };
      }
    //==================FILTER

    //ALL DATA
    case ALL_DATA:
      const allData = [...state.ordersForTab1];
      return {
        ...state,
        ordersForTab: allData,
      };
    //FILTER BY BETWEEN DATE
    case ORDER_FILTER_BY_BETWEEN_DATE:
      const BT = [...state.ordersForTab1];
      const start = moment(action.startDate).format('YYYY-MM-DD');

      const end = moment(action.endDate).format('YYYY-MM-DD');

      const btd = BT.filter(item => {
        const dd = moment(item.Creation_Date).format('YYYY-MM-DD');
        return dd >= start && dd <= end;
      });

      return {
        ...state,
        ordersForTab: btd,
      };
    //FILTER BY ONLY VENDOR

    case ORDER_FILTER_ONLY_VENDOR:
      const filterOnlyVendor = [...state.ordersForTab1];
      // console.log(action.data, 'data');

      const filterOnlyVendor1 = filterOnlyVendor.filter(
        // moment(date).format('MM-DD-YY')
        item => item.vendor == action.data,
      );
      return {
        ...state,
        ordersForTab: filterOnlyVendor1,
      };

    //FILTER BY ONLY VENDOR
    //FIRTER BY DATE
    case ORDER_FILTER_BY_DATE:
      const FITERDATA = [...state.ordersForTab1];

      const NEWDATAFILTER = FITERDATA.filter(item => {
        return (
          moment(item.Creation_Date).format('YYYY-MM-DD') ==
          moment(action.data).format('YYYY-MM-DD')
        );
      });

      return {
        ...state,
        ordersForTab: NEWDATAFILTER,
      };
    //=========TYPE
    case GET_ORDERS_FOR_TAB_FILTER_TYPE:
      const datasearch = [...state.ordersForTab1];

      if (action.data) {
        const newData = datasearch.filter(function (item) {
          const itemData = item.Order_Type.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          ordersForTab: newData,
        };
      } else {
        return {
          ...state,
          ordersForTab: state.ordersForTab1,
        };
      }

    //==================FILTER
    //STATUS COMPLETED
    case FILTER_STATUS_BY_COMPLETED:
      const comptedtedata = [...state.ordersForTab1];
      const comdata = comptedtedata.filter(item => item.Status == 'Completed');
      return {
        ...state,
        ordersForTab: comdata,
      };

    //ORDER_FILTER_BY_INV_ID
    case ORDER_FILTER_BY_INV_ID:
      const datasearch_INv = [...state.ordersForTab1];
      // console.log(action.data, 'data');

      const newDataINV = datasearch_INv.filter(
        item => item.Smart_Site_Order_No == action.data,
      );
      return {
        ...state,
        ordersForTab: newDataINV,
      };

    //ORDER_FILTER_BY_INV_ID
    case GET_ORDERS_FOR_TAB_FILTER_SMARTSITE:
      const datasearch1 = [...state.ordersForTab1];

      if (action.data) {
        const newData = datasearch1.filter(function (item) {
          const itemData = item?.Inventory_ID.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          ordersForTab: newData,
        };
      } else {
        return {
          ...state,
          ordersForTab: state.ordersForTab1,
        };
      }
    case GET_ORDERS_FOR_TAB_FILTER_VENDOR:
      const datasearch3 = [...state.ordersForTab1];

      if (action.data) {
        const newData = datasearch3.filter(function (item) {
          const itemData = item.vendor.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          ordersForTab: newData,
        };
      } else {
        return {
          ...state,
          ordersForTab: state.ordersForTab1,
        };
      }
    //FILTER DATA BY STATUS
    case GET_ORDERS_FOR_TAB_FILTER_STATUS:
      const datasearch4 = [...state.ordersForTab1];
      const newData = datasearch4.filter(item => item.Status === action.data);

      return {
        ...state,
        ordersForTab: newData,
      };
    // if (action.data) {
    //   const newData = datasearch4.filter(function (item) {
    //     const itemData = item.Status.toUpperCase();

    //     return itemData.startsWith(action.data.toUpperCase());
    //   });
    //   return {
    //     ...state,
    //     ordersForTab: newData,
    //   };
    // } else {
    //   return {
    //     ...state,
    //     ordersForTab: state.ordersForTab1,
    //   };
    // }
    //SORT VENDOR ASCENDING
    case SORT_BY_VENDOR_ASC:
      const datasearch5 = [...state.ordersForTab1];

      const ascData = datasearch5.sort((a, b) => {
        let fa = a.vendor.toLowerCase(),
          fb = b.vendor.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;

        // if (a.Smart_Site_Order_No === null) {
        //   return 1;
        // }

        // if (b.Smart_Site_Order_No === null) {
        //   return -1;
        // }

        // if (a.Smart_Site_Order_No === b.Smart_Site_Order_No) {
        //   return 0;
        // }

        // return a.Smart_Site_Order_No < b.Smart_Site_Order_No ? -1 : 1;
      });

      return {
        ...state,
        ordersForTab: ascData,
      };
    //SORT VENDOR DESCENDING
    case SORT_BY_VENDOR_DES:
      const datasearch6 = [...state.ordersForTab1];

      const desData = datasearch6.sort((a, b) => {
        let fa = a.vendor.toLowerCase(),
          fb = b.vendor.toLowerCase();

        if (fb < fa) {
          return -1;
        }
        if (fb > fa) {
          return 1;
        }
        return 0;
        // if (a.Smart_Site_Order_No === null) {
        //   return 1;
        // }

        // if (b.Smart_Site_Order_No === null) {
        //   return -1;
        // }

        // if (a.Smart_Site_Order_No === b.Smart_Site_Order_No) {
        //   return 0;
        // }

        // return a.Smart_Site_Order_No < b.Smart_Site_Order_No ? 1 : -1;
      });

      return {
        ...state,
        ordersForTab: desData,
      };
    //SORT STATUS ASCENDING
    case SORT_BY_STATUS_ASC:
      const datasearch7 = [...state.ordersForTab1];

      const statusAsc = datasearch7.sort((a, b) => {
        let fa = a.Status.toLowerCase(),
          fb = b.Status.toLowerCase();

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
        ordersForTab: statusAsc,
      };
    //SORT STATUS DESCENDING
    case SORT_BY_STATUS_DES:
      const datasearch8 = [...state.ordersForTab1];

      const statuDes = datasearch8.sort((a, b) => {
        let fa = a.Status.toLowerCase(),
          fb = b.Status.toLowerCase();

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
        ordersForTab: statuDes,
      };
    //SORT DATE ASCENDING
    case SORT_BY_DATE_ASC:
      const datasearch9 = [...state.ordersForTab1];

      const dateAsc = datasearch9.sort((a, b) => {
        // console.log(a);
        let fa = new Date(a.Creation_Date),
          fb = new Date(b.Creation_Date);
        return fa - fb;
        // if (fa < fb) {
        //   return -1;
        // }
        // if (fa > fb) {
        //   return 1;
        // }
        // return 0;
      });

      return {
        ...state,
        ordersForTab: dateAsc,
      };
    //SORT DATE DESCENDING
    case SORT_BY_DATE_DES:
      // alert('no');
      const datasearch10 = [...state.ordersForTab1];

      const dateDes = datasearch10.sort((a, b) => {
        let fa = new Date(a.Creation_Date),
          fb = new Date(b.Creation_Date);
        return fb - fa;
        // if (fb < fa) {
        //   return -1;
        // }
        // if (fb > fa) {
        //   return 1;
        // }
        // return 0;
      });

      return {
        ...state,
        ordersForTab: dateDes,
      };
    //SORT INV_ID ASCENDING
    case SORT_BY_INV_ID_ASC:
      const datasearch11 = [...state.ordersForTab1];

      const invAsc = datasearch11.sort((a, b) => {
        let fa = a.Inventory_ID.toLowerCase(),
          fb = b.Inventory_ID.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      // console.log(invAsc[0]);
      return {
        ...state,
        ordersForTab: invAsc,
      };
    //SORT INV_ID DESCENDING
    case SORT_BY_INV_ID_DES:
      const datasearch12 = [...state.ordersForTab1];

      const invDes = datasearch12.sort((a, b) => {
        let fa = a.Inventory_ID.toLowerCase(),
          fb = b.Inventory_ID.toLowerCase();

        if (fb < fa) {
          return -1;
        }
        if (fb > fa) {
          return 1;
        }
        return 0;
      });
      // console.log(invDes[0]);
      return {
        ...state,
        ordersForTab: invDes,
      };
    //SORT ORDER_TYPE ASCENDING
    case SORT_BY_ORDER_TYPE_ASC:
      const datasearch13 = [...state.ordersForTab1];

      const orderAsc = datasearch13.sort((a, b) => {
        let fa = a.Order_Type.toLowerCase(),
          fb = b.Order_Type.toLowerCase();

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
        ordersForTab: orderAsc,
      };
    //SORT ORDER_TYPE DESCENDING
    case SORT_BY_ORDER_TYPE_DES:
      const datasearch14 = [...state.ordersForTab1];

      const orderDes = datasearch14.sort((a, b) => {
        let fa = a.Order_Type.toLowerCase(),
          fb = b.Order_Type.toLowerCase();

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
        ordersForTab: orderDes,
      };
    //=================FILTER
    case ORDER_FILTER_BY_ORDER_TYPE:
      const datasearch15 = [...state.ordersForTab1];

      const filterdata = datasearch15.filter(
        item => item.Order_Type === action.data,
      );

      return {
        ...state,
        ordersForTab: filterdata,
      };

    default:
      return state;
  }
};
