import {
  ATMS_ALL_TYPE,
  ATMS_ALL_TYPE_SEARCH,
} from '../../actions/actionType/AtmsAssets';

const initialState = {
  assetsAtmsType: [],
  assetsAtmsType1: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ATMS_ALL_TYPE:
      // console.log(action.payload.data, 'action');
      return {
        ...state,
        assetsAtmsType: action.payload.data,
        assetsAtmsType1: action.payload.data,
      };
    case ATMS_ALL_TYPE_SEARCH:
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
