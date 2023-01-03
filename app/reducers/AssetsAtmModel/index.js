import {
  ATMS_ALL_MODEL_SEARCH,
  ATMS_ALL_MODEL,
} from '../../actions/actionType/AtmsAssets';

const initialState = {
  assetsAtmsModel: [],
  assetsAtmsModel1: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ATMS_ALL_MODEL:
      // console.log(action.payload.data, 'action');
      return {
        ...state,
        assetsAtmsModel: action.payload.data,
        assetsAtmsModel1: action.payload.data,
      };
    case ATMS_ALL_MODEL_SEARCH:
      const ATMSEARCH = [...state.assetsAtmsModel1];

      if (action.data) {
        const serachdata = ATMSEARCH.filter(function (item) {
          const itemData = item?.id.toUpperCase();

          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          assetsAtmsModel: serachdata,
        };
      } else {
        return {
          ...state,
          assetsAtmsModel: state.assetsAtmsModel1,
        };
      }

    default:
      return state;
  }
};
