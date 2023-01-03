import {
  ATMS_ALL_VENDOR,
  ATMS_ALL_VENDOR_SEARCH,
} from '../../actions/actionType/AtmsAssets';

const initialState = {
  assetsAtmsVendor: [],
  assetsAtmsVendor1: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ATMS_ALL_VENDOR:
      // console.log(action.payload.data, 'action');
      return {
        ...state,
        assetsAtmsVendor: action.payload.data,
        assetsAtmsVendor1: action.payload.data,
      };
    case ATMS_ALL_VENDOR_SEARCH:
      const ATMSEARCH = [...state.assetsAtmsVendor1];
      if (action.data) {
        const serachdata = ATMSEARCH.filter(function (item) {
          const itemData = item?.id.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          assetsAtmsVendor: serachdata,
        };
      } else {
        return {
          ...state,
          assetsAtmsVendor: state.assetsAtmsVendor1,
        };
      }

    default:
      return state;
  }
};
