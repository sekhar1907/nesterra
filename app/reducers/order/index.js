import {
  GET_ORDER,
  SORT_BY_ORDER_ID_ASC,
  SORT_BY_ORDER_ID_DES,
  SORT_BY_ORDER_TYPE_ASC,
  SORT_BY_ORDER_TYPE_DES,
  SORT_BY_ORDER_STATUS_ASC,
  SORT_BY_ORDER_STATUS_DES,
  SORT_BY_ORDER_VENDOR_ASC,
  SORT_BY_ORDER_VENDOR_DES,
  FILTER_BY_STATUS_ACTIVE,
  ALL_DATA,
} from '../../actions/actionType/action.Order.type';

const initialState = {
  order: [],
  order1: [],
  orderLoad: false,
  id: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      // console.log(action.payload.data, 'action.payload.data');
      return {
        ...state,
        order: action.payload.data,
        order1: action.payload.data,
        id: action.payload.id,
      };
    //===============FILTER
    case FILTER_BY_STATUS_ACTIVE:
      const FILTERDATA = [...state.order1];
      const fdata = FILTERDATA.filter(item => item.Status == 'Completed');

      return {
        ...state,
        order: fdata,
      };
    case ALL_DATA:
      const adata = [...state.order1];

      return {
        ...state,
        order: adata,
      };

    //===============FILTER
    //  SORT ID ASCENDING

    case SORT_BY_ORDER_ID_ASC:
      const data = [...state.order1];
      const cirIdAsc = data.sort((a, b) => {
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

      return {
        ...state,
        order: cirIdAsc,
      };
    //SORT Inventory_ID DESCENDING
    case SORT_BY_ORDER_ID_DES:
      const data1 = [...state.order1];

      const cirIdDes = data1.sort((a, b) => {
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

      return {
        ...state,
        order: cirIdDes,
      };
    //  SORT VENDOR ASCENDING
    case SORT_BY_ORDER_VENDOR_ASC:
      const data2 = [...state.order1];
      const vendorAsc = data2.sort((a, b) => {
        let fa = a.vendor.toLowerCase(),
          fb = b.vendor.toLowerCase();

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
        order: vendorAsc,
      };
    //SORT VENDOR DESCENDING
    case SORT_BY_ORDER_VENDOR_DES:
      const data3 = [...state.order1];

      const vendorDes = data3.sort((a, b) => {
        let fa = a.vendor.toLowerCase(),
          fb = b.vendor.toLowerCase();

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
        order: vendorDes,
      };
    //  SORT TYPE ASCENDING
    case SORT_BY_ORDER_TYPE_ASC:
      const data4 = [...state.order1];
      const catrAsc = data4.sort((a, b) => {
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
        order: catrAsc,
      };
    //SORT TYPE DESCENDING
    case SORT_BY_ORDER_TYPE_DES:
      const data5 = [...state.order1];

      const catDes = data5.sort((a, b) => {
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
        order: catDes,
      };
    //  SORT STATUS ASCENDING
    case SORT_BY_ORDER_STATUS_ASC:
      const data6 = [...state.order1];
      const subcat1Asc = data6.sort((a, b) => {
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
        order: subcat1Asc,
      };
    //SORT STATUS DESCENDING
    case SORT_BY_ORDER_STATUS_DES:
      const data7 = [...state.order1];

      const subcat1Des = data7.sort((a, b) => {
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
        order: subcat1Des,
      };

    default:
      return state;
  }
};
