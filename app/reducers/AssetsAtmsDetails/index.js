import {ATMS_ALL_DETAILS} from '../../actions/actionType/AtmsAssets';

const initialState = {
  item: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ATMS_ALL_DETAILS:
      //   console.log(action.payload.data);
      return {
        ...state,
        item: action.payload.data[0],
      };

    default:
      return state;
  }
};
