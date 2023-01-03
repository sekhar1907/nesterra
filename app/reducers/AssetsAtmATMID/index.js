import {
  ATMS_ALL_ATM_ID_SEARCH,
  ATMS_ALL_ATM_ID,
} from '../../actions/actionType/AtmsAssets';

const initialState = {
  assetsAtmsATMID: [],
  assetsAtmsATMID1: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ATMS_ALL_ATM_ID:
      // console.log(action.payload.data, 'action');
      return {
        ...state,
        assetsAtmsATMID: action.payload.data,
        assetsAtmsATMID1: action.payload.data,
      };
    case ATMS_ALL_ATM_ID_SEARCH:
      const ATMSEARCH = [...state.assetsAtmsATMID1];

      if (action.data) {
        const serachdata = ATMSEARCH.filter(function (item) {
          const itemData = item?.id.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          assetsAtmsATMID: serachdata,
        };
      } else {
        return {
          ...state,
          assetsAtmsATMID: state.assetsAtmsATMID1,
        };
      }

    default:
      return state;
  }
};
