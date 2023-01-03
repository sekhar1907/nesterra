import {
  ALL_SITE_ID,
  FILTER_BY_LOC_ID_OR_SITE_SITE_ID,
} from '../../actions/actionType/AllSiteID';

const initialState = {
  allSiteID: [],
  allSiteID1: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_SITE_ID:
      //   console.log(action.payload.data);
      return {
        ...state,
        allSiteID: action.payload.data,
        allSiteID1: action.payload.data,
      };
    //FILTER BY LOCATION ID OR SITE ID
    case FILTER_BY_LOC_ID_OR_SITE_SITE_ID:
      const data = [...state.allSiteID1];
      // console.log(action.data, 'dd');
      if (action.data) {
        const newData1 = data.filter(function (item) {
          const itemData = item?.id.toUpperCase();
          return itemData.startsWith(action.data.toUpperCase());
        });
        return {
          ...state,
          allSiteID: newData1,
        };
      } else {
        return {
          ...state,
          allSiteID: state.allSiteID1,
        };
      }
    default:
      return state;
  }
};
