import {ATMS_ALL_TYPE} from '../../actions/actionType/AtmsAssets';

const initialState = {
  allAtmsSiteId: [],
  allAtmsSiteId1: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ATMS_ALL_TYPE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
