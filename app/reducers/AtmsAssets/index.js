import {
  ALL_ATMS,
  FILTER_ALL_ATMS,
  FILTER_BY_ACTIVE,
  ALL_ATMS_FILTER_BY_VENDOR,
  ALL_ATMS_FILTER_BY_MODEL,
  ALL_ATMS_FILTER_BY_ATM_ID,
} from './../../actions/actionType/AtmsAssets/index';
const initialState = {
  data: [],
  data1: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_ATMS:
      const alldata = action.payload.data.filter(
        item => item.ATM_Status == 'Active',
      );
      return {
        ...state,
        data: alldata,
        data1: action.payload.data,
      };
    case FILTER_ALL_ATMS:
      const FDATA = [...state.data1];
      return {
        ...state,
        data: FDATA,
      };
    //========filter by status
    case FILTER_BY_ACTIVE:
      const aDATA = [...state.data1];
      const FADATA = aDATA.filter(item => item.ATM_Status == 'Active');
      return {
        ...state,
        data: FADATA,
      };

    //===========filter by vendor
    case ALL_ATMS_FILTER_BY_VENDOR:
      const VDATA = [...state.data1];
      const FADATAFILTER = VDATA.filter(item => item.Vendor == action.data);
      return {
        ...state,
        data: FADATAFILTER,
      };
    //===========filter by MODEL
    case ALL_ATMS_FILTER_BY_MODEL:
      const MDATA = [...state.data1];
      const MDATAFILTER = MDATA.filter(item => item.Model == action.data);
      return {
        ...state,
        data: MDATAFILTER,
      };
    //===========filter by ATM ID
    case ALL_ATMS_FILTER_BY_ATM_ID:
      const ATMDATA = [...state.data1];
      const ATMDATAFILTER = ATMDATA.filter(item => item.ATM_ID == action.data);
      return {
        ...state,
        data: ATMDATAFILTER,
      };

    default:
      return state;
  }
};
